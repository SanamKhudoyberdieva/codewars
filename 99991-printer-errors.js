let printerError = s => {
    let regex = /[a-m]/g
    let proper_num_of_matches = ((s || '').match(regex) || []).length
    return `${s.length - proper_num_of_matches}/${s.length}`
}