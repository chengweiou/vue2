<template>
  <div class="center df-column" style="margin-left: 10px;">
    <div class="center" style="margin-bottom: 20px;" >模块列表</div>
    <div class="df df-wrap" style="width: 100%;">
      <section v-for="(e, i) in goList" :key="i" class="center card" style="margin-right: 10px; margin-bottom: 10px; width: 200px; height: 50px; border-radius: 10px;" @click="go(e)">{{e}}</section>
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
    goList() { return this.$router.options.routes.filter(e => e.meta && e.meta.module).map(e => e.name) },
  },
  methods: {
    go(v) {
      this.$router.push({ name: v })
    },
  },
}
</script>
<style scoped>
.card { background: #666; border: 1px solid #888; color: #888; }
.card:hover { background: #444; border: 1px solid #fff; color: #ddd; }
</style>
