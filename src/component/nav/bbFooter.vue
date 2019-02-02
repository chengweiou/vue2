<template>
  <footer class="center df-column" style="height: 100px;">
    <section class="df df-column">
      <div @click="changeLang('zh')">zh</div>
      <div @click="changeLang('en')">en</div>
    </section>
    &copy;2018 chengweiou
  </footer>
</template>

<script>
export default {
  methods: {
    changeLang(e) {
      this.$i18n.locale = e
      this.$storage.set('lang', this.$i18n.locale)
    },
  },
}
</script>

<style scoped>
</style>

<style>

</style>
