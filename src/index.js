module.exports = function reverse(n) {
    if (n < 0) {
        n = n * -1;
    }
    const toString = n + '';
    if (toString[toString.length - 1] === 0) {
        toString.replace('0', '')
    }
    return +toString.split('')
        .reverse()
        .join('');
}

