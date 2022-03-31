


function countdown() {
  const timeToTravel = new Date('December 5, 2022')
  const timeCurrent = new Date()
  const timeMissing = new Date(timeToTravel.getTime() - timeCurrent.getTime())
  const  totalSeconds = timeMissing.getTime() / 1000
  const time = {  
    seconds: Math.floor(totalSeconds) % 60,
    minutes: Math.floor(totalSeconds / 60) % 60,
    hours: Math.floor(totalSeconds / 3600) % 24,
    days: Math.floor(totalSeconds / 3600 / 24)
  }

  days.textContent = formatTime(time.days)
  hours.textContent = formatTime(time.hours)
  minutes.textContent = formatTime(time.minutes)
  seconds.textContent = formatTime(time.seconds)
}


const formatTime = time => time < 10 ? `0${time}` : time
countdown()
setInterval(countdown, 1000)