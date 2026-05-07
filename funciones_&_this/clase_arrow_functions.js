//Traditional function - explicit return
const greeting = function (name) {
  return `Hi, ${name}`
}

// Arrow function - explicit return 

const newGreeting = (name) => {
  return `Hi, ${name}`
}

// Arrow function - implicit return 

const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}`

// Lexical Binding

const finctionalCharacter = {
  name: 'Uncle Ben',
  messageWithTraditionalFunction: function (message) {
    console.log(`${this.name} says: ${message}`)
  },
  messageWithArrowFunction: (message) => {
    console.log(`${this.name} says: ${message}`)// En este caso, 'this' no se refiere al objeto 'finctionalCharacter', sino al contexto global (window en navegadores), por lo que 'this.name' es undefined
    console.log(`${finctionalCharacter.name} says: ${message}`)// Para acceder correctamente al nombre del personaje, se puede usar el nombre del objeto directamente en lugar de 'this' dentro de la arrow function
  }
}

finctionalCharacter.messageWithTraditionalFunction('With great power comes great responsability.')
finctionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.')