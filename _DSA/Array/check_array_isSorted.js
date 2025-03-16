const arr = [8, 6, 9];

const isSorted = (arr) => {
  let isAscending = true;
  let isDescending = true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      isDescending = false;
    }
    if (arr[i] < arr[i - 1]) {
      isAscending = false;
    }
  }

  return isAscending || isDescending;
};

console.log(isSorted(arr));
