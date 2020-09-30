
 const saludar = function(nombre) {
    return `Hola ${nombre}`;
}
console.log(saludar('David'));

// Con arrow function 
const saludar2 = ( nombre ) => {
   return `Hola ${nombre}`;
}
console.log(saludar2('karen'));

// Arrow function sin return implicito
const saludar3 = ( nombre ) => `Hola ${nombre}`
console.log(saludar3(' Novios'));

// Arrow function sin argumentos
const saludar4 = () => `Hola Mundo`;
console.log(saludar4());


//Sin return, USANDO LOS  (   ) para retornar 

const getUser = () => ({
   uid : 'abdc',
   username : 'Dave_1'
});
const user = getUser()
console.log(user);


// TAREA
// 1.Transformar a una funcion flecha.
// 2. Tiene que retornar un objeto implicito.Transformar
// 3. Pruebas

// function getUsuarioActivo ( nombre ) {
//     return {
//         uid : 'ABCD567',
//         username : nombre,
//     }
// };

// const usuarioActivo = getUsuarioActivo('Fernando');
// console.log(usuarioActivo);

const getUsuarioActivo = ( nombre ) => ({
   uid : 'ABCD567',
   username : nombre,
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);


