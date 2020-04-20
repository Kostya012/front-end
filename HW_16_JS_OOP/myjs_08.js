//Home work 8 JS DOM: ДЗ
//Task 1 Таблица умножения
//Сделать таблицу умножения, используя DOM createElement и innerText. Создайте таблицу, вложенные строки и ячейки в циклах. Должно получится что-то вроде этого:
//Смотреть скрипт в HTML коде

//Task 2 Calc
//Сделайте ваш калькулятор из первых занятий используя DOM и элементы input (в т. ч. type="number" для чисел) Каждому полю ввода присвойте тот или иной id для обращения в обрабочтике события.
//Для запуска раcчета используйте, например <button id="calc"> и

//let val1 = Number(document.querySelector("#val1").value);
//let val2 = Number(document.querySelector("#val2").value);
//resultPlus = val1 + val2;
// let plus = 
// let minus = 
// let multip =
// let divis =

function fPlus() {
  var num1 = Number(document.querySelector("#val1").value);
  var num2 = Number(document.querySelector("#val2").value);
  var resultPlus = num1 + num2;
  let div = document.createElement('div');
  div.innerHTML = `<code>${num1} + ${num2} = ${resultPlus}</code>`;
  root.prepend(div);//значения снизу вверх
  //root.appendChild(div);//значения сверху вниз
  val3.value = resultPlus;
  result.innerHTML = resultPlus;
  alert(`${num1} + ${num2} = ${resultPlus}`);
}

//Calc Live

var num3 = Number(document.querySelector("#val1").value);
var num4 = Number(document.querySelector("#val2").value);

function calc() {
  // let num3 = Number(document.querySelector("#val1").value);
  // let num4 = Number(document.querySelector("#val2").value);
  let resultPlus2 = num3 + num4;
  let div = document.createElement('div');
  div.innerHTML = `<code>${num3} + ${num4} = ${resultPlus2}</code>`;
  root2.appendChild(div);
  //result.value = (+input1.value) + (+input2.value)
}

input.oninput = function() {
  document.appendChild('root2').innerHTML = input.value;
};

val1.oninput = calc();
val2.oninput = calc();

/*
//Task 1 Анализ
//Проанализируйте свои предыдущие ДЗ на предмет повторяющихся действий и придумайте названия, параметры и возвращаемое значение для функций в этих случаях

//Предыдущее home work Task 3 с помощью =>
var cube = x => x ** 3; //один параметр, скобки не нужны
alert(cube(Number(prompt("Введите число для возведения в куб", 0))));

//Task 2 sort
//Сделайте обобщенную функцию сортировки массива
//Функция позволяет отсортировать любой набор данных по имени поля (второй параметр). Третьим параметром идет необязательный Boolean, который в случае true делает сортировку по возрастанию, в случае false - по убыванию. По умолчанию (без третьего параметра) происходит сортировка по возрастанию.

var persons = [
  {name: "Иван", age: 17},
  {name: "Мария", age: 35},
  {name: "Алексей", age: 73},
  {name: "Яков", age: 12},
]
let sortName = confirm("Сортировать по возрастанию?");//true or false

console.log(persons.sort(function onAge(a,b) {
  if (a.age > b.age) {
    return 1;
  }
  return -1;
}));

// sort(persons, "age"); //сортирует по возрасту по возрастанию
// sort(persons, "name", false); //сортирует по имени по убыванию

console.log(persons.sort(function onName(a, b) {
  //по возрастанию
  if ((a.name > b.name) && (sortName === true)) {
    return 1;
  }
  else if ((a.name < b.name) && (sortName === true)) {
    return -1;
  }
  //по убыванию
  else if ((a.name < b.name) && (sortName === false)) {
    return 1;
  }
  else if ((a.name > b.name) && (sortName === false)) {
    return -1;
  }
  // a должно быть равным b
  return 0;
}));

//Task 3 array map
//Используя Array.map приведите все строки в массиве к числу. Элементы других типов оставьте как есть:
let mas1 = ["1", {}, null, undefined, "500", 700];
let mas2 = mas1.map(function typeChange(a) {
  if (typeof a === "string") {
    return Number(a);
  }
  return a;
});
console.log(mas2)

//Task 4 array reduce
//Получите произведение всех чисел в массиве, используя Array.reduce. Не обрабатывайте типы данных, не являющиеся числом.
//результат должен быть 15

let mas3 = ["0", 5, 3, "string", null];

function compositionOnlyNumber(a) {
  var result = 1;
  for (let item of a) {
    if (typeof item === "number") {
      result *= item;
    };
  };
  return result
};
console.log(compositionOnlyNumber(mas3))

//Task 5 object filter
//Напишите свою реализацию Array.filter для объектов:

var phone = {
  brand: "meizu",
  model: "m2",
  ram: 2,
  color: "black",
};

var {brand, model, ...rest} = phone;
console.log(rest);

//Task 6 object map
//Напишите свою реализацию Array.map для объектов:
// map({name: "Иван", age: 17},function(key,value){
//     var result = {};
//     result[key+"_"] = value + "$";
//     return result;
// }) //должен вернуть {name_: "Иван$", age_: "17$"}

let defaultPerson = {
  name: "Иван",
  age: 17,
}

function myMap(a) {
  var result = {};
  for (let key in a) {
    result[key + "_"] = a[key] + "$";
  };
  return result;
}

console.log(myMap(defaultPerson));

//Task 7 Рекурсия
//Sum
//Напишите функцию, который будет считать сумму арифметической прогрессии рекурсивно.

function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x + pow(x, n - 1);
  };
}

console.log(pow(2, 3)); // 6
*/