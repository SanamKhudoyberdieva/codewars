function squareDigits(n) {
    return +n.toString().split('').map(num => num * num).join('');
}