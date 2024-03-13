// Crea un array vuoto e chiedi all'utente un 
// numero da inserire nell'array. 
// Continua a chiedere numeri e a inserirli 
// nell'array finche la somma è minore di 50.
const numbers = [];

let sum = 0;
// Chiedo un numero all'utente finche la somma è 50
while(sum < 50) {
    // Per ogni numero:
    const userNumber = parseInt(prompt('Dimmi un numero'));
    // lo sommo a sum
    sum += userNumber;
    // lo pusho nell'array
    numbers.push(userNumber);
}

console.log(sum);
console.log(numbers);