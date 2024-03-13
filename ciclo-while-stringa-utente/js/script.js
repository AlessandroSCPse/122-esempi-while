// chiedere un nome all'utente, se non inserisce nulla richiedere il nome

// Chiedo il nome all'utente
// fintanto che la lunghezza della stringa e 0
// richiediamo il nome
let userName = prompt('Dimmi un nome');
while(userName.length === 0) {
    userName = prompt('Dimmi un nome');
    console.log(userName);
}
