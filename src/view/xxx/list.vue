<template>
  <main>
    <div>
      <div>
        <section><input v-model="form.name"></section>
        <section style="width: 100px; height: 100px; cursor: pointer;">
          <button @click="reloadDb">reload db img</button>
          <label v-if="form.img" style="width: 100%; height: 100%; display: block;">
            <centerImage :src="form.img"/>
            <input type="file" style="display: none;" @change="readPic()">
          </label>
          <label v-else style="width: 100%; height: 100%; display: block;">
            {{ $t('Image') }} <input type="file" style="display: none;" @change="readPic()" >
          </label>
        </section>
        <div style="display: flex;">
          <div v-if="saveLoading" style="height: 20px;"><loading style="width: 20px; "/></div>
          <div v-else><button style="width: 100px; height: 20px;" @click="save">save</button></div>
        </div>
      </div>

    </div>
    <div>
      <button @click="find">reload</button>
      <button @click="reset">reset</button>
      <div>filter.k<input v-model="filter.k" @keyup="changeFilter"></div>
      <div v-if="loading"><loading style="width: 30px; height: 30px;"/></div>
      <div v-else style="display: flex; flex-wrap: wrap;">
        <article v-for="(e, i) in list" :key="i" @click="goDetail(e)">
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
    <div>
      message from golbal i18n: {{ $t('message') }}
      <button @click="changeLang">chang language</button>
    </div>
  </main>
</template>

<script>
import loading from '@/component/loading'
import centerImage from '@/component/image/centerImage'

export default {
  data() {
    return {
      loading: false,
      saveLoading: false,
      form: { img: '' }, // 图片的话，需要把图片属性名写上，否则本地缩略图会出不来
    }
  },
  computed: {
    total() { return this.$store.state.xxx.total },
    filter() { return this.$store.state.xxx.filter },
    list() { return this.$store.state.xxx.list },
  },
  components: {
    loading, centerImage,
  },
  created() {
    this.count()
    this.find()
  },
  methods: {
    reset() {
      this.$store.dispatch('xxx/reset')
    },
    reloadDb() {
      this.form = this.$store.state.xxxDb.save
    },
    readPic() {
      let reader = new FileReader()
      reader.onload = () => {
        this.form.img = reader.result
        this.$store.dispatch('xxxDb/save', this.form)
      }
      reader.readAsDataURL(event.target.files[0])
    },
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
      this.find()
      this.count()
    },
    async count() {
      this.$store.dispatch('xxx/count')
    },
    async find() {
      this.loading = true
      await Promise.all([this.$store.dispatch('xxx/find'), this.$wait(1000)])
      this.loading = false
    },
    goDetail(e) {
      this.$router.push({ name: 'xxx', params: { id: e.id } })
    },
    changeLang() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'zh' : 'en'
      this.$storage.set('lang', this.$i18n.locale)
    },
  },
}
</script>
<i18n locale="en" lang="yml">
  Image: Image sfc
</i18n>
<i18n locale="zh" lang="yml">
  Image: 图片 sfc
</i18n>
