// Mine
function findNextSquare(sq) {
    let result = Math.sqrt(sq)
    let nextResult = result + 1
    if(result %1 == 0){
       return nextResult * nextResult
    } else {
        return -1
    }
}