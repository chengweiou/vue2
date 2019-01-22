export default function date(e, option) {
  if (!e) {
    return ''
  }
  option = option || {}
  let from = option.from
  let to = option.to
  let date = from ? transformFrom(e, from) : e.length === 10 ? transformFrom(e, 'yyyy-MM-dd') : new Date(e)
  let time = formatAMPM(date)
  if (to) {
    return transformTo(date, to)
  }
  return `${date.getFullYear()}-${date.getMonth() < 9 ? 0 : ''}${date.getMonth() + 1}-${date.getDate() < 10 ? 0 : ''}${date.getDate()} ${time}`
}
function formatAMPM(date) {
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var seconds = date.getSeconds()
  return `${hours < 10 ? 0 : ''}${hours}:${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`
}
function transformFrom(e, format) {
  let y = format.includes('yyyy') ? e.substring(format.indexOf('yyyy'), format.indexOf('yyyy') + 4) : ''
  let yy = format.includes('yy') ? e.substring(format.indexOf('yy'), format.indexOf('yy') + 2) : ''
  let m = format.includes('MM') ? e.substring(format.indexOf('MM'), format.indexOf('MM') + 2) : ''
  let d = format.includes('dd') ? e.substring(format.indexOf('dd'), format.indexOf('dd') + 2) : ''
  let hh = format.includes('HH') ? e.substring(format.indexOf('HH'), format.indexOf('HH') + 2) : ''
  let mm = format.includes('mm') ? e.substring(format.indexOf('mm'), format.indexOf('mm') + 2) : ''
  let ss = format.includes('ss') ? e.substring(format.indexOf('ss'), format.indexOf('ss') + 2) : ''
  return new Date(y || yy, parseInt(m) - 1, d, hh, mm, ss)
}
function transformTo(e, format) {
  let y = format.includes('yyyy') ? e.getFullYear() : ''
  let yy = !y && format.includes('yy') ? `${e.getFullYear()}`.substring(2, 4) : ''
  let m = format.includes('MM') ? `${e.getMonth() < 9 ? 0 : ''}${e.getMonth() + 1}` : ''
  let mon = format.includes('MMM') ? `${monList[e.getMonth()]}` : ''
  let d = format.includes('dd') ? `${e.getDate() < 10 ? 0 : ''}${e.getDate()}` : ''
  let hh = format.includes('HH') ? `${e.getHours() < 10 ? 0 : ''}${e.getHours()}` : ''
  let mm = format.includes('mm') ? `${e.getMinutes() < 10 ? 0 : ''}${e.getMinutes()}` : ''
  let ss = format.includes('ss') ? `${e.getSeconds() < 10 ? 0 : ''}${e.getSeconds()}` : ''
  return format.replace(/yyyy/, y).replace(/yy/, yy).replace(/MMM/, mon).replace(/MM/, m).replace(/dd/, d).replace(/HH/, hh).replace(/mm/, mm).replace(/ss/, ss)
}

const monList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
