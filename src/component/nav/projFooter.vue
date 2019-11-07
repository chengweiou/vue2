<template>
  <footer class="center df-column" style="height: 100px;">
    &copy;2019 chengweiou
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
