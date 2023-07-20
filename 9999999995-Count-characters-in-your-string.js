function count (string) {  
    let result = {};
    
    for(let i = 0; i < string.split('').length; i++) {
        let count = string.split('').filter(a => a === string.split('')[i]).length;
        result[string.split('')[i]] = count;
    }
    
        return result;
}


const count = s => require("lodash").countBy(s)