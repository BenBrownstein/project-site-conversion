function rps() {
    return (
        <>
            <h1>Rock, Paper, Scissors Game</h1>
            <p>Choose: Rock, Paper, or Scissors</p>
            <button id="rock"> <img src="/Rock.jpg" alt="Rock" height="50px" width="50px" /></button>
            <button id="paper"><img src="/Paper.jpg" alt="Paper" height="50px" width="50px" /></button>
            <button id="scissors"><img src="/Scissors.jfif" alt="Scissors" height="50px" width="50px" /></button>
            <button id="cheat">Cheat</button>
            <p class="message"></p>
        </>
    );
}


const options = ["rock", "paper", "scissors", "cheat"];

const buttons = document.querySelectorAll("button");
const message = document.querySelector(".message");

buttons.forEach(button => {button.addEventListener("click", playGame);});

function playGame(e) {
    const playerChoice = e.target.id;
    const computerChoice = options[Math.floor(Math.random() * 4)];

    const result = determineWinner(playerChoice, computerChoice);

    message.textContent = `You chose ${playerChoice}. The computer chose ${computerChoice}. ${result}`;
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock") || (player === "cheat")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

export default rps;
