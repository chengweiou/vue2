<template>
  <main>
    <div>
      <div>
        <section><input v-model="form.name"></section>
        <div style="display: flex;">
          <div v-if="saveLoading" style="height: 20px;"><loading style="width: 20px; "/></div>
          <div v-else><button style="width: 100px; height: 20px;" @click="save">save</button></div>
        </div>
      </div>

    </div>
    <div>
      <button @click="load">reload</button>
      <div>filter.name<input v-model="filter.name" @keyup="changeFilter"></div>
      <div v-if="loading"><loading style="width: 30px; height: 30px;"/></div>
      <div v-else style="display: flex; flex-wrap: wrap;">
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
      saveLoading: false,
      form: {}, // 图片的话，需要把图片属性名写上，否则本地缩略图会出不来
    }
  },
  computed: {
    total() { return this.$store.state.xxx.total },
    filter() { return this.$store.state.xxx.filter },
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
    async save() {
      if (!this.form.name) {
        return
      }
      this.saveLoading = true
      await Promise.all([this.$store.dispatch('xxx/save', this.form), this.$wait(1000)])
      this.saveLoading = false
    },
    changeFilter() {
      this.$store.dispatch('xxx/changeFilter')
      this.load()
      this.count()
    },
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
