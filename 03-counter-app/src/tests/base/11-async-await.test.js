import { getImagen } from "../../base/11-async-await";

describe('Pruebas con Async Await y fetch', () => {
    test('getImage debe retornar la url de la imagen aleatoria', async() => {
        
        const url = await getImagen();

        expect(typeof url).toBe('string');
    });
    
});
