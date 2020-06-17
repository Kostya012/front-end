// Создать следующие функции для строки 

//  1. reverse -> "hello".reverse()

let hello = "dod"

function reverse (str) {
  var arr = str.split("")
  arr.reverse()
  var str2 = arr.join("")
  console.log(str2)
}
reverse (hello)

//  2. isPolindrom -> "hello”.isPolindrom()

function isPalindrom (str) {
  let arr = str.split("")
  arr.reverse()
  let str2 = arr.join("")
  console.log(str2, str)
  let palindrom = (str2 === str)
  if (palindrom) {
    console.log(hello, " - Палиндромное слово")
  } else {
    console.log(hello, " - Не палиндромное слово")
  }
}
isPalindrom (hello)
//  3. map -> “hello".map(callback)