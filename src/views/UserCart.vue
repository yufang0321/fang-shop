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
                    <input type="number" min="1" class="form-control" v-model="item.qty">
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
                  <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                    <div class="btn-group" role="group" aria-label="First group">
                      <input type="number" min="1" @change="updateCart(item)"
                      :disabled="item.id === status.loadingItem" class="form-control" v-model="item.qty">
                    </div>
                  </div>
                </td>
                <td>
                  <button type="button" class="btn btn-outline-danger" @click="deleteProduct(item.id)">
                    <i class="bi bi-trash3"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            <div>
              <p class="text-end h5" v-if="onDiscount === true" style="color: #42b840">已套用折扣</p>
            </div>
          </table>
          <div>
            <p class="text-end h5">總計：{{ order.total }}</p>
          </div>
          <div>
            <p class="text-end h5" v-if="onDiscount === true" style="color: #42b840">折扣後價格：{{ $filters.round(order.final_total) }}</p>
          </div>
          <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="coupon">
              <button type="button" @click="addCoupon()" class="btn btn-outline-secondary">套用優惠券</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-5 row justify-content-center">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input id="email" name="email" type="email" class="form-control"
                  placeholder="請輸入 Email" rules="email|required"
                  v-model="form.user.email">
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <input id="name" name="姓名" type="text" class="form-control"
                  placeholder="請輸入姓名" rules="required"
                  v-model="form.user.name">
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <input id="tel" name="電話" type="tel" class="form-control"
                  placeholder="請輸入電話" rules="required"
                  v-model="form.user.tel">
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <input id="address" name="地址" type="text" class="form-control"
                  placeholder="請輸入地址" rules="required"
                  v-model="form.user.address">
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea name="" id="message" class="form-control" cols="30" rows="10"
                    v-model="form.message"></textarea>
        </div>
        <div class="text-end">
          <button class="btn btn-danger" @click.prevent="createOrder()">送出訂單</button>
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
        loadingItem: '',
        onDiscount: false
      },
      coupon: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
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
          product.qty = 1
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
      if (product.qty > 1) {
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
    },
    updateCart (item) {
      const updateCartUrl = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.status.loadingItem = item.id
      const cart = {
        product_id: item.id,
        qty: item.qty
      }
      this.$http.put(updateCartUrl, { data: cart }).then((response) => {
        console.log(response.data)
        this.status.loadingItem = ''
        this.getCart()
      })
    },
    addCoupon () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const data = {
        code: this.coupon
      }
      this.$http.post(url, { data: data }).then((response) => {
        console.log(response)
        if (response.data.success) {
          this.getCart()
          this.onDiscount = true
          this.coupon = ''
          this.$httpMessageState(response)
        } else {
          this.$httpMessageState(response)
        }
      })
    },
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order })
        .then((res) => {
          console.log('createOrder------>', res)
        })
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>
