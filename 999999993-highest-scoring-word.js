function high(x){
    let sum = 0;
    let arr = x.split(' ').map(char => char.charCodeAt(0) - 96)
    for (let i = 0; i < arr.length; i++){
        sum += arr[i] 
    }
    let high = Math.max(sum)
    return ( String.fromCharCode(96 + sum) )
}

https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript