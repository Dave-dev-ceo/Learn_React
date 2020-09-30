import getHeroesById from './bases/08-import-export';



//PROMESA

// const promesa = new Promise( ( resolve , reject ) => {
//     setTimeout (() => {
//         const heroe = getHeroesById(2);
//         resolve(heroe);
//         //reject('No se pudo resolver la promesa')
//     } , 2000);

// });


// promesa.then( (heroe) => {
//     console.log('heroe desde la promesa', heroe);
// })
// .catch( err => console.warn( err ));



const getHeroesByIdAsync = ( id ) => {
    return new Promise( ( resolve , reject ) => {
        setTimeout ( () => {
            const heroe = getHeroesById(id);
            if (heroe){
                resolve(heroe)
            }else 
                reject('El ID que buscas no se encuentra')
        } , 2000);
    
    });
}

getHeroesByIdAsync(10)
    .then( heroe => console.log('HEROE' , heroe))
    .catch (err => console.warn( err ));

//una forma de optimizar el codigo enn el THEN Y CATCH
// getHeroesByIdAsync(2)
// .then(console.log)
// .catch (console.warn);