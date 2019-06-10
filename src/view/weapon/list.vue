<template>
  <main>
    <div style="margin: 0 10px;">
      <section class="df df-jcsb" style="">
        <section class="df df-aic" style="margin-bottom: 10px;">
          <div style="margin-right: 20px;">key</div>
          <div class="" style="width: 200px; height:20px; border: 1px solid #ddd;"><input style="margin: 0 10px; width: 90%; background: transparent; border: 0; color: #ddd;" v-model="filter.name" @keyup="changeFilter"></div>
        </section>
        <section class="df df-aic" style="margin-bottom: 10px;"><button class="btn-white" style="width: 80px; height: 20px;" @click="reset">reset</button></section>
      </section>

      <div v-if="loading" class="center"><loading style="width: 30px; height: 30px;"/></div>
      <div v-else style="display: flex; flex-wrap: wrap;">
        <article v-for="(e, i) in list" :key="i" @click="goDetail(e)">
          <section class="btn-white" style="margin-bottom: 10px; margin-right: 10px; width: 200px; height: 100px; border-radius: 3px;">
            <div class="df df-jcsb" style="padding: 10px;">
              <section>
                <div>{{e.name}}</div>
                <div>{{e.phy | number}}</div>
                <div>{{e.bld | number}}</div>
                <div>{{e.createAt | date({to: 'MMM dd, yyyy'})}}</div>
              </section>
              <section class="center">
                <div style="width: 80px; "><center-image :src="e.img"></center-image></div>
              </section>
            </div>
          </section>
        </article>
        <article @click="onSave()">
          <section class="center btn-white" style="margin-bottom: 10px; margin-right: 10px; width: 200px; height: 100px; border-radius: 3px; font-size: 30px;">+</section>
        </article>
      </div>
      <section class="df center">total: {{total}}</section>
    </div>
    <modal>
      <div slot="v" class="bg-black center" style="width: 300px;">
        <div style="width: 80%; height: 80%;">
          <div class="center f-t1" style="margin: 20px 0;">Create Weapon</div>
          <div style="margin-bottom: 20px;">
            <section class="df df-aic" style="margin-bottom: 10px;">
              <div style="margin-right: 10px; width: 50px;">name:</div>
              <div class="" style="width: 150px; height: 20px; border: 1px solid #ddd;"><div style="margin: 0 10px;"><input style="width: 100%; background: transparent; border: 0; color: #ddd;" v-model="form.name"></div></div>
            </section>
            <div class="df">
              <section class="df df-aic" style="margin-bottom: 10px; width: 100px;">
                <div style="margin-right: 10px; ">phy:</div>
                <div class="" style="width: 50px; height: 20px; border: 1px solid #ddd;"><div style="margin: 0 10px;"><input style="width: 100%; background: transparent; border: 0; color: #ddd;" v-model="form.phy"></div></div>
              </section>
              <section class="df df-aic" style="margin-bottom: 10px; width: 100px;">
                <div style="margin-right: 10px; ">bld:</div>
                <div class="" style="width: 50px; height: 20px; border: 1px solid #ddd;"><div style="margin: 0 10px;"><input style="width: 100%; background: transparent; border: 0; color: #ddd;" v-model="form.bld"></div></div>
              </section>
            </div>
            <div class="df df-aic" style="margin-bottom: 10px;">
              <section style="width: 100px; height: 100px; cursor: pointer;">
                <label v-if="form.img" style="width: 100%; height: 100%; display: block;">
                  <centerImage :src="form.img"/>
                  <input type="file" style="display: none;" @change="readPic()">
                </label>
                <label v-else class="center btn-white" style="width: 100%; height: 100%;">
                  Image <input style="display: none;" type="file" @change="readPic()" >
                </label>
              </section>
            </div>
          </div>
          <section class="center" style="margin-bottom: 10px;">
            <div v-if="loading" class="center" style="width: 100%;"><loading style="width: 30px; height: 30px;"/></div>
            <div v-else class="df df-jcsb" style="width: 100%;">
              <button class="btn-white" style="width: 100px; height: 30px;" @click="save">Save</button>
              <button class="btn-white" style="width: 100px; height: 30px;" @click="offSave">Cancel</button>
            </div>
          </section>
        </div>
      </div>
    </modal>
  </main>
</template>

<script>
import loading from '@/component/loading'
import centerImage from '@/component/image/centerImage'
import modal from '@/component/modal'
export default {
  data() {
    return {
      loading: false,
      saveLoading: false,
      form: { img: '' },
    }
  },
  computed: {
    total() { return this.$store.state.weapon.total },
    filter() { return this.$store.state.weapon.filter },
    list() { return this.$store.state.weapon.list },
  },
  components: {
    loading, centerImage, modal,
  },
  created() {
    this.count()
    this.find()
  },
  methods: {
    onSave() {
      this.$store.dispatch('modal/on')
      this.form = this.$store.state.weaponDb.save
    },
    offSave() {
      this.$store.dispatch('modal/off')
    },
    readPic() {
      let reader = new FileReader()
      reader.onload = () => {
        this.form.img = reader.result
        this.$store.dispatch('weaponDb/save', this.form)
      }
      reader.readAsDataURL(event.target.files[0])
    },
    async save() {
      if (!this.form.name || !this.form.img) {
        return
      }
      this.saveLoading = true
      await Promise.all([this.$store.dispatch('weapon/save', this.form), this.$wait(1000)])
      this.saveLoading = false
    },
    reset() {
      this.$store.dispatch('weapon/reset')
      this.count()
      this.find()
    },
    changeFilter() {
      this.$store.dispatch('weapon/changeFilter')
      this.find()
      this.count()
    },
    async count() {
      this.$store.dispatch('weapon/count')
    },
    async find() {
      this.loading = true
      await Promise.all([this.$store.dispatch('weapon/find'), this.$wait(1000)])
      this.loading = false
    },
    goDetail(e) {
      this.$router.push({ name: 'weapon', params: { id: e.id } })
    },
  },
}
</script>
<style scoped>
</style>
