<template>
  <header style="width: 100%; background: #333;">
    <div class="df df-jcsb" style="margin: 0 10px; height: 50px;">
      <section class="center pointer" @click="go('home')"><img style="width: 30px; height: 30px;" src="@/assets/img/logo.png"></section>
      <section class="center pointer link" @click="go('weaponList')">weapons</section>
      <div class="center" style="width: 100px;">
        <section v-if="auth" class="center pointer link" @click="logout">logout</section>
        <section v-else class="center pointer link" @click="onLogin">{{$t('login')}}</section>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    auth() { return this.$store.state.me.auth },
    me() { return this.$store.state.me.user },
  },
  methods: {
    go(v) {
      this.$router.push({ name: v })
    },
    onLogin() {
      this.$store.dispatch('me/onLogin')
    },
    logout() {
      this.$store.dispatch('me/logout')
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

<i18n>
  {
    "en": {
      "login": "login"
    },
    "zh": {
      "login": "登录"
    }
  }
</i18n>
