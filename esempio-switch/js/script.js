const fruits = prompt('Dimmi un frutto');

// Se fruits è uguale a Banana 'Banana is good'
// Altrimenti se è uguale a Orange "Orange is good"
// altrimenti 'invalid fruits'

// let userMessage;
// if(fruits === 'Banana') {
//     userMessage = 'Banana is good';
// } else if(fruits === 'Orange') {
//     userMessage = 'Orange is good';
// } else {
//     userMessage = 'invalid fruits';
// }

switch(fruits) {
    case 'Banana':
        userMessage = 'Banana is good';
        break;
    case 'Orange':
        userMessage = 'Orange is good';
        break;
    default:
        userMessage = 'invalid fruits';
}

console.log(userMessage);