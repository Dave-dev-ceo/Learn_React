import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes ', () => {
    
    test('getHeroeById debe retornar un Heroe por ID', () => {
        
        const id = 1;

        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find(h => h.id === id);

        expect(heroeData).toEqual(heroe);
    });

    test('getHeroeById debe retornar UNDEFINED si el id ingresado no tiene heroe', () => {
        
        const id = 10;

        const heroe = getHeroeById(id);
        

        expect(heroe).toEqual(undefined);
    });

    test('getHeroesByOwner debe retornar un arreglo con los héroes de DC', () => {
        
        const owner = 'DC';

        const heroesDC = getHeroesByOwner(owner);

        const heroesDCdata = heroes.filter( h => h.owner === owner );
    
        expect(heroesDCdata).toEqual(heroesDC);
    });
    
    test('getHeroesByOwner debe retornar los heroes de Marvel y evaluar el LENGHT del objeto heroes de Marvel' , () => {
        
        const owner = 'Marvel';

        const heroes = getHeroesByOwner(owner);
    
        expect(heroes.length).toBe(2);
    });
});
