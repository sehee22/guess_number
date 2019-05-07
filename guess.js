var btn = document.querySelector('button');
var rst_btn = document.querySelector('#reset');

btn.addEventListener('click', decideIfwon);
rst_btn.addEventListener('click', reset);

var lowOrHiMessage = document.querySelector('#lowOrHi');
var guessMessage = document.querySelector('#guesses');
var guess = document.querySelector('#guessField');

function makerandomprice () {
    price = Math.floor(Math.random() * 100) + 1;
    console.log(price);
}

function decideIfwon() {    
    if (guess.value > price) {
        console.log('too high');
        lowOrHiMessage.textContent  = 'too high';
        guessMessage.textContent = guessMessage.textContent + ' ' + guess.value;
    }
    else if (guess.value < price){
        console.log('too low');
        lowOrHiMessage.textContent  = 'too low';
        guessMessage.textContent = guessMessage.textContent + ' ' + guess.value;
    }
    else {
        console.log ('winner')
        lowOrHiMessage.textContent  = 'winner!';
        guessMessage.textContent = guessMessage.textContent + ' ' + guess.value;
    }
}

function reset() {
    makerandomprice ();
    guess.value = '';
    lowOrHiMessage.textContent = 'The price value has changed';
    guessMessage.textContent = '';
}

makerandomprice();