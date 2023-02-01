const getCount = str => Array.from(str)
    .filter(letter => 'aeiou'.includes(letter)).length;