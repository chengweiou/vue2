<template>
  <div class="f-c" style="height: 100%;">
    <div class="df df-column" style="height: 100%;">
      <proj-header style="position: fixed;" />
      <div style="margin-top: 60px; flex: 1 0 auto;">
        <router-view/>
      </div>
      <proj-footer style="flex: 0 0 auto;"/>
    </div>
  </div>
</template>
<script>
import projHeader from '@/component/nav/projHeader'
import projFooter from '@/component/nav/projFooter'
export default {
  name: 'App',
  components: {
    projHeader, projFooter,
  },
}
</script>
