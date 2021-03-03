import { getSaludo } from "../../base/02-template-string";
import '@testing-library/jest-dom';

describe('Pruebas en el archivo 02-template-string', () => {
    
    test('El metodo getSaludo debe retornar Hola David!', () => {

        //Inicialización
        const nombre = 'David';
        // Estimulo 
        const saludo = getSaludo (nombre);
        //Supervision
        expect(saludo).toBe('Hola ' + nombre + '!');
                
    });

    test('getSaludo debe retornar Hola Carlos! si no hay un argumento nombre', () => {
        //inicialización
        //Estimulo
        const saludo = getSaludo();
        //Supervision
        expect(saludo).toBe('Hola Carlos!');
    });
    
    
});
