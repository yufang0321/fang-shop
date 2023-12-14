<template>
  <div class="modal fade" id="exampleModal"
  tabindex="-1" aria-labelledby="exampleModalLabel"
  aria-hidden="true" ref="modal">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">刪除 {{ item.title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            是否刪除 <span style="color: red">{{ item.title }}</span> (刪除後無法恢復)。
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button"
            class="btn btn-danger"
            @click="confirm"
            >確認刪除</button>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'

export default {
  props: {
    item: {},
    view: {}
  },
  data () {
    return {
      modal: {}
    }
  },
  mixins: [modalMixin],
  methods: {
    confirm () {
      if (this.view === 'delProduct') {
        this.$emit('delete-product', this.item.id)
      } else if (this.view === 'delCoupon') {
        this.$emit('del-coupon', this.item.id)
      } else if (this.view === 'delOrder') {
        this.$emit('delete-order', this.item.id)
      }
    }
  }
}
</script>
