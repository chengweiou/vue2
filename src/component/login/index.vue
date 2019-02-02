<template>
  <div v-if="show" class="center" style="width: 100%; height: 100%; background: rgba(255, 255, 255, .3); position: fixed; top: 0;">
    <div class="center bg-black" style="width: 300px; height: 300px; position: relative;">
      <div style="position: absolute; top: 0; right: 0;"><div class="center pointer" style="width: 30px; height: 30px;" @click="off">x</div></div>
      <div style="width: 80%; height: 80%;">
        <div class="center f-t1" style="margin-bottom: 50px;">Login</div>
        <div style="margin-bottom: 50px;">
          <section class="df df-aic" style="margin-bottom: 10px;">
            <div style="margin-right: 10px;">username:</div>
            <div class="" style="width: 200px; height:20px; border: 1px solid #ddd;"><input style="margin: 0 10px; width: 90%; background: transparent; border: 0; color: #ddd;" v-model="account.username"></div>
          </section>
          <section class="df df-aic" style="margin-bottom: 10px;">
            <div style="margin-right: 10px;">password:</div>
            <div class="" style="width: 200px; height:20px; border: 1px solid #ddd;"><input type="password" style="margin: 0 10px; width: 90%; background: transparent; border: 0; color: #ddd;" v-model="account.password"></div>
          </section>
        </div>
        <section class="center" style="margin-bottom: 10px;">
          <div v-if="loading" class="center" style="width: 100%;"><loading style="width: 30px; height: 30px;"/></div>
          <button v-else class="btn-white" style="width: 100px; height: 30px;" @click="login">Login</button>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import loading from '@/component/loading'
export default {
  data() {
    return {
      loading: false,
      form: {
        username: '',
        password: '',
      },
    }
  },
  computed: {
    show() { return this.$store.state.me.showLogin },
  },
  components: {
    loading,
  },
  methods: {
    async login() {
      this.loading = true
      await Promise.all([this.$store.dispatch('me/login', this.form), this.$wait(1000)])
      this.loading = false
    },
    off() {
      this.$store.dispatch('me/offLogin')
    },
  },
}
</script>

<style scoped>
</style>

<style>

</style>
