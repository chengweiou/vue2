import fetchUtil from './util/fetchUtil'
import site from './config/site'

export default class {
  static save(e) {
    if (!e.file) {
      console.warn('uploadService file: ' + e.file + ', not found')
      return
    }
    let url = `${site.xxx}/upload`
    let formData = new FormData()
    formData.append('file', e.file)
    let options = {
      method: 'POST',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }
}
