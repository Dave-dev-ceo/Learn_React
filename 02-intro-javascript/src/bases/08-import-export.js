import  heroes , {owners} from '../data/heroes';
//import exportacion_por_defecto , {exportación_individual} from ''å
//Diferentes formas de importar

//console.log(owners);


// 1ER FORMA DE BUSCAR POR ID Y DEVOVER EL OBJETO COMPLETO
// const getHeroesById = ( id ) => {
//     return heroes.find(( heroe ) => heroe.id === id );
// }
// console.log(getHeroesById(2));

// 2DA FORMA 
const getHeroesById = ( id ) => heroes.find( ( heroe ) => heroe.id === id);
//console.log(getHeroesById(3));



const getHeroesByOwners = ( owner ) => {
    return (
        heroes.filter( (heroe) => {
            return heroe.owner === owner
        }
        )
    );
}
//console.log(getHeroesByOwners('Marvel'));



export default getHeroesById;