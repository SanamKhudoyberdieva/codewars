// Mine
function areYouPlayingBanjo(name) {
    if (name[0] == "R" || name[0] == "r") {
        return `${name} plays banjo`
    } else {
        return `${name} does not play banjo`
    }
}


// Not mine 
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}