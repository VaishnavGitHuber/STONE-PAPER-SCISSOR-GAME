// select the choices 
let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const userScoreNode = document.querySelector(".user-score");
const compScoreNode = document.querySelector(".comp-score");
const resultNode = document.querySelector('.result-text');

// genrate computer choices 
function generateComputerChoice(){
    let options = ['rock', 'paper','scissor'];
    let randomIndex = Math.floor((Math.random() * 3));
    return options[randomIndex];
}
// main function
choices.forEach( (choice) => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute("id");
        let computerChoice = generateComputerChoice();

        console.log(userChoice, computerChoice);
        // user win : determining using the if conditions 
        if (userChoice === computerChoice) {
            resultNode.innerText = "It's a Draw! play again";
            resultNode.style.backgroundColor = '#1E1E1E';
        }
        
        else if(userChoice === "rock"){
            if(computerChoice === "scissor"){
                userScore++;
                resultNode.innerText = "You win! Rock beats scissor";
                resultNode.style.backgroundColor = 'green';
                userScoreNode.innerText = userScore;
            }else{
                compScore++;
                resultNode.innerText = "Computer wins! paper beats Rock";
                resultNode.style.backgroundColor = 'red';
                compScoreNode.innerText = compScore;
            }
        }
        
        else if(userChoice === "paper"){
            // computer choice: if rock - win, scissor - loss
            if(computerChoice === "rock"){
                userScore++;
                resultNode.innerText = "You win! Paper beats rock";
                resultNode.style.backgroundColor = 'green';
                userScoreNode.innerText = userScore;
            }else{
                compScore++;
                resultNode.innerText = "Computer wins! scissor beats paper";
                resultNode.style.backgroundColor = 'red';
                compScoreNode.innerText = compScore;
            }
            
        }

        else if(userChoice == 'scissor'){
            // computer choice: if stone - loss, if rock - loss 
            if(computerChoice === 'rock'){
                compScore++;
                resultNode.innerText = "Computer wins! Rock beats scissor";
                resultNode.style.backgroundColor = 'red';
                compScoreNode.innerText = compScore;
            }else {
                userScore++;
                resultNode.innerText = "You Win! Scissor beat Paper";
                resultNode.style.backgroundColor = 'green';
                userScoreNode.innerText = userScore;
            }
        }
    })
})