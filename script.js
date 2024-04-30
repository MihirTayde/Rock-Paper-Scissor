let userScore = 0;
let compScore = 0;

let rock = document.querySelector("#rock_img");

rock.addEventListener("click", function() {
console.log("rock");

const CompChoice = ComputerChoice();
console.log(CompChoice);

let Output_by_computer = document.querySelector("#Comp_Choice")
Output_by_computer.innerHTML = CompChoice;

if(CompChoice === "Paper"){
    compScore++;
}
if(CompChoice === "Scissor"){
    userScore++;
}
let a = document.querySelector("#user_score");
a.innerHTML = userScore;

let b = document.querySelector("#computer_score");
b.innerHTML = compScore;
})


let paper = document.querySelector("#paper_img");

paper.addEventListener("click", function() {
console.log("paper");

const CompChoice = ComputerChoice();
console.log(CompChoice);

let Output_by_computer = document.querySelector("#Comp_Choice")
Output_by_computer.innerHTML = CompChoice;

if(CompChoice === "Scissor"){
    compScore++;
}
if(CompChoice === "Rock"){
    userScore++;
}
let a = document.querySelector("#user_score");
a.innerHTML = userScore;

let b = document.querySelector("#computer_score");
b.innerHTML = compScore;
})

let scissor = document.querySelector("#scissor_img");

scissor.addEventListener("click", function() {
console.log("scissor");

const CompChoice = ComputerChoice();
console.log(CompChoice);

let Output_by_computer = document.querySelector("#Comp_Choice")
Output_by_computer.innerHTML = CompChoice;

if(CompChoice === "Rock"){
    compScore++;
}
if(CompChoice === "Paper"){
    userScore++;
}
let a = document.querySelector("#user_score");
a.innerHTML = userScore;

let b = document.querySelector("#computer_score");
b.innerHTML = compScore;
})

const ComputerChoice = () => {
    let options = ["Rock", "Paper", "Scissor"];
    let randIdx = Math.floor(Math.random()* 3);
    return options[randIdx];
}

let reset = document.querySelector("#reset")
reset.addEventListener("click", function() {
    location.reload();
})


