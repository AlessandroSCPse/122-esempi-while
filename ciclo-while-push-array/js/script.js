// Pushare in un array finche non ho 5 elementi

const myArray = [];

while(myArray.length < 5) {
    // const randomNumber = Math.floor(Math.random() * 100) + 1;
    const userNumber = parseInt(prompt('Dimmi un numero'));
    myArray.push(userNumber);
    console.log(myArray);
}
