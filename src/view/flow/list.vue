<template>
  <main class="center df-column" style="margin-top: 50px;">
    <div v-for="(currList, si) in step" :key="`s${si}`" class="df">
      <label v-for="(e, i) in currList" :key="i">
        <article class="df df-column card" style="width: 200px; border-radius: 10px; overflow: hidden;" :class="{'active': e.active}" @click="call(e, si)">
          <div class="center f-t2" style="height: 50px;">{{e.name}}</div>
          <div class="center">
            <input class="info-rdo" type="radio" name="infoRdo">
            <div class="df df-column" style="width: 100%;">
              <div class="center c-light-blue" style="">{{e.info.url}}</div>
              <div class="center c-light-blue" style="">{{e.info.param}}</div>
              <div v-if="e.info.result" class="center df-column c-purple" style="width: 100%; border-top: 1px solid #ccf;">
                {{e.info.result}}
              </div>
            </div>
          </div>
        </article>
      </label>
    </div>
    <button class="bg-white btn-reset" style="width: 50px; height: 50px; border-radius: 50%; position: fixed; top: 20px; right: 20px;" @click="reset">reset</button>
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
.info-rdo ~ div { max-height: 0; }
.info-rdo:checked ~ div { max-height: 500px; }
.info-rdo:hover ~ div { max-height: 500px; transition: max-height .5s ease-in-out; }

.card { background: #666; border: 1px solid #888; color: #888; }
.card.active { background: #444; border: 1px solid #fff; color: #ddd; }

.btn-reset:hover { transform: scale(1.2); transition: all .5s ease-in-out; }
</style>
