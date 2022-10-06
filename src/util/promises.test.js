
import { getAdditionAsync } from './promises';

it('should test async await for addition', async ()=>{
    console.log('testing');

    const addition = await getAdditionAsync(4,5);
    
    expect(addition).toBe(9);

})

it('should test promise for addition', ()=>{
    return expect(getAdditionAsync(40,50)).resolves.toBe(90);
})