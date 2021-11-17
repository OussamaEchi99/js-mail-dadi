// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const email = ['luca@gmail.com', 'maria@gmail.com', 'ernesto@gmail.com', 'filippo@gmail.com', 'gianfranco@gmail.com', 'michela@gmail.com'];

// Chiediamo all' utente la email
const userEmail = prompt("Qual'è la sua email?")

let emailFound = false;

for (let i = 0; i < email.length; i++) {
    const thisEmail = email[i];
    
    if( thisEmail === userEmail ) {
        emailFound = true;
    }

    console.log(userEmail);
    console.log(thisEmail);
    console.log(emailFound);
}

if(emailFound) {
    alert('La sua email risulta essere registrata, Benvenuto!');
} else {
    alert('Mi spiace ma la sua email non risulta essere registrata, contatti il servizio clienti per maggiori informazioni.');
}