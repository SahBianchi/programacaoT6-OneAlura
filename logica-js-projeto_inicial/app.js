alert('Boas-vindas ao jogo do Número Secreto');
let maxNumber = 5000;
let secretNumber = parseInt(Math.random() * maxNumber + 1);
let guess; 
let attempts = 1;

while(guess != secretNumber){
    guess = prompt(`Escolha um número entre 1 a ${maxNumber}`);
    if(guess == secretNumber){
        break
    }else {
        if(guess > secretNumber){
            guess = alert (`Tente um número menor que ${guess}`);
        }else{
            guess = alert (`Tente um número maior que ${guess}`);
        }
    }
    attempts++
}

let qtdAttempts = attempts > 1 ? 'tentativas' : 'tentativa';
alert(`Uhuuuu, você acertou! O número secreto é ${secretNumber}, você usou ${attempts} ${qtdAttempts}!`);
