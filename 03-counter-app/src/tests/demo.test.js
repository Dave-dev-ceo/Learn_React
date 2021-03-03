describe('Pruebas en el archivo demo.test.js', () => {
    test('Deben ser iguales los strings', () => {
    // 1. inicialización
    const mensaje_1 = 'Hola mundo';

    // 2. estímulo
    const mensaje_2 = `Hola mundo`;

    // 3. Observar el comportamiento
    expect( mensaje_1).toBe( mensaje_2); // === 
});
});



