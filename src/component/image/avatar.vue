<template>
  <div :width="width" :height="height" style="border-radius: 50%; overflow: hidden;">
    <centerImage :src="src"/>
  </div>
</template>

<script>
import centerImage from '@/component/image/centerImage'
export default {
  props: {
    width: { default: '100%' },
    height: { default: '100%' },
    src: { type: String },
  },
  components: {
    centerImage,
  },
}
</script>
<style scoped>
</style>
