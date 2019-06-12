<template>
  <flow/>
</template>

<script>
import flow from '@/component/flow'
export default {
  data() {
    return {
    }
  },
  computed: {
    map() { return this.$store.state.login.map },
  },
  components: {
    flow,
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.$store.dispatch('flow/init', this.map)
    },
  },
}
</script>
