import fetchUtil from './util/fetchUtil'
import site from './config/site'
import paramUtil from './util/paramUtil'

export default class {
  static save(e) {
    let url = `${site.xxx}/weapon`
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
  static loadById(e) {
    let url = `${site.xxx}/weapon/${e.id}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static count(filter) {
    let url = `${site.xxx}/weapon/count?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static load(filter) {
    let url = `${site.xxx}/weapon?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
}
