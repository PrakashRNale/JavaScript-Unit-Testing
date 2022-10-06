import { expect } from 'vitest';
import { add } from './math';

it('should add all the numbers in an array', () =>{
    //Arrange
    const numbers = [1,2,3];

    //act
    const result = add(numbers);

    //assert
    const expectedResult = numbers.reduce((curr, prev) =>{
        return curr + prev
    })
    expect(result).toBe(expectedResult);
})

it('should return NaN if at least one value is not a number', () =>{
    //Arrange
    const numbers = ['invalid',2,3];

    //act
    const result = add(numbers);

    //assert
    const expectedResult = numbers.reduce((curr, prev) =>{
        return curr + prev
    })
    expect(result).toBeNaN();
})

it('should throw an error if empty array is passed', () =>{
    //Arrange
    const numbers = ['invalid',2,3];

    //act
    try {
        const result = add();
    } catch (error) {
        expect(error).toBeDefined();
    }
})

it('should throw an error if empty array is passed', () =>{
    //Arrange
    const numbers = ['invalid',2,3];

    //act
    const resultFn = () => {
         add();
    } 

    expect(resultFn).toThrow();
})

it('should throw an error if empty array is passed and error message should be not iterable', () =>{
    //Arrange
    const numbers = ['invalid',2,3];

    //act
    const resultFn = () => {
         add();
    } 

    expect(resultFn).toThrow(/is not iterable/); // This is regular expression
})