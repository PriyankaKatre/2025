const arr = [1, 2, 3, 3, 4, 2, 1, 5, 6]

const removeDuplicate = (arr) => {
    let map = new Map();
    let result = [];
    for (let i = 0; i < arr.length; i++) {
         map.set(arr[i], 1);
    }

    for(let key of map.keys()) {
        result.push(key)
    }
    return result;
}

console.log(removeDuplicate(arr));
