function check(a, x) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === x) {
            return true;
        }
    }
    return false;
}


function check(a,x){
    return a.indexOf(x) > -1 ? true : false;
};