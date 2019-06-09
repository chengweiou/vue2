import fetchUtil from './util/fetchUtil'
import site from './config/site'
import paramUtil from './util/paramUtil'

export default class {
  static save(e) {
    let url = `${site.xxx}/xxx`
    let formData = new FormData()
    formData.append('name', e.name)
    formData.append('phy', e.phy)
    formData.append('bld', e.bld)
    formData.append('imgSrc', e.imgSrc)
    let options = {
      method: 'POST',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }
  static findById(e) {
    let url = `${site.xxx}/xxx/${e.id}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static count(filter) {
    let url = `${site.xxx}/xxx/count?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static find(filter) {
    let url = `${site.xxx}/xxx?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
}
