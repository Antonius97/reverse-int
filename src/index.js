module.exports = function reverse (n = 0) {
    return +(""+Math.abs(n)).split("").reverse().join("")
}
