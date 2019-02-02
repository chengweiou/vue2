import db from '@/db'
import wait from '@/fn/util/wait'
export default store => {
  Object.keys(store.state).filter(k => store.state[k].db).forEach(async k => {
    await wait(10)
    await db.open()
    let data = await db.get(`${store.state['me'].user.id}.${k}`)
    if (!data) return
    store.state[k] = data
  })

  store.subscribe((mutation, state) => {
    let module = mutation.type.substring(0, mutation.type.indexOf('/'))
    if (!state[module].db) return
    if (mutation.payload === 'REMOVE') {
      db.remove(`${state['me'].user.id}.${state[module]}`)
      return
    }
    db.set(store.state['me'].user.id + '.' + module, state[module])
  })
}
