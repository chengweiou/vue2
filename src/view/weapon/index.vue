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
    map() { return this.$store.state.weapon.map },
  },
  components: {
    flow,
  },
  created() {
    this.setMap()
  },
  methods: {
    setMap() {
      this.$store.dispatch('flow/init', this.map)
    },
  },
}
</script>
