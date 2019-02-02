<template>
  <div v-if="show" class="center" style="width: 100%; height: 100%; background: rgba(255, 255, 255, .3); position: fixed; top: 0; left: 0;" >
    <slot name="v"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    show() { return this.$store.state.modal.show },
  },
  methods: {
    off() {
      this.$store.dispatch('modal/off')
    },
  },
}
</script>
