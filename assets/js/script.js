const yesBtn = document.querySelector(".btn")
const noBtn = document.querySelector(".btn1")
const displayReply = document.querySelector(".text")
const displayBtn = document.querySelector('.buttons')

yesBtn.addEventListener("click", showOutput)
noBtn.addEventListener("click", showNoOutput)


function showOutput() {
  let p = document.createElement('p')
  p.classList.add('h11')
  p.textContent = 'Thanks for accepting'
  displayReply.innerHTML = ''
  displayReply.appendChild(p)

  displayBtn.innerHTML = ''
  let link = document.createElement('a')
  link.classList.add('btn2')
  // link.classList.add('buttons')
  link.href = "https://wa.link/aj76er"
  link.textContent = "Tell me"
  displayBtn.appendChild(link)
}

function showNoOutput() {
  let p = document.createElement('p')
  p.classList.add('h21')
  p.textContent = 'If I hit your head, go back and click YES joor'
  displayReply.innerHTML = ''
  displayReply.appendChild(p)

  displayBtn.innerHTML = ''
  let link = document.createElement('button')
  link.classList.add('btn3')
  link.addEventListener('click', reloadPage)
  link.textContent = "Go back and Click"
  displayBtn.appendChild(link)
}

function reloadPage() {
  window.location.reload()
}
