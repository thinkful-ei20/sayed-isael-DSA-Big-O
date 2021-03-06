// EVEN OR ODD
function isEven(value) {
  if (value % 2 == 0) {
    return true;
  }
  else
    return false;
}
// O(1)
// does one operation to divide the input in half and check if its remainder is 0

// ARE YOU HERE?
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}
// O(n^2)
// nested loops, each run of first loop needs to wait for second loop to complete

// DOUBLER
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}
// O(n)
// goes through entire array and doubles the values. The larger the array, the more operations are needed

// Naive Search
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}
// O(n)
// Loops through entire array until it finds a match

// CREATING PAIRS:
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}
// O(n^2)
// nested loops

// Computing fiboaaccis
function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}
// O(n)
// the larger the input given, the more operations needed to find the sequence

// AN EFFICIENT SEARCH
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}
// O(log(n))
// function cuts the inputted arrays length in half, so even as the input increases the amount of
// operations needed doesnt increase by much

// RANDOM ELEMENT
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// O(1)
// input size doesnt matter, fuction does one operation to pick a random number from the array

// IS IT PRIME?
function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}
// O(n)
// Function keeps dividing the input by integers from 2 to n, the larger the input, the more operations are needed