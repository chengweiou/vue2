import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './zh'
import en from './en'
import storage from '@/sdk/util/storage'

Vue.use(VueI18n)

let lang = storage.get('lang')
if (!lang) {
  lang = 'en'
  storage.set('lang', 'en')
}
export default new VueI18n({
  locale: lang,
  messages: { en, zh },
})
