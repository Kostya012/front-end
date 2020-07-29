// Задание 1
// Напиши функцию глубокого копирования объектов и массивов. Она должна делать не только копию переданного объекта/массива, но и копии вложенных них объектов/массивов. Также, копироваться должны объекты встроенного в JS конструктора Date

const a = { x: 1, y: 2, z: [1, 2, 3], u: undefined, v: null, w: new Date(2014, 1, 1, 12, 0, 0) };

const b = deepCopy(a); // b — это отдельный объект

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

b.x = 10;
console.log(a.x); // 1
// a.z и b.z указывают на разные массивы:
b.z.push(4);
console.log(a.z); // [1, 2, 3]
// console.log(b);
// a.w и b.w независимы друг от друга
b.w = new Date().setFullYear(2015);

console.log(a.w.getFullYear()); // 2014

// Задание 2
// Напиши функцию, считающую число свойств в объекте:

const a2 = { a: 1, b: 2 };
console.log(getCount1(a2)); // 2
const b2 = function () {};
console.log(getCount1(b2)); // 0
const c = [1, 2, 3];
console.log(getCount1(c)); // 3
const d = [];
d[100] = 1;
console.log(getCount1(d)); // 1

function getCount1(obj) {
  let i = 0;
  for (key in obj) {
    i++;
  };
  return i
}

// дополнительно Добавить не обязательный параметр options который может иметь следующие
// ключи skipNull - true/flase skipUndefined - true/flase
const a3 = { a: 1, b: 2, c: null };
console.log(getCount(a3)); // 3
console.log(getCount(a3, {skipNull: true})); // 2
const b3 = { a: 1, b: 2, c: undefined };
console.log(getCount(b3)); // 3
console.log(getCount(b3, {skipUndefined: true})); // 2
const c2 = { a: 1, b: 2, c: undefined, d: null };
console.log(getCount(c2)); // 4
console.log(getCount(c2,{skipUndefined:true})); // 3
console.log(getCount(c2,{skipNull:true})); // 3
console.log(getCount(c2,{skipUndefined:true, skipNull:true })); // 2
const d2 = [undefined,null]
console.log(getCount(d2)); // 2
console.log(getCount(d2,{skipNull:true})); // 1
console.log(getCount(d2,{skipUndefined:true})); // 1
console.log(getCount(d2,{skipUndefined:true, skipNull:true })); // 0

function getCount(obj, optionsObj) {
  let optionsValNull = false;
  let optionsValUndef = false;
  if (typeof optionsObj === 'object') {
    var options = optionsObj;
    for (key in options) {
      if (key === "skipNull") {
        optionsValNull = options.skipNull.valueOf();
      } else if (key === "skipUndefined") {
        optionsValUndef = options.skipUndefined.valueOf();
      }
    };
  };
  
  let i = 0;
  for (key in obj) {
    if ((obj[key] === null) && (optionsValNull)) {
      // break;
    } else if ((obj[key] === undefined) && (optionsValUndef)) {
      // break;
    } else {
      i++;
    }
  };
  return i
}

// Задание 3
// напиши функцию pluck, которая берет массив объектов и возвращает массив значений определенного поля:

const characters = [
{ 'name': 'barney', 'age': 36 },
{ 'name': 'fred', 'age': 40 }
];

console.log(pluck(characters, 'name')); // ['barney', 'fred']

function pluck (arr, param) {
  let newArr = [];
  let property = param;
  for (let i = 0; i < arr.length; i++) {
    for (key in arr[i]) {
      if (property === key) {
        newArr.push(arr[i][key])
      }
    }
  };
  if (newArr.length === 0) {
    return `свойство: ${property} нету в массиве characters`;
  } else {
    return newArr;
  };
}

// Task 3

let forms = document.getElementById('form');
let limits = document.getElementById('limit');
let categories = document.getElementById('categories');
let app = document.getElementById('app');

console.log('limit :>> ', limits.value);
console.log('categories :>> ', categories.value);

let limit = limits.value;
let category = categories.value;

forms.addEventListener('change', change);

function change() {
  let limit = limits.value;
  let category = categories.value;
  console.log('limit :>> ', limit);
  console.log('categories :>> ', category);
}

fetch(`https://www.reddit.com/r/${category}.json?limit=${limit}&dist=${limit}`)
      .then(resp => resp.json()) // этап начала соединения
      .then(rates => { // файл скачан и преобразован из JSON в объект
        console.log(rates);
        // app.innerHTML(rates)
        for (let [name, rate] of Object.entries(rates.rates)) {
          let option = document.createElement('option')
          option.value = rate
          option.innerText = name
          currency.appendChild(option)
        }
        currency.onchange = amount.oninput = function () {
          buy.innerText = +amount.value * +currency.value
          sale.innerText = +amount.value / +currency.value
        }
      })
      .catch (err => console.log("err", err)); //ловит ошибки во всех then

// 