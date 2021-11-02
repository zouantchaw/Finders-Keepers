// findElement should look through an array and return the first element in it that passes a 'truth test'
// Given an element 'x', the 'truth test' is passed if func(x) is true
// If no element passes the test, return undefined


function findElement(arr, func) {
  return arr.find(func)
}

// using for loop
function findElement2(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

// using map()
function findElement3(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

// using recursion
function findElement4(arr, func) {
  return arr.length && !func(arr[0]) 
    ? findElement(arr.slice(1), func)
    : arr[0];
}


findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })