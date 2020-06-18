// Создать следующие функции для строки 

//  1. reverse -> "hello".reverse()

let hello1 = "hello"

function reverse (str) {
  var arr = str.split("")
  arr.reverse()
  var str2 = arr.join("")
  console.log(str2)
}
reverse (hello1)

//  2. isPolindrom -> "hello”.isPolindrom()

let hello = {
  isPalindrom: function isPalindrom (str) {
  let arr = str.split("")
  arr.reverse()
  let str2 = arr.join("")
  let palindrom = (str2 === str)
  if (palindrom) {
    console.log(hello, " - Палиндромное слово")
  } else {
    console.log(hello, " - Не палиндромное слово")
  }
  }
}
hello.isPalindrom(hello1)

//  3. map -> “hello".map(callback)

String.prototype.map = function (f) {
  let arr = this.split("");
  console.log(arr)
  var result = [];
  for (let item of this) {
       result.push(f(item))
  }
  return result.join("")
}

console.log(hello1.map(x => x + 2))
console.log("hello".map(x => x + 3))

// Реализовать собственные функции для массива 

// 1. Array.prototype.filter

function myFilter (arr, f) {
  var result = []
  for (let item of arr) if (f(item)) {
    result.push(item)
  }
  return result
}

console.log(myFilter([1,2,3], x => x % 2))

//  2. Array.prototype.reduce

function myReduce(array, reducerFn, initialValue) {
  let value = initialValue;

  for (let i = 0; i < array.length; i++) {
    const currentEl = array[i];
    console.log("currentEl", currentEl);
    value = reducerFn(value, currentEl, i, array);
  }

  return value;
}
// function myReduce (arr, f) {
//   var result = arr[0]
//   for (let i=1; i < arr.length; i++) () {
//     result += f(arr[i])
//   }
//   return result
// }

 console.log("myReduce", myReduce([1,2,3], x => x + 3, 1))

//  3. Array.prototype.map

function myMap (arr, f) {
  var result = []
  for (let item of arr) {
    result.push(f(item))
  }
  return result
}

console.log("map", myMap([1,2,3], x => x + 2))

//  4. Array.prototype.push

function myPush (arr, n) {
  arr[arr.length] = n
  return arr.length
}

console.log("push", myPush([1,2,3], 2))

//  5. Array.prototype.unshift

function myUnshift (arr, a, b, c, d) {
  
  for (let item of arr) {
    result.push(f(item))
  }
  return result
}

console.log("unshift", myUnshift([1,2,3], 1,2,3,4))
