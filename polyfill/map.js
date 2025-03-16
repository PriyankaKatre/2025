Array.prototype.newMap = function (cb) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(cb(this[i], i, this))
    }
    console.log("newMap", newMap());
    return arr
}
console.log('newMap', newMap())
const threeMultiplier = [1, 2, 3, 4, 5].newMap((val, index, arr) => {
    return val*3
}
)
console.log("threeMultiplier", threeMultiplier);
