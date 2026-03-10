const choices = ["rock","paper","scissors"]

const userChoiceText = document.querySelector("#user-choice")
const computerChoiceText = document.querySelector("#computer-choice")
const resultPara = document.querySelector("#result")

function playGame(userChoice){

let random = Math.floor(Math.random()*3)

let computerChoice = choices[random]

userChoiceText.innerText = userChoice
computerChoiceText.innerText = computerChoice

if(userChoice === computerChoice){

resultPara.innerText = "Draw"

}

else if(
userChoice === "rock" && computerChoice === "scissors" ||
userChoice === "scissors" && computerChoice === "paper" ||
userChoice === "paper" && computerChoice === "rock"
){

resultPara.innerText = "You Win 🎉"

}

else{

resultPara.innerText = "You Lose 😢"

}

}

