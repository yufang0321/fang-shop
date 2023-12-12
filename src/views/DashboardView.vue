<template>
  <LoadingComponent :active="isloading"></LoadingComponent>
  <Navbar></Navbar>
  <div class="container-fluid">
    <router-view/>
  </div>
</template>
<script>
import Navbar from '../components/NavbarView.vue'

export default {
  data () {
    return {
      isloading: false
    }
  },
  components: {
    Navbar
  },
  created () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1')
    console.log(token)
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.isLoading = true
    this.$http.post(api, this.user)
      .then((res) => {
        this.isLoading = false
        if (!res.data.success) {
          this.$router.push('login')
        }
      })
  }
}
</script>
