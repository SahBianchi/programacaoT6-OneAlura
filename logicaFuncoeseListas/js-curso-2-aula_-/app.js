let listDrawnNumbers = [];
let maxNumber = 10;
let secretNumber = generateSecretNumber();
let attempts = 1;

function displayOnScreen(tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2});
}

function displayInitialMessage(){
    displayOnScreen('h1', 'Jogo do número secreto');
    displayOnScreen('p', `Escolha um número entre 1 e ${maxNumber}`);
}

displayInitialMessage();

function checkGuess(){
    let guess = document.querySelector('input').value;

    if (guess == secretNumber) {
        displayOnScreen('h1', 'Acertou!');
        let wordAttempts = attempts > 1 ? 'tentativas' : 'tentativa';
        let messageAttempts = `Você descobriu o número secreto com ${attempts} ${wordAttempts}!`
        displayOnScreen('p', messageAttempts);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (guess < secretNumber) {
            displayOnScreen('p', 'O número secreto é maior');
        } else {
            displayOnScreen('p', 'O número secreto é menor');
        }
        attempts++;
        clearField();
    }    
}

function generateSecretNumber() {
    let chosenNumber = parseInt(Math.random() * maxNumber + 1);
    let qtdElementsList = listDrawnNumbers.length;
    
    if (qtdElementsList === maxNumber) {
        listDrawnNumbers = [];
    }

    if (listDrawnNumbers.includes(chosenNumber)) {
        return generateSecretNumber()
    } else {
        listDrawnNumbers.push(chosenNumber)
        return chosenNumber;
    }
}

function clearField(){
    guess = document.querySelector('input');
    guess.value = '';
}

function newGame(){
    secretNumber = generateSecretNumber();
    clearField();
    attempts = 1;
    displayInitialMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

