const yesBtn = document.querySelector(".btn")
const noBtn = document.querySelector(".btn1")

yesBtn.addEventListener("click", showOutput)
noBtn .addEventListener("click", showNoOutput)

function showOutput() {
    return alert ("Thanks for giving me the Job")
}

function showNoOutput() {
    return alert ("Please sir, why are you not giving me the Job, kindly reconsider")
}