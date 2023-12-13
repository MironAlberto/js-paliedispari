// scegliere se pari o dispari -> usare prompt o form
// scegliere un numero da 1 a 5 -> usare prompt o form

// dopo aver scelto noi il numero e dichiarato pari o dispari 
// far scegliere al computer un numero da 1 a 5 (random) -> funzione 
// sommare il numero scelto da noi a quello scelto (generato dal computer)
// stabilire se la somma dei due numeri è pari o dispari -> usare una funzione 
// messaggio o alert con chi ha vinto (quindi chi ha scelto pari/dispari corretto)

const oddEven = prompt('scegli tra pari o dispari');
const userNumber = parseInt(prompt('scegli un numero tra 1 e 5'));
let pcRandomNumber = getRndInteger(1, 5);
let sum = userNumber + pcRandomNumber;
const userChoice = isEven(sum);


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(number) {

    if (number % 2 == 0) {
        return true;
    }

    else {
        return false;
    }
}

if (userChoice && oddEven == 'pari') {
    alert ('You won!');
}

else if (!userChoice && oddEven == 'dispari'){
   alert ('You won!');
}

else {
    alert ('You lost!'); 
}




