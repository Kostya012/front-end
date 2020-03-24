// task 1
console.log('My first debug')

// task 2
let age = 3
let petName = 'Nika'

console.log('Возраст собаки "', petName, '" составляет: ', age, ' года')

// task 3
age = 5

console.log('Возраст собаки "', petName, '" уже составляет: ', age, ' лет')

// task 4
let number = 1
let int = 512.28378
let text = 'text'
let bool = true
let obj = {
  age: 3,
  petName: 'Nika'
}
let x
let y = null //typeof покажет object, а должно быть null, это bag JS
let z = undefined
let mas = [1, 2, 3, 4, 5]

console.log(typeof number, typeof int, typeof text, typeof bool, typeof obj, typeof x, typeof y, typeof z, typeof mas)

// task 5
const student = {
  name: "{Ваше имя}",
  surname: "{Ваша фамилия}",
  isActive: true
}

console.log(typeof student.isActive)

// task 6
let fruits = ['Apple', 'Lemon', 'Orange', "Banana", 'Mango']
let num = [1, 2, 3, 4, 5]
let students = [{
  name: "Вася",
  surname: "Васильков",
  isActive: true,
  age: 17
}, {
  name: "Петя",
  surname: "Петров",
  isActive: true,
  age: 18
}, {
  name: "Иван",
  surname: "Иванов",
  isActive: false,
  age: 19
}, {
  name: "Николай",
  surname: "Никифор",
  isActive: true,
  age: 20
}, {
  name: "Мария",
  surname: "Марта",
  isActive: true,
  age: 21
}]

console.log(fruits)
console.log(num)
console.log(students)

// task with *
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('первый элемент:', numbers[0], 'последний элемент:', numbers[9])

console.log('студент:', student.name, student.surname, ', сейчас активен:', student.isActive)

// Additional task

let yourName = prompt('Введите Ваше имя:', 'Name')
let yourTwoName = prompt('Введите Вашу фамилию:', 'Two Name')
let yourAge = prompt('Введите Ваш возраст:', 0)
//yourName, yourTwoName, yourAge -> all String
let yourAgePlus = parseInt(yourAge) + 5
//yourAge -> translate from String to Number
alert(`Ваше имя: ${yourName}, Ваша фамилия: ${yourTwoName}, Ваш возраст: ${yourAgePlus}`)

//console.log(typeof yourAge, typeof yourAgePlus) String Number