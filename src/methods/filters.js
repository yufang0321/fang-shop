// 千分號
export function currency (num) {
  const n = parseInt(num, 10)
  return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`
}
// 轉換日期格式
export function date (time) {
  const localDate = new Date(time * 1000)
  return localDate.toLocaleDateString()
}
// 無條件進位
export function round (num) {
  const roundNum = Math.round(num)
  return roundNum
}
