<template>
  <main>
    <div style="width: 50px; height: 50px;"><centerImage :src="'https://vuejs.org/images/logo.png'"/></div>
    <div>
      <button @click="goList">goList</button>
    </div>
    <div>
      <section>{{detail.id}}</section>
      <section>{{detail.name}}</section>
      <section>{{detail.phone | phone}}</section>
      <section>{{detail.vote | number}}</section>
      <section>{{detail.date | date}}</section>
    </div>
  </main>
</template>

<script>
import centerImage from '@/component/image/centerImage'
export default {
  data() {
    return {
    }
  },
  computed: {
    detail() { return this.$store.state.xxx.detail },
  },
  components: {
    centerImage,
  },
  created() {
    this.loadById()
  },
  methods: {
    async loadById() {
      this.$store.dispatch('xxx/loadById', { id: this.$route.params.id })
    },
    goList() {
      this.$router.push({ name: 'xxxList' })
    },
  },
}
</script>
