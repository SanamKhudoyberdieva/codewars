// Mine
function check(a, x) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === x) {
            return true;
        }
    }
    return false;
}

// Not mine
const check = (a,x) => a.includes(x);