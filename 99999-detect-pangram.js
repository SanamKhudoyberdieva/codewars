// Mine
// function isPangram(string){
//     let regex = /A-Z/;
//     return regex.test(string);
// }

// function isPangram(string) {
//     return !/^(?!.*(?:abcdefghijklmnopqrstuvwxyz1234567890)).*$/i.test(string);
// }


function isPangram(string) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    string = string.toLowerCase();
    for (let char of alphabet) {
        if (!new RegExp(char).test(string)) {
        return false;
        }
    }
    return true;
}