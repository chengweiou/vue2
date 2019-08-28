<template>
  <main>
    <div style="width: 50px; height: 50px;"><centerImage :src="'https://vuejs.org/images/logo.png'"/></div>
    <div>
      <button @click="goList">goList</button>
    </div>
    <div>
      <section>{{detail.id}}</section>
      <section>
        <div v-if="!showUpdate">{{detail.name}}</div>
        <div v-else><input v-model="form.name"></div>
      </section>
      <section>
        <div v-if="!showUpdate">{{detail.phone | phone}}</div>
        <div v-else><input v-model="form.phone"></div>
      </section>
      <section>
        <div v-if="!showUpdate">{{detail.vote | number}}</div>
        <div v-else><input v-model="form.vote"></div>
      </section>
      <section>{{detail.date | date}}</section>
      <div class="center" style="width: 200px; height: 50px;">
        <div v-if="updateLoading" class="center"><loading style="width: 30px; height: 30px;"/></div>
        <div v-else class="center" style="flex: 1;">
          <article v-if="!showUpdate" class="df df-jcsb">
            <section class="center btn-white" style="width: 50px; height: 30px; border-radius: 3px;" @click="onUpdate()">update</section>
          </article>
          <article v-else class="df df-jcsb" style="flex: 1;">
            <section class="center btn-white" style="width: 50px; height: 30px; border-radius: 3px;" @click="offUpdate()">cancel</section>
            <section class="center btn-white" style="width: 50px; height: 30px; border-radius: 3px;" @click="update()">update</section>
          </article>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import loading from '@/component/loading'
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
    centerImage, loading,
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
      this.form = this.detail
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
    },
  },
}
</script>
