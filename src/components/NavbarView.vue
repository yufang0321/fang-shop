<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">GOGO露營趣</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" @click.prevent="goPage('products')">產品</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="goPage('orders')">訂單</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="goPage('coupon')">優惠券</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logout">登出</a>
          </li>
        </ul>
        <span class="navbar-text">
          管理者介面
        </span>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      console.log(api)
      this.$http.post(api, this.user)
        .then((res) => {
          this.$router.push('/login')
        })
    },
    goPage (page) {
      console.log('go:', page)
      this.$router.push(`/dashboard/${page}`)
    }
  }
}
</script>
