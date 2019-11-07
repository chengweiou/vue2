<template>
  <main>
    <div style="width: 50px; height: 50px;"><centerImage :src="'https://vuejs.org/images/logo.png'"/></div>
    <div>
      <button @click="goList">goList</button>
    </div>
    <div>
      <section>{{detail.id}}</section>
      <section>{{detail.name}}</section>
      <section>{{detail.phy | number}}</section>
      <section>{{detail.bld | number}}</section>
      <section>{{detail.createAt | date}}</section>
    </div>
  </main>
</template>

<script>
import loading from '@/component/loading'
import clone from '@/fn/util/clone'
import centerImage from '@/component/image/centerImage'
export default {
  data() {
    return {
      form: {},
      showUpdate: false,
      updateLoading: false,
    }
  },
  computed: {
    detail() { return this.$store.state.xxx.detail },
  },
  components: {
    centerImage,
  },
  created() {
    this.findById()
  },
  methods: {
    async findById() {
      this.$store.dispatch('xxx/findById', { id: this.$route.params.id })
    },
    goList() {
      this.$router.push({ name: 'xxxList' })
    },
    onUpdate() {
      this.showUpdate = true
      this.form = clone(this.detail)
    },
    offUpdate() {
      this.showUpdate = false
    },
    async update() {
      this.updateLoading = true
      let pList = await Promise.all([this.$store.dispatch('xxx/update', this.form), this.$wait(1000)])
      this.updateLoading = false
      if (!pList[0]) return
      this.showUpdate = false
      this.detail = clone(this.form)
    },
  },
}
</script>
