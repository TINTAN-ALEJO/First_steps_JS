// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Immutability).

// find() - Retorna el primer elemento que cumple con la condición especificada en la función.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstEvenNumber = numbers.find(num => num % 2 === 0); //Se usa el método find para encontrar el primer número par en el array

console.log("Primer número par encontrado: ", firstEvenNumber);

const firstEvenNumber2 = numbers.find(num => num < 8); //Se usa el método find para encontrar el primer número menor a 8 en el array

console.log("Primer número menor a 8 encontrado: ", firstEvenNumber2);

const firstEvenNumber3 = numbers.find(num => num > 8); //Se usa el método find para encontrar el primer número mayor a 8 en el array

console.log("Primer número mayor a 8 encontrado: ", firstEvenNumber3);

// findIndex() - Retorna el índice (o posición) del primer elemento que cumple con la condición especificada en la función, sino lo encuentra, retorna -1.
console.log("________________________________________");

const randomNumbers = [77, 19, 27, 56, 40, 7, 23, 12, 8, 9, 10];
const indexOfFirstEvenNumber = randomNumbers.findIndex(num => num % 2 === 0); //Se usa el método findIndex para encontrar el índice del primer número par en el array

console.log("Índice del primer número par encontrado: ", indexOfFirstEvenNumber);

const indexOfFirstEvenNumber1 = randomNumbers.findIndex(num => num < 8); //Se usa el método findIndex para encontrar el índice del primer número menor a 8 en el array

console.log("Índice del primer número menor a 8 encontrado: ", indexOfFirstEvenNumber1);

const indexOfFirstEvenNumber2 = randomNumbers.findIndex(num => num > 8); //Se usa el método findIndex para encontrar el índice del primer número mayor a 8 en el array

console.log("Índice del primer número mayor a 8 encontrado: ", indexOfFirstEvenNumber2);


//EJERCICIO - Crear un programa para encontrar ganadores de una rifa por nombre y número de ticket.
console.log("________________________________________");

const winningParticipants = [
  { id: 1, name: 'Jennifer', ticketNumber: 12 },
  { id: 8, name: 'Michael', ticketNumber: 82 },
  { id: 15, name: 'Emily', ticketNumber: 152 },
  { id: 47, name: 'Charlie', ticketNumber: 472 }
]

function findWinnerByName (name) {
  const winner = winningParticipants.find(participants => participants.name === name)
  return winner || 'No winner found with that name.'
}

function findIndexWinnerByTicket (ticketNumber) {
  const index = winningParticipants.findIndex(participants => participants.ticketNumber === ticketNumber)
  return index !== -1 ? index : 'No winner found with that ticket number.'
}

function displayWinnerInformation (winner) {
  if (winner !== undefined && winner != null && winner !== 'No winner found with that name.') {
    console.log('Winner information: ', winner)
  } else {
    console.log('No winner found.')
  }
}

const winnerByName = findWinnerByName('Emily')
const indexWinnerByTicket = findIndexWinnerByTicket(152)

displayWinnerInformation(winnerByName)
console.log('Index of Winner by Ticket Number: ', indexWinnerByTicket)