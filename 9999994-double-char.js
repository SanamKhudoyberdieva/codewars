function doubleChar(str) {
    let fresult = ""
    let char = str.split("")
    for(let i=0; i<char.length; i++){
        fresult += char[i] + char[i]
    }
    return fresult
}