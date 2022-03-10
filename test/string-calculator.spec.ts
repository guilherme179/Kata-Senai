import {stringCalculator} from '../src/string-calculator' 

describe('stringCaltulator', () => {
    const abaixoDe1000 = "1,2,123"
    const acimaDe1000 = "1,2,123,1234,2000"
    const comNumeroNegativo = "1,2,1234,-50"

    test('deve retorna a soma dos numeros', ()=> {
        const resposta = stringCalculator(abaixoDe1000)
        expect(resposta).toBe(126)
    })

    test('deve retorna a soma dos numeros e ignorar numeros acima de 1000', ()=> {
        const resposta = stringCalculator(acimaDe1000)
        expect(resposta).toBe(126)
    })

    test('deve retorna a soma dos numeros e deve ignorar numeros negativos', ()=> {
        const resposta = stringCalculator(comNumeroNegativo)
        expect(resposta).toBe(126)
    })
})
