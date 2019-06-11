<template>
  <main>
    <div v-for="(currList, si) in step" :key="`s${si}`" class="df">
      <label v-for="(e, i) in currList" :key="i" class="df df-column" style="flex: 1; border: 1px solid #ccc; overflow: hidden;" :class="{'bg-grey':e.active, 'c-white': e.active}" @click="call(e, si)">
        <div class="center" style="height: 50px;">{{e.name}}</div>
        <div class="center">
          <input class="info-rdo" type="radio" name="infoRdo">
          <div class="df df-column">
            <div class="center" style="flex: 1;">{{e.info.url}}</div>
            <div class="center" style="flex: 1;">{{e.info.param}}</div>
          </div>
        </div>
      </label>
    </div>
    <button class="bg-white" style="width: 50px; height: 50px; border-radius: 50%; position: fixed; top: 20px; right: 20px;" @click="reset">reset</button>
  </main>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    step() { return this.$store.state.flow.step },
    map() { return this.$store.state.flow.map },
  },
  created() {
    this.setFirst()
  },
  methods: {
    reset() {
      this.$store.dispatch('flow/reset')
    },
    setFirst() {
      this.$store.dispatch('flow/setFirst', 'register')
    },

    call(e, prevNum) {
      this.step[prevNum].forEach(step => {
        step.active = false
      })
      e.active = true
      this.$store.dispatch('flow/next', { curr: e, prevNum: prevNum })
    },
  },
}
</script>
<style scoped>
.info-rdo { display: none; }
.info-rdo ~ div { flex: 1; height: 100px; max-height: 0;}
.info-rdo:checked ~ div { max-height: 500px; }
</style>
