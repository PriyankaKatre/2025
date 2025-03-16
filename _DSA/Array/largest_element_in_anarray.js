const array = [-1000, -50, -25];

const largestElement = (arr) => {
     if (arr.length === 0) return -Infinity; // Handle empty array case
     let largest = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  return largest;
};

console.log(largestElement(array));
