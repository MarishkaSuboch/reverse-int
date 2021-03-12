module.exports = function reverse (n) {
    var str = String(n);
    var res = str.split("").reverse().join("");
    return parseInt(res);
}
