// Mine
function countSmileys(arr) {
    let count = 0;
    let valid = [':)', ';)', ':D', ';D', ':-)', ';-)', ':~)', ';~)', ':-D', ';-D', ':~D', ';~D'];
    for (let i = 0; i < arr.length; i++) {
        if (valid.includes(arr[i])) {
            count++;
        }
    }
    return count;
}