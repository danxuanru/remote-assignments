function max(numbers) {
    let maximum = numbers[0];
    for(number of numbers){  // for(let i=1; i<numbers.length; i++)
        if(number>maximum) maximum = number;
    }
    return maximum;
}

function findPosition(numbers, target) {
    for(i in numbers){
        if(numbers[i] == target) return i;
    }
    return -1;

}

console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7
console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2 (the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1