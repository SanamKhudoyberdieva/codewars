var number = function(array) {
    if(array.length == 0) {
        return [];
    } else {
        return array.map(function (input, index) {
            return (index+1) + ": " + input;
        });
    }
}

// Not mine
let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)