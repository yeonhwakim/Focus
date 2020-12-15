let time = 25 * 60 


document.querySelector('#start').addEventListener('click', () => {
  timer()
})

const timer =  () => {
  setTimeout(()=> {
    time = time - 1
    const minute = parseInt((time) / 60);
    const second = parseInt((time) % 60);

    document.querySelector('.timerBox').innerHTML = `${formatter(minute)} : ${formatter(second)}`

    if(!minute && !second) {
      return clearTimeout(timer)
    }

    timer()
  }, 1000)
}

function formatter(num) {
  return num < 10 ? '0' + num : num
}

