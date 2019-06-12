<template>
  <header style="width: 100%; background: #333;">
    <div class="df" style="margin: 0 10px; height: 50px;">
      <section class="center pointer" style="margin-right: 30px;" @click="go('home')"><img style="width: 30px; height: 30px;" src="@/assets/img/logo.png"></section>
      <div class="df df-jcsb ">
        <section class="center pointer link" style="margin-right: 30px;" @click="go('login')">login</section>
        <section class="center pointer link" style="margin-right: 30px;" @click="go('weapon')">weapon</section>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  computed: {
  },
  methods: {
    go(v) {
      this.$router.push({ name: v })
    },
  },
}
</script>

<style scoped>
.link:hover {
  color: #fff;
}
</style>

<style>
</style>
