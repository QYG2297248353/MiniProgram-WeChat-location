const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}


const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const getRand = () => Math.floor(Math.random() * 256);
const getColor = () => {
  let rnum = getRand();
  let gnum = getRand();
  let bnum = getRand();
  return "#" + rnum.toString(16) + gnum.toString(16) + bnum.toString(16);
}

module.exports = {
  formatTime,
  getColor
}