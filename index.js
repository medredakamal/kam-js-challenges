/** - - Med Reda Kamal - JavaScript Challenges - - */

/*  #1 : JavaScript Arrays */
/** ----------------------------------------- */

// Challenge n°1 : Check if array elements are equal
const equalElements = (arr) => {
  return arr.every((item) => item === arr[0]);
};

// Challenge n°1 Log
console.log("===== Check if array elements are equal =====");
console.log(equalElements(["hello", "hello", "hello"]));
console.log(equalElements(["hello", "hello", "world"]));
console.log("=== end ===");

// Challenge n°2 : Sorting array numbers in descending order
const sortArrNumbers = (arr) => {
  return arr.sort((a, b) => b - a);
};

// Challenge n°2 Log
console.log("===== Sorting array numbers in descending order =====");
console.log(sortArrNumbers([12, 43, 235, 3, 15]));
console.log("=== end ===");

// Challenge n°3 : Sorting array strings alphabetically
const sortArrStrings = (arr) => {
  return arr.sort((a, b) => {
    if (b > a) {
      return -1;
    } else {
      return 1;
    }
  });
};

// Challenge n°3 Log
console.log("===== Sorting array strings alphabetically =====");
console.log(sortArrStrings(["z", "c", "d", "a", "y", "a", "w"]));
console.log("=== end ===");

// Challenge n°4 : Return the average of an array of numbers
const numbersAverage = (arr) => {
  return arr.reduce((acc, c) => acc + c, 0) / arr.length;
};

// Challenge n°4 Log
console.log("===== Return the average of an array of numbers =====");
console.log(numbersAverage([-40, 0, 850, 65]));
console.log("=== end ===");

// Challenge n°5 : Return the longest string from an array of strings
const longestArrString = (arr) => {
  return arr.reduce((a, b) => (a.length <= b.length ? b : a));
};

// Challenge n°5 Log
console.log("===== Return the longest string from an array of strings =====");
console.log(longestArrString(["I", "Love", "Web Development"]));
console.log("=== end ===");

// Challenge n°6 : Merge an arbitrary number of arrays (Method 1)
const mergeArrays_method1 = (arr1, arr2, ...arr) => {
  return arr1.concat(arr2, ...arr);
};

// Challenge n°6 Log
console.log("===== Merge an arbitrary number of arrays (Method 1) =====");
console.log(mergeArrays_method1([true, true], [1, 2], ["a", "b"]));
console.log("=== end ===");

// Challenge n°6 : Merge an arbitrary number of arrays (Method 2)
const mergeArrays_method2 = (...arr) => {
  return arr.flat();
};

// Challenge n°6 Log
console.log("===== Merge an arbitrary number of arrays (Method 2) =====");
console.log(mergeArrays_method2([true, true], [1, 2], ["a", "b"]));
console.log("=== end ===");
