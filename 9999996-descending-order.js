function descendingOrder(n){
    let nsArr = Array.from(String(n), Number);
    let fresult = nsArr.sort().reverse()
    let int = Number(fresult.join(''))
    return int
}