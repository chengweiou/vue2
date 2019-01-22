<template>
  <main>
    <div>
      <button @click="load">reload</button>
    </div>
    <div>
      <div v-if="loading"><loading style="width: 30px; height: 30px;"/></div>
      <div v-else style="display: flex; ">
        <article v-for="(e, i) in list" :key="i" @click="goDetail(i)">
          <section style="width: 200px; height: 100px; ">
            <div>{{e.name}}</div>
            <div>{{e.phone | phone}}</div>
            <div>{{e.vote | number}}</div>
            <div>{{e.date | date({to: 'MMM dd, yyyy'})}}</div>
          </section>
        </article>
      </div>
      <section>total: {{total}}</section>
    </div>
  </main>
</template>

<script>
import loading from '@/component/loading'
export default {
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    total() { return this.$store.state.xxx.total },
    list() { return this.$store.state.xxx.list },
  },
  components: {
    loading,
  },
  created() {
    this.count()
    this.load()
  },
  methods: {
    async count() {
      this.$store.dispatch('xxx/count')
    },
    async load() {
      this.loading = true
      await Promise.all([this.$store.dispatch('xxx/load'), this.$wait(1000)])
      this.loading = false
    },
    goDetail(i) {
      this.$router.push({ name: 'xxx', params: { id: this.list[i].id } })
    },
  },
}
</script>
