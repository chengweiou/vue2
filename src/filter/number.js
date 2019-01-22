export default function number(v) {
  if (isNaN(v)) return v
  return Number(v).toLocaleString()
}
