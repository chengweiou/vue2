import storage from '@/sdk/util/storage'
import site from '@/sdk/config/site'
export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$storage', { value: storage })
    Object.defineProperty(Vue.prototype, '$img', { value: site.xxx })
  },
}
