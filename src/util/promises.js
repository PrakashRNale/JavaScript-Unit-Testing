
export const getAdditionAsync = (numOne, numTwo) =>{
    const promise = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const result = numOne + numTwo;
            console.log('in promise ' +result);
            resolve(result);
        }, 3000)
    })

    return promise;
}