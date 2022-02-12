const yesBtn = document.querySelector(".btn")
const noBtn = document.querySelector(".btn1")
const displayReply = document.querySelector(".text")
const displayBtn = document.querySelector('.buttons')

yesBtn.addEventListener("click", showOutput)
noBtn.addEventListener("click", showNoOutput)


function showOutput() {
  let p = document.createElement('p')
  p.classList.add('h1')
  p.textContent = 'Thanks Boss for giving me the job'
  displayReply.innerHTML = ''
  displayReply.appendChild(p)

  displayBtn.innerHTML = ''
  let link = document.createElement('a')
  link.classList.add('btn')
  link.href = "https://www.google.com"
  link.textContent = "Tell me"
  displayBtn.appendChild(link)
}

function showNoOutput() {
  let p = document.createElement('p')
  p.classList.add('h1')
  p.textContent = 'Boss, Please na'
  displayReply.innerHTML = ''
  displayReply.appendChild(p)

  displayBtn.innerHTML = ''
  let link = document.createElement('button')
  link.classList.add('btn')
  link.addEventListener('click', reloadPage)
  link.textContent = "Go back and Click"
  displayBtn.appendChild(link)
}

function reloadPage() {
  window.location.reload()
}