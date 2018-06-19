function countSheep(count) {
  if (count === 0) {
    return;
  }

  console.log(`${count} - Another sheep jump over the fence`); // eslint-disable-line no-console
  countSheep(count - 1);
}

// O(n)
    // the function has to run until it reaches 0 making the print grow if count is 0 

function anagrams(prefix, str) {
      if (str.length <= 1) {
        console.log(`The anagram is ${prefix}${str}`);
      } else {
        for (let i = 0; i < str.length; i++) {
          let currentLetter = str.substring(i, i + 1);
          let previousLetters = str.substring(0, i);
          let afterLetters = str.substring(i + 1);
          anagrams(prefix + currentLetter, previousLetters + afterLetters);
        }
      }
    }
    function printAnagram(word) {
      //console.log(`The word for which we will find an anagram is ${word}`);
      anagrams(' ', word);
    
    }
    
    printAnagram('east');

//O(n^2)
    // you have to go through each function just like a loop and inside each function is a for loop

function binaryRepresentation(num) {
  if (num > 0) {
    let binary = Math.floor(num % 2); // binary string

    return binaryRepresentation(Math.floor(num / 2)) + binary;// return binary
  }

  return '';
}

//O(n)
  //the function is called until the number being divided is at zero

  function factorial(num) {
    if (num === 0) return 1;
    //if(num === 1) return 1;//should stop when it reaches zero
  
    return num * factorial(num - 1);// multiply the num with the return function that has num-1
  }

//O(n)
  //the number being multiplied until it has reached zero 

function fib(num) {
  if (num <= 0) {
    return 0;
  }

  if (num <= 2) {
    return 1;
  }

  return fib(num - 1) + fib(num - 2);
}

//O(n)
  //it runs fib until the num return less than equal 0 or less than equal 2

function nthTriangularNumber(num){
  if(num === 0) return 0;

  return num + nthTriangularNumber(num-1);// eslint-disable-line no-console
}

//O(n)
  //runs until num is zero adding all the nums together

function reverseString(str) {
  if (str === '') {
    return '';
  }

  const lastChar = str.slice(-1);

  return lastChar + reverseString(str.slice(0, -1));
}

//O(n)
  //runs until the str is empty 

function splitString(str, separator) {
    if (str.length === 0) {
        return [];
    }

    const index = str.indexOf(separator);
    if (index === -1) {
        return [str];
    }
    return [str.slice(0, index), ...splitString(str.slice(index + 1), separator)];
}

//O(n)
  //it runs until str length is zero 