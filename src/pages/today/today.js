function compareTime() {
  var hour = time.getHours()
  var minute = time.getMinutes()
  document.getElementById('count1').textContent = (hour).toString() + ":" +(minute).toString()
}

setInterval(compareTime, 1000)