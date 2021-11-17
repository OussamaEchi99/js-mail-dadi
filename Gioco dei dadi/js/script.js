// Generare un numero random da 1 a 6,
// sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Creare Variablili
const userRandomNumber = Math.floor(Math.random() * 6) + 1;
const computerRandomNumber = Math.floor(Math.random() * 6) + 1;
console.log(userRandomNumber);
console.log(computerRandomNumber);

// Logica
if ( userRandomNumber > computerRandomNumber ) {
    alert('Hai vinto!')
} else if ( userRandomNumber === computerRandomNumber ) {
    alert('Pareggio!')
} else {
    alert('Ha perso!')
}