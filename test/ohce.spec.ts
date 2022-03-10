import {ohce} from '../src/ohce'

describe('ohce', () =>{
    test('palavra sendo palíndromo', ()=>{
        expect(ohce('arara')).toBe(true)
    })
    test('palavra não sendo palíndromo', ()=>{
        expect(ohce('casa')).toBe('casa')
    })

})