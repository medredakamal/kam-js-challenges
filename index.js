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

// Challenge n°7 : Remove a specific array element
const removeArrElement = (arr, val) => {
  return arr.filter((item) => item !== val);
};

// Challenge n°7 Log
console.log("===== Remove a specific array element =====");
console.log(removeArrElement([1, "2", 3], "2"));
console.log("=== end ===");

// Challenge n°8 : Merge two arrays with duplicate values (Method 1)
const mergeClean_method1 = (...arr) => {
  return [...new Set(arr.flat().sort((a, b) => a - b))];
};

// Challenge n°8 Log
console.log("===== Merge two arrays with duplicate values (Method 1) =====");
console.log(mergeClean_method1([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));
console.log("=== end ===");

// Challenge n°8 : Merge two arrays with duplicate values (Method 2)
const mergeClean_method2 = (first, second) => {
  return [...new Set([...first, ...second])].sort((a, b) => a - b);
};

// Challenge n°8 Log
console.log("===== Merge two arrays with duplicate values (Method 2) =====");
console.log(mergeClean_method2([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));
console.log("=== end ===");

// Challenge n°9 : Sum up all array elements with values greater than (Method 1)
const SumArrGreaterThan_method1 = (arr, num) => {
  return arr.filter((item) => item > num).reduce((acc, curr) => acc + curr, 0);
};

// Challenge n°9 Log
console.log(
  "===== Sum up all array elements with values greater than (Method 1) ====="
);
console.log(SumArrGreaterThan_method1([78, 99, 100, 101, 401], 99));
console.log("=== end ===");

// Challenge n°9 : Sum up all array elements with values greater than (Method 2)
const SumArrGreaterThan_method2 = (arr, num) => {
  return arr.reduce((sum, curr) => {
    if (curr > num) return sum + curr;
    else return sum;
  }, 0);
};

// Challenge n°9 Log
console.log(
  "===== Sum up all array elements with values greater than (Method 2) ====="
);
console.log(SumArrGreaterThan_method2([78, 99, 100, 101, 401], 99));
console.log("=== end ===");

// Challenge n°10 : Create a range of numbers
const numbersRange = (num1, num2) => {
  let myarray = [];
  for (let i = num1; i <= num2; i++) {
    myarray.push(i);
  }
  return myarray;
};

// Challenge n°10 Log
console.log("===== Create a range of numbers =====");
console.log(numbersRange(2, 10));
console.log("=== end ===");

// Challenge n°11 : Return last n array elements (Method 1)
const lastArrElements_method1 = (arr, num) => {
  return arr.length > num - 1 ? arr.slice(-num) : arr;
};

// Challenge n°11 Log
console.log("===== Return last n array elements (Method 1) =====");
console.log(lastArrElements_method1([1, 2, 3, 4, 5], 3));
console.log("=== end ===");

// Challenge n°11 : Return last n array elements (Method 2)
const lastArrElements_method2 = (arr, num) => {
  return arr.slice(-num);
};

// Challenge n°11 Log
console.log("===== Return last n array elements (Method 2) =====");
console.log(lastArrElements_method2([1, 2, 3, 4, 5], 6));
console.log("=== end ===");

// Challenge n°12 : Group array of strings by first letter.
const groupArrayElements = (arr) => {
  return arr.reduce((acc, cur) => {
    const firstLetter = cur.toLowerCase().charAt(0);
    return {
      ...acc,
      [firstLetter]: [...(acc[firstLetter] || []), cur],
    };
  }, {});
};

// Challenge n°12 Log
console.log("===== Group array of strings by first letter. =====");
console.log(
  groupArrayElements([
    "Laravel",
    "Symfony",
    "CodeIgniter",
    "Zend Framework/Laminas Project",
    "Yii",
    "CakePHP",
    "Slim",
    "Phalcon",
    "FuelPHP",
    "Fat-Free Framework",
  ])
);
console.log("=== end ===");
