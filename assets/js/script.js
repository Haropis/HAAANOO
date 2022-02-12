const yesBtn = document.querySelector(".btn")
const noBtn = document.querySelector(".btn1")

yesBtn.addEventListener("click", showOutput)
noBtn.addEventListener("click", showNoOutput)

function showOutput() {
  const displayReply = document.querySelector(".main")
  
  let p = document.createElement('p')
  p.textContent = 'Thanks Boss'
  displayReply.innerHTML =''
  displayReply.appendChild(p)
  
    return alert ("Thanks for giving me the Job, shey ki n deop akant details")
}

function showNoOutput() {
    return alert ("Please sir, why are you not giving me the Job, kindly reconsider")
}