function twiceAsOld(dadYearsOld, sonYearsOld) {
    let year = dadYearsOld - sonYearsOld * 2
    return year < 0 ? year * (-1) : year
}