function greet (name, owner) {
    if (name===owner){
        return 'Hello boss'
    } else {
        return 'Hello guest'
    }
}


function greet (name, owner) {
    return name === owner ? 'Hello boss' : 	'Hello guest';
}