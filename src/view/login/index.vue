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
    this.setMap()
    this.setFirst()
  },
  methods: {
    setMap() {
      this.$store.dispatch('flow/setMap', this.map)
    },
    setFirst() {
      this.$store.dispatch('flow/setFirst', 'login')
    },
  },
}
</script>
