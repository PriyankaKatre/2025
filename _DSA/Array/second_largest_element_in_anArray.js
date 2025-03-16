const array = [1, 0, 7, -1, -5, 7, 8, 8, 2, 4, 5, 18, 20, 50, 50, 50, 5]

//Optimal
const sLargestElement = (arr) => {
    let largest = -Infinity;
    let sLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            sLargest = largest;
            largest = arr[i];
        } else if (arr[i] < largest && arr[i] > sLargest) {
            sLargest = arr[i]
        }
    }

    return sLargest;
}

const sSmallestElement = (arr) => {
    let smallest = Infinity;
    let sSmallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            sSmallest = smallest;
            smallest = arr[i]
        } else if (arr[i] > smallest && arr[i] < sSmallest) {
            sSmallest = arr[i]
        }
    }
    return sSmallest;
}

console.log('sLargest', sLargestElement(array));
console.log('sSmallest', sSmallestElement(array));


//Better
const secondLargestElement = (arr) => {
    let largest = -Infinity;
    let sLargest = -Infinity;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > sLargest && arr[i] < largest) {
            sLargest = arr[i]
        }
    }
    return sLargest;
}

console.log(secondLargestElement(array))
