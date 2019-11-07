<template>
  <div class="center df-column" style="">
    <div v-for="(currList, si) in step" :key="`s${si}`" class="df">
      <label v-for="(e, i) in currList" :key="i">
        <article class="center card" style="" :class="{'active': e.active}">
          <div class="df df-column" style="margin: 2px; width: 100%;">
            <section class="center" style="width: 100%;"><div style="width: 90%; height: 20px; font-size: 12px;">{{e.name}}</div></section>
            <section class="center f-t2 " style="width: 100%;" :class="{'active': e.active}" :title="e.desc" >
              <div class="desc" style="" :class="{'active': e.active}">{{e.desc}}</div>
            </section>
            <section class="center">
              <input class="dev-rdo" type="radio" name="devRdo" @click="call(e, si)">
              <div class="df df-column" style="width: 100%;">
                <div class="center c-light-blue" style="">{{e.dev.url}}</div>
                <div class="center c-light-blue" style="">{{e.dev.param}}</div>
                <div v-if="e.dev.result" class="center df-column c-purple" style="width: 100%; border-top: 1px solid #ccf;">
                  {{e.dev.result}}
                </div>
              </div>
            </section>
          </div>
        </article>
      </label>
    </div>
    <button class="bg-white btn-reset" style="width: 50px; height: 50px; border-radius: 50%; position: fixed; top: 20px; right: 20px;" @click="reset">reset</button>
  </div>
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
    first() { return this.$store.state.flow.first },
  },
  created() {
    this.checkState()
  },
  methods: {
    checkState() {
      if (!Object.keys(this.map).length || !this.first) {
        console.warn('need to set up: flow map && first node to flow store')
        return
      }
      if (!this.map[this.first]) {
        console.warn('need to confirm: can not find first node in flow map')
      }
    },
    reset() {
      this.$store.dispatch('flow/reset')
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
.dev-rdo { display: none; }
.dev-rdo ~ div { max-height: 0; }
.dev-rdo:checked ~ div { max-height: 500px; }
.dev-rdo:hover ~ div { max-height: 500px; transition: max-height .5s ease-in-out; }

.card { width: 200px; border-radius: 10px; overflow: hidden; background: #666; border: 1px solid #888; color: #888; }
.card.active { background: #444; border: 1px solid #fff; color: #ddd; }

.desc { margin-bottom: 20px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.desc.active { white-space: normal; }
.btn-reset:hover { transform: scale(1.2); transition: all .5s ease-in-out; }
</style>
