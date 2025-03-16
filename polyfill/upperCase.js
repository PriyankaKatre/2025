Array.prototype.customUpperCase = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].charAt(0).toUpperCase() + this[i].slice(1, this.length+1)
    }
    return this
}


const arr = ['apple', 'orange', 'lichi', 'peru']
console.log(arr.customUpperCase())
