module.exports = function check(str, bracketsConfig) {
    let pairs = [];
    bracketsConfig.forEach(item => pairs.push(item[0] + item[1]))

    for (let i = 0; i < pairs.length; i++) {
        if (str.includes(pairs[i])) {
            str = str.replace(pairs[i], '')
            i = - 1;
        }
    }
    
    return str === ''
    
}
