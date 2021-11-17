// Generare un numero random da 1 a 6,
// sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Creare Variablili
const playBtn = document.getElementById('play');
playBtn.addEventListener('click',
    function() {
        // Creare Variablili
        const userRandomNumber = Math.floor(Math.random() * 6) + 1;
        const computerRandomNumber = Math.floor(Math.random() * 6) + 1;
        console.log(userRandomNumber);
        console.log(computerRandomNumber);

        let result;
        // Logica
        if ( userRandomNumber > computerRandomNumber ) {
        result = 'Hai Vinto!'
        document.getElementById('result').innerHTML = result;
        } else if ( userRandomNumber === computerRandomNumber ) {
        result = 'Pareggio!'
        document.getElementById('result').innerHTML = result;
        } else {
        result = 'Hai Perso!'
        document.getElementById('result').innerHTML = result;
        }

        document.getElementById('user_number').innerHTML = userRandomNumber;
        document.getElementById('computer_number').innerHTML = computerRandomNumber;
       
    }
);