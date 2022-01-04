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
