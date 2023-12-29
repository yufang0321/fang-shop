<template>
  <LoadingComponent :active="isLoading"></LoadingComponent>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">購買時間</th>
        <th width="120">Email</th>
        <th width="200">購買款項</th>
        <th width="120">應付金額</th>
        <th width="100">是否付款</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in orders" :key="item.id">
        <td>{{ $filters.date(item.create_at) }}</td>
        <td>{{ item.user.email }}</td>
        <td>
          <ul class="list-unstyled">
            <li v-for="(product, i) in item.products" :key="i">
              {{ product.product.title }} 數量：{{ product.qty }}
              {{ product.product.unit }}
            </li>
          </ul>
        </td>
        <td class="text-right">
          {{ item.total }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_paid">已付款</span>
          <span class="text-muted" v-else>未付款</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openModal(item)">檢視</button>
            <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <PaginationView :pages="pagination"
  @emit-pages="getOrders"></PaginationView>
  <OrderModal ref="orderModal"
  :order="tempOrder"
  @update-order="updateOrder"></OrderModal>
  <DelModal ref="delModal"
  :view="`delOrder`"
  :item="delProduct"
  @delete-order="deleteOrder"
  ></DelModal>
</template>
<script>
import OrderModal from '../components/OrderModal.vue'
import DelModal from '../components/DelModal.vue'
import LoadingComponent from 'vue3-loading-overlay'
import PaginationView from '@/components/PaginationView.vue'

export default {
  data () {
    return {
      orders: [],
      pagination: {},
      tempOrder: {},
      isNew: false,
      delProduct: {},
      isLoading: false
    }
  },
  components: {
    OrderModal,
    DelModal,
    LoadingComponent,
    PaginationView
  },
  inject: ['emitter'],
  methods: {
    getOrders (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.isLoading = true
      console.log(api)
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false
          console.log('orders:', res)
          if (res.data.success) {
            this.orders = res.data.orders
            this.pagination = res.data.pagination
          }
        })
    },
    openModal (item) {
      this.tempOrder = { ...item }
      const orderComponent = this.$refs.orderModal
      orderComponent.showModal()
    },
    openDelModal (item) {
      this.delProduct = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    updateOrder (item) {
      this.tempProduct = item
      // 修改訂單
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      const orderComponent = this.$refs.orderModal
      this.isLoading = true
      this.$http.put(api, { data: this.tempOrder }).then(
        (response) => {
          this.isLoading = false
          console.log(response)
          orderComponent.hideModal()
          this.getOrders()
          this.$httpMessageState(response, '更新')
        }
      )
    },
    deleteOrder (productId) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${productId}`
      const delComponent = this.$refs.delModal
      this.isLoading = true
      this.$http.delete(api).then(
        (response) => {
          this.isLoading = false
          delComponent.hideModal()
          this.getOrders()
        }
      )
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
