const array = [5, 2, 3, 4, 1];

const bubbleSort = (arr) => {
    let swapped = false;
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-1-i; j++) {
            if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j+1], arr[j]];
                swapped = true;
            }
        }
         if (!swapped) break;
    }

    return array
}

console.log(bubbleSort(array));
