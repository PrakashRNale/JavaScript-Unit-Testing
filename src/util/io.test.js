

import { promises } from 'fs';
import writeData from './io';

it('should execute writeFile method of fs module', () =>{
    vi.mock('fs');

    const testData = 'Test';
    const testFileName = 'test.txt';

    writeData(testData, testFileName);

    expect(promises.writeFile).toBeCalledTimes(1);
})

it('should throw an error if we dont pass data to writeFile function', () => {
    vi.mock('fs');

    const testData = 'Test';
    const testFileName = 'test.txt';

    try{
        writeData();
    }catch(error){
        expect(error).toBeDefined();
    }


    expect(promises.writeFile).toBeCalledTimes(1);
})

it('should throw an error if we dont pass data to writeFile function', () => {
    vi.mock('fs');

    const testData = 'Test';
    const testFileName = 'test.txt';

    const tempFn = () =>{
        writeData();
    }

    expect(tempFn).toThrow()
})