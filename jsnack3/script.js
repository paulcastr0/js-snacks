
// Il software deve chiedere per 10 volte di stampare un numero. 
// Il programma stampa la somma di tutti i numeri inseriti.


let userNumber;
// Creo Array per contenere tutti i numeri dell'utente
let arrayNumbers = [];

for (i = 0; i < 10; i++) {
    // Chiedo 10 numeri all'utente => ripeto per 10 volte un prompt
    userNumber = parseInt(prompt('Insert a number:'));
    // Inserisco il numero digitato dall'utente nell'array
    arrayNumbers.push(userNumber);
}
//Stampo tutti i numeri inseriti nell'array
console.log(arrayNumbers);


//Creo Variabile per somma
let sum;
for (i = 0; i < arrayNumbers.length; i++) {
    // Stampo ogni elemento dell'array
    let userNumber = arrayNumbers[i];
    console.log(i + ". " + userNumber);
    // Somma elementi
    sum = userNumber + sum;
}

console.log('Total sum is: ' + sum);