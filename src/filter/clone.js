export default function clone(v) {
  if (!(v instanceof Object)) return v instanceof String ? `${v}` : v

  let result = Object.prototype.toString.call(v) === '[object Array]' ? [] : {}
  for (let key in v) {
    result[key] = clone(v[key])
  }
  return result
}
