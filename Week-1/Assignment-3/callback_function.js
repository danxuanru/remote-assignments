function delayedResult(n1, n2, delayTime, callback) {
    const n = n1 + n2;   // 需使用const n才不會被覆蓋
    setTimeout(function(){   // 為什麼不能直接使用callback 需要以function{callback}的形式??
        callback(n);
    }, delayTime);
}
delayedResult(4, 5, 3000, function (result) {
console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5, 10, 2000, function (result) {
console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds

// !!! use 'setTimeout()'