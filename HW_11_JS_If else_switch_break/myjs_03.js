//Home work 3 JS
//Task 1 Проверка числа больше 10 или нет
const num = Number(prompt('Введите число:', 0))

if (num > 10) {
  alert(`Ваше число ${num}, больше 10`)
} else if (num < 10) {
  alert(`Ваше число ${num}, меньше 10`)
} else if (num === 10) {
  alert("Вы ввели число 10")
} else {
  alert("Вы ввели не число!")
}

//Task 2 Проверка совершеннолетия
const age = Number(prompt('Введите Ваш возраст:', 0))

age !== age ? alert("Вы ввели не число!") : ((age >= 18 && age <= 150) ? alert("Вы совершеннолетний!") : (age > 150 ? alert("Вы совершеннолетний долгожитель!") : (age < 0 ? alert("Число должно быть положительным, а не отрицательным!") : alert("Вы НЕ совершеннолетний!"))))

if (age !== age) {
  console.log("Вы ввели не число!")
} else if (age >= 18 && age <= 150) {
  console.log("Вы совершеннолетний!")
} else if (age > 150) {
  console.log("Вы совершеннолетний долгожитель!")
} else if (age < 0) {
  console.log("Число должно быть положительным, а не отрицательным!")
} else {
  console.log("Вы НЕ совершеннолетний!")
}

//Task 3 Сравнение 3х чисел
const num1 = Number(prompt('Введите число 1 из 3:', 0))
const num2 = Number(prompt('Введите число 2 из 3:', 0))
const num3 = Number(prompt('Введите число 3 из 3:', 0))

console.log(typeof(num1), typeof(num2), typeof(num3), num1)
if (num1 > num2 && num1 > num3) {
  alert(`Введённое первое число: ${num1}, больше остальных`)
} else if (num2 > num1 && num2 > num3) {
  alert(`Введённое второе число: ${num2}, больше остальных`)
} else if (num3 > num1 && num3 > num2) {
  alert(`Введённое третье число: ${num3}, больше остальных`)
} else if (num1 === num2 && num1 === num3) {
  alert(`Введённые числа: ${num1}, ${num2}, ${num3}, равны`)
} else if (num1 === num2 && num1 > num3) {
  alert(`Введённые числа первое: ${num1}, и второе: ${num2}, равны и больше третьего: ${num3}`)
} else if (num1 === num3 && num1 > num2) {
  alert(`Введённые числа первое: ${num1}, и третье: ${num3}, равны и больше второго: ${num2}`)
} else if (num2 === num3 && num2 > num1) {
  alert(`Введённые числа второе: ${num2}, и третье: ${num3}, равны и больше первого: ${num1}`)
} else {
  alert("Вы ввели не число")
}

//Task 4 Chek Login and Password
const login = prompt('Введите свой логин:', "Enter login")
let password = String

switch (login) {
  case "test":
    password = prompt('Введите свой пароль:', "Enter password");
    password === "password" ? alert('Поздравляем Вы ввели правильно логин и пароль!') : alert('Пароль не верен!');
    break;
  default:
    alert('Нет такого пользователя!');
}

//Task 5 Change Password
let passw = "password"
let pas = prompt('Введите старый пароль:', "Enter password")
let newPas = String
let newPas2 = String

switch (pas) {
  case passw:
    newPas = prompt('Введите новый пароль:', "Enter new password");
    if (newPas !== pas) {
      newPas2 = prompt('Повторите новый пароль ещё раз:', "Repeat new password")
      newPas2 === newPas ? (passw = newPas2, alert('Новый пароль сохранён!')) : alert('Пароли не совпадают!')
    } else {
      alert('Пароль совпадает со старым!')
    };
    break;
  default:
    alert('Пароль не верен!');
}

//Task 6 Change Money
let courseUsd = 28.1381// on 29.03.2020
let courseEur = 30.8633// on 29.03.2020
let valuta = prompt('Введите для конвертации валюту:', "usd or eur")
let input = String
let sum = Number

switch (valuta) {
  case "usd":
    input = Number(prompt('Введите количество денег в гривне для конвертации в доллары:', 0));
    input !== input ? alert("Вы ввели не число!") : (sum = input / courseUsd, alert(`По состоянию на 29.03.2020 ${input} грн., составляет: ${sum} долларов США`));
    break;
  case "eur":
    input = Number(prompt('Введите количество денег в гривне для конвертации в евро:', 0));
    input !== input ? alert("Вы ввели не число!") : (sum = input / courseEur, alert(`По состоянию на 29.03.2020 год, ${input} грн., составляет: ${sum} Евро`));
    break;
  default:
    alert('Не правильно введена валюта');
}

//Task with *
//Task 1 Проверка таблицы умножения
const numb1 = Number(prompt('Для проверки таблицы умножения введите два целых однозначных числа, число 1 из 2:', 0))
const numb2 = Number(prompt('Введите число 2 из 2:', 0))
const numb3 = Number(prompt('Введите правильный ответ:', 0))

const res = numb1 * numb2
// console.log(typeof(numb1), typeof(numb2), typeof(numb3), numb1, res)
switch (true) {
  case (res !== res || numb3 !== numb3)://это если в начале первых чисел вбит текст, вместо числа после преобразования в Number значение стало NaN
    alert("Вы ввели не число");
    break;
  case (res === numb3):
    alert("Вы ответили верно!");
    break;
  case (res !== numb3):
    alert(`Вы не верно ответили, правильный ответ: ${res}`)
    break;
  default:
    alert("Вы ввели не число");
}

//Task 2,3 Камень, ножницы, бумага
const player = Number(prompt('Введите число 1-камень, 2-ножницы, 3-бумага:', 0))
const bot = Math.floor(Math.random() * (3 - 1 + 1) + 1) // рандомное число от 1 - 3

let pla = String//добавление к выбору пользователя обозначение цифры
let bo = String//добавление к выбору кампа обозначение цифры

player === 1 ? pla = "камень" : (player === 2 ? pla = "ножницы" : pla = "бумага")
bot === 1 ? bo = "камень" : (bot === 2 ? bo = "ножницы" : bo = "бумага")
alert(`Компьютер выбрал: ${bot} - ${bo}`)
// console.log(player, bot)
player !== player ? alert("Вы ввели не число от 1 - 3!") : ((player >= 1 && player <= 3) ? (player === bot ? alert("Ничья!") : ((player === 1 && bot === 2) || (player === 2 && bot === 3) || (player === 3 && bot === 1)) ? alert(`Поздравляем! Вы выиграли компьютер! =) у вас: ${player} -${pla}, а у компьютера: ${bot} -${bo}`) : alert(`Вы выбрали: ${player} -${pla}, а компьютер выбрал: ${bot} -${bo}, к сожалению Вы проиграли =(`)) : alert("Вы ввели не в пределах число от 1 до 3!"))