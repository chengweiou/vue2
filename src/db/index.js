export default class Db {
  static set(k, v) {
    let request = this.store(name, true).put({ k, v })
    request.onsuccess = (event) => {
    }
  }
  static async get(k) {
    return new Promise((resolve, reject) => {
      let request = this.store(name, true).get(k)
      request.onsuccess = (event) => {
        resolve(request.result ? request.result['v'] : null)
      }
    })
  }
  static async remove(k) {
    let request = this.store(name, true).delete(k)
    request.onsuccess = (event) => {
    }
  }
  static clear() {
    this._db.store(name).clear()
  }
  static store(store, write) {
    return this._db.transaction(store, write ? 'readwrite' : 'readonly').objectStore(store)
  }

  static async open() {
    if (this._db) {
      return this._db
    }

    return new Promise((resolve, reject) => {
      let DBOpenRequest = indexedDB.open(name, 1)
      DBOpenRequest.onsuccess = () => {
        this._db = DBOpenRequest.result
        resolve()
      }
      DBOpenRequest.onupgradeneeded = (event) => {
        let db = event.target.result
        let objectStore = db.createObjectStore(name, { keyPath: 'k' })
        objectStore.createIndex('v', 'v')
      }
    })
  }
  static get db() {
    return this._db
  }
  static set db(value) {
    this._db = value
  }
}
let name = 'projectname'
Db.open()
