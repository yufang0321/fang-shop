<template>
  <LoadingComponent :active="isloading"></LoadingComponent>
  <Navbar></Navbar>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view/>
  </div>
</template>
<script>
import Navbar from '../components/NavbarView.vue'
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'

export default {
  data () {
    return {
      isloading: false
    }
  },
  components: {
    Navbar,
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  },
  created () {
    // 檢查是否登入
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1')
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.isLoading = true
    this.$http.post(api, this.user)
      .then((res) => {
        this.isLoading = false
        // 若無登入則導入登入頁面
        if (!res.data.success) {
          this.$router.push('login')
        }
      })
  }
}
</script>
