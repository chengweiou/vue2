<template>
  <div class="pointer" style="width: 100%; height: 100%;">
    <div v-if="src" style="position: relative;">
      <label style="width: 100%; height: 100%; display: block;">
        <centerImage :src="src"/>
        <input type="file" style="display: none;" @change="readPic()">
      </label>
      <i class="el-icon-delete" style="padding: 5px; background: #F56C6C; border-radius: 50%; position: absolute; top: 10px; left: 90px;" @click="readPic()"></i>
    </div>
    <label v-else class="center btn-white" style="width: 100%; height: 100%;">
      Select Image <input style="display: none;" type="file" @change="readPic()" >
    </label>
  </div>
</template>

<script>
import centerImage from '@/component/image/centerImage'
export default {
  props: {
    src: { type: String },
    readPic: { type: Function },
  },
  components: {
    centerImage,
  },
}
</script>
<style scoped>
</style>
