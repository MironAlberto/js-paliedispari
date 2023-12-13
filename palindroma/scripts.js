const parola = prompt('Inserisci una parola');
let parolaInversa = invertiParola(parola);

function invertiParola(element){

  let parolaInversa = '';

  let i = element.length - 1;

  while (i >= 0) {
    parolaInversa += element[i];
    i--;
  }

  return parolaInversa;
}

if(parola == parolaInversa){

  parolaInversa  = document.querySelector('h2');
  parolaInversa.innerHTML = parola + ' è una parola palindroma';

} 

else {

  parolaInversa  = document.querySelector('h2');
  parolaInversa.innerHTML = parola + ' non è una parola palindroma';

}

