// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all'array che 
// ha meno elementi fino a quando ne avrà tanti quanto l'altro.
const firstArray = [5, 90];
const secondArray = [3, 87, 45, 67, 6, 78, 12];

// Finche la lunghezza del primo array è inferiore alla lunghezza
// del secondo array:
while(firstArray.length < secondArray.length) {
    // genero un numero random
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    // e lo pusho nel primo array
    firstArray.push(randomNumber);
}

console.log(firstArray);
console.log(secondArray);
