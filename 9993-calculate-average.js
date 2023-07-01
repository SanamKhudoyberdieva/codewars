// Mine
function findAverage(array) {
    let sum = 0;
    let count = 0;
    array.forEach(function(item) {
        sum += item
        count++
    });
    return sum / count
}