//Question 1 - Traffic Light Simulation
let change = document.querySelectorAll(".circle")
let cir1=document.getElementById('cir1')
let cir2=document.getElementById('cir2')
let cir3=document.getElementById('cir3')
let btn=document.getElementById("btn")
let x=0
btn.addEventListener("click", ()=>{
    x+=1
    changeColor(x)
})







function changeColor(x){
        if (x==1 || x==4) {
            cir1.classList.add('col1')
            cir2.classList.remove('col2')
            cir3.classList.remove('col3')
        }
        else if(x==2){
            cir1.classList.remove('col1')
            cir2.classList.add("col2")
            cir3.classList.remove('col3')

        }
        else if(x==3){
            cir1.classList.remove('col1')
            cir2.classList.remove("col2")
            cir3.classList.add("col3")
        }
        else if(x>4){
            x=0
        }
    }
//Problem 2 - Number guessing game
const randomNumber = Math.floor(Math.random() * 100) + 1;


let attempts = 0;
const maxAttempts = 10;
let history = [];


const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const feedback = document.getElementById('feedback');
const guessHistory = document.getElementById('guessHistory');
const gameOver = document.getElementById('gameOver');


guessButton.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Please enter a number between 1 and 100!';
        return;
    }

    attempts++;
    history.push(userGuess);

    if (userGuess === randomNumber) {
        feedback.textContent = 'Correct! You guessed the number!';
        guessButton.disabled = true; // Disable button after a win
    } else if (userGuess < randomNumber) {
        feedback.textContent = 'Too Low!';
    } else {
        feedback.textContent = 'Too High!';
    }

  
    guessHistory.textContent = `Your guesses: ${history.join(', ')}`;

 
    if (attempts >= maxAttempts && userGuess !== randomNumber) {
        gameOver.textContent = 'Game Over! You have used all your attempts.';
        feedback.textContent = `The correct number was ${randomNumber}.`;
        guessButton.disabled = true; 
    }

   
    guessInput.value = '';
    guessInput.focus();
});