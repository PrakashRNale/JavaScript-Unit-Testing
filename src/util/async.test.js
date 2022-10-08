
import { getAdditionPromise, getAdditionCallback } from './async';

describe('Testing promises',() =>{
    it('should test async await for addition', async ()=>{
        console.log('testing');
    
        const addition = await getAdditionPromise(4,5);
        
        expect(addition).toBe(9);
    
    })
    
    it('should test promise for addition', ()=>{
        // use return in following expect statement
        return expect(getAdditionPromise(40,50)).resolves.toBe(90);
    })
})

describe('Testing Callbacks', () =>{
    it('should return result as per data provided', () => new Promise((done) => {
        // Arrange
        let numOne = 10;
        let numTwo = 20;

        // assert

        getAdditionCallback(numOne, numTwo , (result) => {
            console.log('in callback '+result)
            expect(result).toBe(30);
            done();
        })
        
    }))
})
