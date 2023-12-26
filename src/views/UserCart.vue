<template>
    <LoadingComponent :active="isLoading"></LoadingComponent>
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-7">
          <table class="table align-middle">
            <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th>數量</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in products" :key="item.id">
              <td style="width: 200px">
                <div style="height: 100px; background-size: cover; background-position: center"
                     :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
              </td>
              <td><a class="text-dark" @click="getProduct(item.id)">{{ item.title }}</a></td>
              <td>
                <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
              </td>
              <td>
                <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                  <div class="btn-group" role="group" aria-label="First group">
                    <button type="button" class="btn btn-outline-secondary" @click="deleteQty(item)">-</button>
                    <input type="number" class="form-control" v-model="item.qty">
                    <button type="button" class="btn btn-outline-secondary" @click="addQty(item)">+</button>
                  </div>
                </div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button type="button" class="btn btn-outline-secondary"
                          @click="getProduct(item.id)">
                    <i class="bi bi-three-dots"></i>
                  </button>
                  <button type="button" class="btn btn-outline-danger"
                          :disabled="this.status.loadingItem === item.id"
                          @click="addCart(item.id, item.qty)">
                    <div v-if="this.status.loadingItem === item.id"
                    class="spinner-grow text-danger spinner-grow-sm" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <i class="bi bi-cart-plus"></i>
                  </button>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <!-- 購物車列表 -->
        <div class="col-md-5">
          <table class="table align-middle">
            <thead>
            <tr>
              <th>品名</th>
              <th>單價</th>
              <th>數量</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in carts" :key="item.id">
              <td><a class="h5">{{ item.product.title }}</a></td>
              <td>
                <div class="h5">{{ item.product.price }} 元</div>
              </td>
              <td>
                <div class="h5">{{ item.qty }}</div>
              </td>
              <td>
                <button type="button" class="btn btn-outline-danger" @click="deleteProduct(item.id)">
                  <i class="bi bi-trash3"></i>
                </button>
              </td>
            </tr>
            </tbody>
          </table>
          <div>
            <p class="text-end h5">總計：{{ order.final_total }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
<script>
export default {
  data () {
    return {
      products: [],
      product: {},
      carts: [],
      order: {},
      status: {
        // 對應品項id
        loadingItem: ''
      }
    }
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.products =
        response.data.products.filter((product, index, arr) => {
          product.qty = 0
          return product
        })
        console.log('products:', this.products)
        this.isLoading = false
      })
    },
    getProduct (id) {
      this.$router.push(`/user/product/${id}`)
    },
    addCart (productId, productQty) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = productId
      const cart = {
        product_id: productId,
        qty: productQty === 0 ? 1 : productQty
      }
      this.$http.post(url, { data: cart }).then((response) => {
        this.status.loadingItem = ''
        this.getCart()
      })
      console.log('item.id:', productId, 'item.qty:', productQty)
    },
    addQty (product) {
      product.qty += 1
    },
    deleteQty (product) {
      if (product.qty > 0) {
        product.qty -= 1
      }
    },
    getCart () {
      const getCartUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(getCartUrl).then((response) => {
        console.log('getCart:', response.data.data)
        this.carts = response.data.data.carts
        this.order = response.data.data
      })
    },
    deleteProduct (productId) {
      const deleteOneUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${productId}`
      this.$http.delete(deleteOneUrl).then((response) => {
        this.$httpMessageState(response, '刪除')
        this.getCart()
      })
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>
