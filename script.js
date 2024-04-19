let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");
const details = document.querySelector("#details");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        message.innerText = "It's draw, Play again.";
        message.style.backgroundColor = "rgb(2, 2, 25)";
        details.innerText = `Your choice was ${userChoice} & Computer's choice was ${compChoice}.`;
    } else if (userChoice === "rock" && compChoice === "scissors" || userChoice === "paper" && compChoice === "rock" || userChoice === "scissors" && compChoice === "paper") {
        message.innerText = "Congratulations! You won.";
        message.style.backgroundColor = "green";
        details.innerText = `Your choice was ${userChoice} & Computer's choice was ${compChoice}.`;
        document.querySelector("#player").innerText = ++userScore;
    } else {
        message.innerText = "Sorry, You lost.";
        message.style.backgroundColor = "red";
        details.innerText = `Your choice was ${userChoice} & Computer's choice was ${compChoice}.`;
        document.querySelector("#computer").innerText = ++compScore;
    }
};
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});