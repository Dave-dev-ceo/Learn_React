// Desestructuracion 

const persona = {
    nombre : 'Tony',
    edad : 45,
    clave : 'Ironman',
    rango : 'Soldado'
};

// const {nombre, edad, clave} = persona;
// console.log( nombre);
// console.log( edad);
// console.log( clave);


// La destructuracion en los argumentos de la funcion, mismo que se puede inicializar 
// en el argumento una propiedad del objeto
// si se inicializa desde el objeto entonces retorna el valor cunado
// se declara el objeto y no toma el que se asigna en el argumento

const useContext= ({nombre, edad, clave, rango = 'Capitan'}) => {
    // console.log(nombre, edad, clave, rango );
    return{
        nombreClave : clave,
        anios : edad,
        latlng : {
            lat : 14.1324,
            lng : -12.3232,
        }
    }
}


const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);