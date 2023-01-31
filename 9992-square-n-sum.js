// Mine
function squareSum(numbers) {
    let sum = 0
    numbers.forEach( number => sum += (number * number))
    return sum
}

// Mine
function squareSum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
      sum += (numbers[i] * numbers[i])
    }
    return sum
}