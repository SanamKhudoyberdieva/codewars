function comp(array1, array2) {
    if (!array1 || !array2) return false;
    let sorted1 = array1.sort((a, b) => a - b);
    let sorted2 = array2.sort((a, b) => a - b);
    return sorted1.every((val, i) => val * val === sorted2[i]);
}