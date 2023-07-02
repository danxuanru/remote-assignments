function delayedResultPromise(n1, n2, delayTime){
    const result = n1 + n2;
    return new Promise((resolve, reject) => {  
        setTimeout(()=>resolve(result),delayTime);  
    })
}

async function main(){
    const answer = await delayedResultPromise(4, 5, 3000);
    console.log(answer);
}

main();