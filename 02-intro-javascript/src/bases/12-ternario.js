
const activo = true;

//let mensaje ='';


// -------BASICA 
// if(!activo){
//     mensaje = 'Activo';
// }else{
//     mensaje = 'Inactivo'
// }

// ------ 2 OPCION
//const mensaje = (activo) ? 'Activo' : 'Inactivo';

// ------- 3 OPCION
//const mensaje = (activo) ? 'Activo' : null;


//-------- 4 OPCION es hacer el IF sin el ELSE
const mensaje = activo && 'Activo';
console.log(mensaje);