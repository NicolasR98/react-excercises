//Arrange (imports)
import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe("Test on 02-template-string", () => {
    test('getSaludo must return "Hola nicolas"', ()=>{
        //Arrange variable inizialitation
        const name = 'nicolas';
        const saludo = getSaludo(name);

        //Act & Assert
        expect(saludo).toBe(`Hola ${name}`);
    })

    test('getSaludo must return "Hola Mundo" if there is no argument', () =>{
        const saludo = getSaludo();
        expect(saludo).toBe(`Hola Mundo`);
    })
});
