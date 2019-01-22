import storage from './storage'
import paramUtil from './paramUtil'
import exceptionUtil from './exceptionUtil'
import dataMap from './data'
export default class {
  static async run(url, options) {
    return this.runPredev(url, options) // 当后端没有数据，前端需要自行编辑数据的时候
    // return this.r(url, options)
  }
  static async r(url, options) {
    options.headers = new Headers(options.headers)
    if (options.body && options.body.constructor === Object) {
      options.body = paramUtil.createUrlEncode(options.body)
      if (!options.headers.get('Content-Type')) {
        options.headers.append('Content-Type', 'application/x-www-form-urlencoded')
      }
    }
    options.headers.append('Authorization', `Bearer ${storage.get('token')}`)
    let response = {}
    try {
      response = await fetch(url, options)
    } catch (err) {
      return exceptionUtil.createRest(null, err)
    }
    if (!response.ok) return exceptionUtil.createRest(response.status, response.statusText)
    return response.json()
  }

  static async runPredev(url, options) {
    return new Promise((resolve, reject) => {
      let matchList = []
      Object.keys(dataMap).map(k => {
        let method = k.substring(0, k.indexOf(' '))
        if (method !== options.method) return
        let keyUrl = k.substring(k.indexOf(' ') + 1, k.length)
        let regStr = keyUrl.replace(/(\/:\w+)/g, '/\\w+')
        let reg = new RegExp(`${regStr}$`, 'g')
        url = url.replace(/(\?.+)/, '')
        if (!reg.test(url)) return
        matchList.push(k)
      })
      matchList.sort((a, b) => a.split('/:').length - b.split('/:').length)
      resolve({ code: 'SUCCESS', data: dataMap[matchList[0]] })
    })
  }
}
