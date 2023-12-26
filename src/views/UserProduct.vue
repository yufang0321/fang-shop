<template>
  <LoadingComponent :active="isLoading"></LoadingComponent>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/user/cart">購物車</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <article class="col-8">
        <h2>{{ product.title }}</h2>
        <div>{{ product.content }}</div>
        <div>{{ product.description }}</div>
        <img :src="product.imageUrl" alt="" class="img-fluid mb-3">
      </article>
      <div class="col-4">
        <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
        <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
        <div class="h5" v-if="product.price">現在只要 {{ product.price }} 元</div>
        <hr>
        <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group" role="group" aria-label="First group">
            <button type="button" class="btn btn-outline-secondary" @click="deleteQty(product)">-</button>
            <input type="number" class="form-control" v-model="product.qty">
            <button type="button" class="btn btn-outline-secondary" @click="addQty(product)">+</button>
          </div>
        </div>
        <button type="button" class="btn btn-outline-danger"
                @click="addToCart(product)">
          加到購物車
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      product: {},
      id: ''
    }
  },
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        console.log(response.data)
        this.isLoading = false
        if (response.data.success) {
          this.product = { ...response.data.product, qty: 1 }
        }
      })
    },
    addToCart (product) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      console.log('product123:', product)
      const cart = {
        product_id: product.id,
        qty: product.qty
      }
      this.isLoading = true
      this.$http.post(url, { data: cart }).then((response) => {
        this.isLoading = false
        this.$httpMessageState(response, '加入購物車')
        this.$router.push('/user/cart')
      })
    },
    addQty (product) {
      product.qty += 1
    },
    deleteQty (product) {
      if (product.qty > 1) {
        product.qty -= 1
      }
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}
</script>
