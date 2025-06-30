/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
  {
    username: "Andres",
    password: "123",
  },
  {
    username: "Caro",
    password: "456",
  },
  {
    username: "Mariana",
    password: "789",
  },
  {
    username: "Estefany",
    password: "357",
  },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta más el café que el té",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];

const username = prompt("Ingrese usuario (La primera letra debe estar en Mayusculas");
const password = prompt("Ingrese contraseña");

function user_exist (username, password){
    for (let i = 0; i < usersDatabase.length; i++) {
        if (
            usersDatabase[i].username === username && usersDatabase[i].password === password
        ){
          console.log(`¡ ${username} Bienvenido/a !`);
          return true;
        }
    }
    console.log("Usuario no encontrado, ingrese con otro usuario y contraseña");
    return false;
}

function timeline_exist (username){
  for(const user_timeline of usersTimeline){
    if (user_timeline.username === username){
      return console.log(`Timeline: ${user_timeline.timeline}`);
    }
  }
  return console.log("usuario sin timeline");
}

user_exist(username, password);

timeline_exist(username);

////////////////////////////////////////////////////////////////////////

// // Misma validación del usuario y contraseña pero usando FOR OF (Mi primera opción) 

// function user_exist(username,password){
//   for (const user of usersDatabase){
//     if (user.username === username && user.password === password){
//       console.log(`¡ ${user.username} Bienvenido/a !`);
//       return true;
//     }

//   }
//       console.log("Usuario no encontrado, ingrese con otro usuario y contraseña");
//       return false;
// }

// user_exist(username, password);