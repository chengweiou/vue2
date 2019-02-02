<template>
  <div style="height: 100%;">
    <div class="df df-column" style="height: 100%;">
      <bb-header style="position: fixed;" />
      <div style="margin-top: 60px; flex: 1 0 auto;">
        <router-view/>
      </div>
      <bb-footer style="flex: 0 0 auto;"/>
    </div>
    <login/>
    <failBox/>
  </div>
</template>
<script>
import bbHeader from '@/component/nav/bbHeader'
import bbFooter from '@/component/nav/bbFooter'
import login from '@/component/login'
import failBox from '@/component/failBox'
export default {
  name: 'App',
  components: {
    bbHeader, bbFooter, login, failBox,
  },
}
</script>
