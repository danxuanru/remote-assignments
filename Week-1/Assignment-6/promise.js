function delayedResultPromise(n1, n2, delayTime){
    const result = n1 + n2;
    return new Promise((resolve, reject) => {  // return Promise object
        setTimeout(()=>resolve(result),delayTime);  // promise fulfilled -> resolve()
    })
}

delayedResultPromise(4, 5, 3000).then(console.log);

