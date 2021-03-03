import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Puebas de funciones en el archivo 05-funciones', () => {
    
    test('getUser Debe de retornar un objeto ', () => {
        
        //iniciacializacion

        const testUser = {
            uid: 'ABC123',
            username:'El_Dave17'
        }

        //estimulo 
        const user = getUser();
        // console.log(user);
        //supervision
        expect( user ).toStrictEqual(testUser);
    });
    
    test('getUser debe retornar el objeto con el nombre de el argumento', () => {
        //inicializacion
       const nombre = 'David'

        //estimulo
        const user = getUsuarioActivo(nombre);
        //supervison
        expect(user).toStrictEqual({
            uid:'ABC567',
            username : nombre
        })
    });
    
});
