
export const getAdditionPromise = (numOne, numTwo) =>{
    const promise = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const result = numOne + numTwo;
            console.log('in promise ' +result);
            resolve(result);
        }, 3000)
    })

    return promise;
}

export const getAdditionCallback = (numOne, numTwo, cb) =>{
    setTimeout(() =>{
        const result = numOne + numTwo
        cb(result);
    },1000)
}