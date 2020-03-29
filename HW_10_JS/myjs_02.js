// Additional task

// let yourName = prompt('Введите Ваше имя:', 'Name')
// let yourTwoName = prompt('Введите Вашу фамилию:', 'Two Name')
// let yourAge = prompt('Введите Ваш возраст:', 0)
// //yourName, yourTwoName, yourAge -> all String
// let yourAgePlus = parseInt(yourAge) + 5
// //yourAge -> translate from String to Number
// alert(`Ваше имя: ${yourName}, Ваша фамилия: ${yourTwoName}, Ваш возраст: ${yourAgePlus}`)

//console.log(typeof yourAge, typeof yourAgePlus) String Number

//Home work 2 JS
//Task 1

console.log(1 == 2) //false
console.log(1 != 2) //true
console.log(1 == 1) //true
console.log(1 != 1) //false
console.log("text" == 5) //false
console.log("text" != 5) //true
console.log("text" == "Text") //false
console.log("text" == "text") //true
console.log(true == "true") //false
console.log(true == false) //false
console.log(false == 0) //true
console.log(false === 0) //false
console.log("" == false) //true
console.log("" !== false) //true
console.log(undefined === null) //false
console.log(undefined == null) //true
console.log(17 === true) //false
console.log("17" === true) //false
console.log({} === {}) //false

//Task 2
let numb = prompt('Введите число:', '0')
console.log(numb % 2 === 0)//чётные

//Task 3
let numbNotCh = prompt('Введите число:', '0')
console.log(numbNotCh % 2 !== 0)//не чётные

//Task 4
let nu1 = 5
nu1 += 2//add nu +2
console.log(nu1)

let nu2 = 5
nu2 *= 2//add nu *2
console.log(nu2)

let nu3 = 5
nu3 -= 2//add nu -2
console.log(nu3)

//Task5
let a = "100"

let b = parseInt(a)
let c = +a
let d = Number(a)//Лучше этот оператор использовать
let e = a / "4"
console.log(typeof b, typeof c, typeof d, typeof e)

//Task 6
let rand1 = 1
let rand2 = 2

let way1 = (rand1 + rand2) * (rand1 - rand2)//-3
let way2 = rand1 ** 2 - rand2 ** 2//-3
console.log(way1, way2)

//Task with * 1
let yourNu1 = prompt('Введите число 1 из 3:', 0)
let yourNu2 = prompt('Введите число 2 из 3:', 0)
let yourNu3 = prompt('Введите число 3 из 3:', 0)

let res1 = Number(yourNu1) + 10
let res2 = Number(yourNu2) + 10
let res3 = Number(yourNu3) + 10
let sum = res1 + res2 + res3
//yourAge -> translate from String to Number
alert(`Ваше первое число +10: ${res1}, Ваше второе число +10: ${res2}, Ваше третье число +10: ${res3} их сумма = ${sum}`)

//Task with * 2
let yourNumb1 = prompt('Введите одну сторону треугольника:', 0)
let yourNumb2 = prompt('Введите вторую сторону треугольника:', 0)
let yourNumb3 = prompt('Введите вторую сторону треугольника:', 0)

let re1 = Number(yourNumb1) + Number(yourNumb2) > Number(yourNumb3)
let re2 = Number(yourNumb2) + Number(yourNumb3) > Number(yourNumb1)
let re3 = Number(yourNumb3) + Number(yourNumb1) > Number(yourNumb2)
console.log("Треугольник:", re1 === re2 === re3)
//Task with * 3
let numA = 3
let numB = 2
let way3 = (numA + numB) ** 3
let way4 = numA ** 3 + 3 * numA ** 2 * numB + 3 * numA * numB ** 2 + numB ** 3
console.log(way3, way4)