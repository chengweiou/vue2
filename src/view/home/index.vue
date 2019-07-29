<template>
  <div class="center df-column" style="margin-left: 10px;">
    <div class="center" style="margin-bottom: 20px;" >模块列表</div>
    <div class="df df-wrap" style="width: 100%;">
      <section v-for="(e, i) in moduleList" :key="i" class="center card" style="margin-right: 10px; margin-bottom: 10px; width: 200px; height: 50px; border-radius: 10px;" @click="go(e)">{{e}}</section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    moduleList() {
      // auto load from store, map.init is required
      let stateMap = this.$store.state
      const result = []
      Object.keys(stateMap).filter(k => k !== 'flow' && stateMap[k].map && stateMap[k].map.init).map(k => {
        result.push(k)
      })
      return result
    },
  },
  methods: {
    go(v) {
      this.$store.dispatch('flow/init', this.$store.state[v].map)
      this.$router.push({ name: 'detail' })
    },

  },
}
</script>
<style scoped>
.card { background: #666; border: 1px solid #888; color: #888; }
.card:hover { background: #444; border: 1px solid #fff; color: #ddd; }
</style>
