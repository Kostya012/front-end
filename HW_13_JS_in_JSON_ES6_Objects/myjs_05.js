//Home work 5 JS Ассоциативные массивы

//Task 1 "3 persons"
//Сделать три ассоциативных массива a, b, c, в каждом из которых должны быть поля name и surname.
//1й способ:
var a = {
  name: "Ann",
  "surname": "Shvets",
}
//2й способ:
var b = new Object();
b.name = "Andriy";
b["surname"] = "Stan";

var c = {
  name: "Cat",
  "surname": "Quick",
}

//Task 2 different fields
//Добавьте некоторые другие поля (например age, fathername, sex (пол)) так, что бы набор полей отличался у разных объектов
a["age"] = 21;
b.fathername = "Ivanovich";
let forC = "sex";
c[forC] = "Female";
//console.log(a, b, c)

//Task 3 fields check
//Проверьте наличие необязательных полей у каждого из этих массивов. Если поле найдено, выведите его с помощью alert. Проверку делайте по typeof или in в if.

//1й способ (Этот способ не сработает, код ниже с таким же именем, он сработает)
//console.log('age' in a);
function search(a) {
  for (var key in a) {
    if ('age' in a) {
      console.log(`Поле "age" есть в объекте, с именем ${a.name}.`);
      alert(`Поле "age" есть в объекте, с именем ${a.name}.`);
      break;
    } else if ('fathername' in a) {
      console.log(`Поле "fathername" есть в объекте, с именем ${a.name}.`);
      alert(`Поле "fathername" есть в объекте, с именем ${a.name}.`);
      break;
    } else if ('sex' in a) {
      console.log(`Поле "sex" есть в объекте, с именем ${a.name}.`);
      alert(`Поле "sex" есть в объекте, с именем ${a.name}.`);
      break;
    } else {
      console.log(`нет полей "age", "fathername", "sex" в объектах.`);
    };
  }
}
search(a);
search(b);
search(c);

//2й способ ещё добавить такого кода 2 раза, всего 3 чтобы было и исправить 2му коду вместо а -> b переменную, для 3му вместо а -> c
// for (let key in a) {
//   if ('age' in a) {
//     console.log(`Поле "age" есть в объекте, с именем ${a.name}.`);
//   } else if ('fathername' in a) {
//     console.log(`Поле "fathername" есть в объекте, с именем ${a.name}.`);
//   } else if ('sex' in a) {
//     console.log(`Поле "sex" есть в объекте, с именем ${a.name}.`);
//   } else {
//     console.log(`нет полей "age", "fathername", "sex" в объектах.`);
//   };
// }

//3й способ с помощью typeof
// console.log(typeof a.age)//Number
// console.log(typeof b.age)//Undefined
// console.log(typeof c.age)//Undefined
function search(a) {
  if (typeof a.age === "number") {
    console.log(`Typeof Поле "age" есть в объекте, с именем ${a.name}.`);
    alert(`Typeof Поле "age" есть в объекте, с именем ${a.name}.`);
  } else if (typeof a.fathername === "string") {
    console.log(`Typeof Поле "fathername" есть в объекте, с именем ${a.name}.`);
    alert(`Typeof Поле "fathername" есть в объекте, с именем ${a.name}.`);
  } else if (typeof a.sex === "string") {
    console.log(`Typeof Поле "sex" есть в объекте, с именем ${a.name}.`);
    alert(`Typeof Поле "sex" есть в объекте, с именем ${a.name}.`);
  } else {
    console.log(`нет полей "age", "fathername", "sex" в объектах.`);
  }
}
search(a);
search(b);
search(c);

//Task 4 array of persons
//Добавьте несколько ассоциативных массивов с персонами в обычный массив persons, например a,b,c. Так же добавьте персону литерально ({...}). Получится обычный массив с элементами-ассоциативными массивами с персонами.

let persons = [];
persons.push(a, b, c);
persons[persons.length] = {
  name: "George",
  "surname": "Mag",
}
//console.log(persons);

//Task 5 loop of persons
//Сделайте цикл, который выводит весь массив persons в форме объектов console.log(persons[i])
for (let i = 0; i < persons.length; i++) {
  console.log(persons[i])
}

//Task 6 loop of name and surname
//Сделайте цикл, который выводит весь массив persons, но только Имя и Фамилию каждой персоны.

for (let i = 0; i < persons.length; i++) {
  for (let key in persons[i]) {
    if (('name' in persons[i]) && ('surname' in persons[i])) {
      console.log(`${persons[i].name} ${persons[i].surname}.`);
      break;
    } else {
      console.log(`нет полей "name" и "surname" в массиве.`);
    };
  };
}

//Task 7 loop of loop of values
//Сделайте цикл, который выводит весь массив persons, но только значения всех полей из объектов. Используйте вложенный цикл

for (let i = 0; i < persons.length; i++) {
  for (let value of Object.values(persons[i])) {
    console.log(value)
  };
}

//Task 8 fullName
//Сделайте цикл, которых добавляет поле fullName в каждый объект, содержащий ФИО. Учтите, что поле fathername не является обязательным.

for (let i = 0; i < persons.length; i++) {
  for (let key in persons[i]) {
    if (('name' in persons[i]) || ('surname' in persons[i]) || ('fathername' in persons[i])) {
      persons[i].fullName = persons[i].surname + " " + persons[i].name + " " + persons[i].fathername;
        // a["age"] = 21;
      console.log(`${persons[i].fullName}.`);
      break;
    };
  };
}

//Task 9 serialize
//Создайте JSON-строку из persons

let json = JSON.stringify(persons);
console.log(json);
//localStorage.setItem('session', JSON.stringify(persons));

//Task 10 deserialize
//Создайте ассоциативный массив с одной персоной из JSON-строки. Добавьте её в persons

let d = JSON.parse('{"name": "Uriy", "surname": "Valent", "fathername": "Nikolaevich"}');
console.log(d);
persons.push(d);
console.log(persons);

//Task 11 HTML
//Сделайте цикл, который выводит весь массив persons, в форме HTML-таблицы. Имя и Фамилия - колонки. Таблицы в HTML Пример кода:

let tbody1 = "<table><tbody>"
let tbody2 = "</tbody></table>"
let tr1 = "<tr>"//строка
let tr2 = "</tr>"
let th1 = "<th>Имя</th>"//Имя и Фамилия
let th2 = "<th>Фамилия</th>"
let td1 = "<td>"//ячейка
let td2 = "</td>"
let str = tbody1 + tr1 + th1 + th2 + tr2;

//console.log(str)

for (let i = 0; i < persons.length; i++) {
  str += tr1;
  for (let key in persons[i]) {
    if (('name' in persons[i]) && ('surname' in persons[i])) {
      str += td1 + `${persons[i].name}` + td2 + td1 + `${persons[i].surname}` + td2 + tr2;
      //console.log(`${persons[i].name} ${persons[i].surname}.`);
      break;
    } else if ((typeof persons[i].name === "undefined") && ('surname' in persons[i])) {
      str += td1 + `(пусто)` + td2 + td1 + `${persons[i].surname}` + td2 + tr2;
      break;
    } else if (('name' in persons[i]) && (typeof persons[i].surname === "undefined")) {
      str += td1 + `${persons[i].name}` + td2 + td1 + `(пусто)` + td2 + tr2;
      break;
    } else {
      str += td1 + `(пусто)` + td2 + td1 + `(пусто)` + td2 + tr2;
      //console.log(`нет полей "name" и "surname" в массиве.`);
    };
  };
  str += tr2;
}
str += tbody2
//console.log(str)
root.innerHTML = str

//Task 12 HTML optional fields
//Сделайте цикл, который выводит весь массив persons, в форме HTML-таблицы. Имя и Фамилия, а так же другие поля при наличии. Колонки: поля, строки таблицы - персоны.

let th3 = "<th>Отчество</th>"
let th4 = "<th>Полное имя</th>"
let th5 = "<th>Пол</th>"
let th6 = "<th>Возраст</th>"

let str1 = tbody1 + tr1 + th1 + th2 + th3 + th4 + th5 + th6 + tr2;

for (let i = 0; i < persons.length; i++) {
  str1 += tr1;
  for (let key in persons[i]) {
    str1 += td1 + `${persons[i].name}` + td2 + td1 + `${persons[i].surname}` + td2 + td1 + `${persons[i].fathername}` + td2 + td1 + `${persons[i].fullName}` + td2 + td1 + `${persons[i].sex}` + td2 + td1 + `${persons[i].age}` + td2;
    break;//это обязательно, continue не работает!
  };
  str1 += tr2;
}
str1 += tbody2
//console.log(str1)
root1.innerHTML = str1

//Task 13 HTML tr color
//Добавьте к предыдущему примеру раскраску через строчку используя другой стиль тэга tr.

let tr3 = '<tr class="backgr">'

let str2 = tbody1 + tr1 + th1 + th2 + tr2;

console.log(str2)

for (let i = 0; i < persons.length; i++) {
  if (i % 2 === 0) {
    str2 += tr3;
  } else {
    str2 += tr1;
  }
  for (let key in persons[i]) {
    if (('name' in persons[i]) && ('surname' in persons[i])) {
      str2 += td1 + `${persons[i].name}` + td2 + td1 + `${persons[i].surname}` + td2 + tr2;
      //console.log(`${persons[i].name} ${persons[i].surname}.`);
      break;
    } else if ((typeof persons[i].name === "undefined") && ('surname' in persons[i])) {
      str2 += td1 + `(пусто)` + td2 + td1 + `${persons[i].surname}` + td2 + tr2;
      break;
    } else if (('name' in persons[i]) && (typeof persons[i].surname === "undefined")) {
      str2 += td1 + `${persons[i].name}` + td2 + td1 + `(пусто)` + td2 + tr2;
      break;
    } else {
      str2 += td1 + `(пусто)` + td2 + td1 + `(пусто)` + td2 + tr2;
      //console.log(`нет полей "name" и "surname" в массиве.`);
    };
  };
  str2 += tr2;
}
str2 += tbody2
console.log(str2)
root2.innerHTML = str2