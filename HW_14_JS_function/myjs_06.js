//Home work 6 JS Function

//Task 1 Анализ
//Проанализируйте свои предыдущие ДЗ на предмет повторяющихся действий и придумайте названия, параметры и возвращаемое значение для функций в этих случаях

// в задании № 3 fields check
//Проверьте наличие необязательных полей у каждого из этих массивов. Если поле найдено, выведите его с помощью alert. Проверку делайте по typeof или in в if.
// я применил функцию так как код гораздо меньше, а так без функции в 3 раза код больше был бы.

//Task 2 a
//Напишите функцию a, которая просто является коротким именем для alert. Смотрите пример с d(), которая является коротким именем для debugger из материала лекции

function a()
{
  alert("Привет!");
}
a();

//Task 3 cube
//Напишите функцию cube, которая возвращает число в третьей степени:
let b = Number(prompt("Введите число для возведения в куб", 0))
let c = Number
function cube(b)
{
  c = b ** 3;
}
cube(b);
alert(`${b} в кубе = ${c}`);

//Task 4 avg2
//Напишите функцию avg2, которая рассчитывает среднюю для двух чисел:
//формула для подсчета среднего: (a + b) / 2

let d = Number(prompt("Введите первое число", 0));
let e = Number(prompt("Введите второе число", 0));
let f = Number
function avg2(a,b)
{
  f = (a + b) / 2;
}
avg2(d,e);
alert(`${d} и ${e} средннее число = ${f}`);

//Task 5 sum3
//Напишите функцию sum3 для суммирования 3 чисел:
//Обратите внимание, что sum3 от двух параметров тоже работает корректно.

let g = Number(prompt("Введите первое число", 0));
let h = Number(prompt("Введите второе число", 0));
let i = Number(prompt("Введите третье число", 0));
let j = Number;
function sum3(a,b,c)
{
  j = a + b + c;
}
sum3(g,h,i);
alert(`${g} + ${h} + ${i} = ${j}`);

//Task 6 intRandom
//Напишите функцию intRandom, которая принимает два параметра: нижнюю и верхнюю границу, и возвращает целое случайное число из этого диапазона включительно:
//Обратите внимание, что если передан один параметр (intRandom(10) в примере выше), то функция работает как будто первый параметр равен 0, а переданный параметр становится вторым параметром (intRandom(0,10))
//Используйте умножение для расширения значения встроенной функции Math.random c диапозона 1, сложениe для смещения результата на первый параметр, и Math.round для округления результата

let k = parseInt(prompt("Введите число нижнюю границу для random", 0));
let l = parseInt(prompt("Введите число верхнюю границу для random", 0));

function intRandom(a,b)
{
  if (b <= a) {
    return Math.floor(Math.random() * Math.floor(a + 1));
  } else {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  };
}

alert(`В диапазоне чисел между ${k} и ${l} случайное число: ${intRandom(k,l)}`);

//Task 7 greetAll
//Сделайтей функцию, которая приветствует всех, кто передан в качестве параметров.
//Вам поможет arguments и for

let m = [];

do {
  m.push(prompt("Введите имя, кого будем поздравлять:", "")); //ввод в массив список кого поздравлять.
  if (m[m.length -1] != null) {
    add(m[m.length -1]);
  };
} while (m[m.length -1] != null) //Пока значение массива не станет равен null...
m.pop();//удаляет последнее значение массива null

function add(a)
{
  //console.log(arguments);
  //console.log(`Поздравляем Вас ${arguments}!!!`);
  console.log(`Поздравляем Вас ${a}!!!`);// тоже самое, что и предыдущий код
}

//Task 8 sum
//Напишите функцию sum, которая сумирует любое количество параметров: Используйте псевдомассив arguments для получения всех параметров, и for для итерирования по нему

let mass = [];
let sum1 = 0; //Сумма всех введённых чисел

do {
  mass.push(prompt("Введите числа для суммирования:", "")); //ввод в массив числа для суммирования.
  console.log(mass);
} while (mass[mass.length -1] != null) //Пока значение массива не станет равен null...
mass.pop();//удаляет последнее значение массива null

if (mass.length === 0) {
  console.log("Вы не ввели число!");
} else {
  for (let i = 0; i < mass.length; i++) {
    sum1 += Number(mass[i]);
    if (i === (mass.length - 1)) {
      console.log("Сумма введённых всех чисел =", sum1);
    };
  };
}

function sum(a)
{
  //console.log(a);
  //return sum1 += a;
  //console.log(sum1);
}

//Task 9 Union
//Всё предыдущие функции и примеры с ними объедините в функции, которые вызывайте в switch по имени задания:

let nameFunction = prompt('Введите название функции для её запуска с помощью switch:', "name");

switch (nameFunction) {
  case "a":
    a();
    break;
  case "cube":
    cube(b);
    break;
  case "avg2":
    avg2(d,e);
    break;
  case "sum3":
    sum3(g,h,i);
    break;
  case "intRandom":
    intRandom(k,l)
    break;
  case "add":
    add(m[m.length -1]);
    break;
  case "sum":
    sum(a)
    break;
  default:
    alert('Не правильно введено имя функции!');
}

//Task 10 Union declarative
//Используйте ассоциативный массив вместо switch//тоесть объект

var asMas = new Object();
asMas.a = "a()";
asMas["cube"] = "cube(b)";
let forAsMas = "avg2";
asMas[forAsMas] = "avg2(d,e)";
asMas.sum3 = "sum3(g,h,i)";
asMas["intRandom"] = "intRandom(k,l)";
asMas.add = "add(m[m.length -1])";
asMas["sum"] = "sum(a)";

let keyAsMas = prompt("Введите название функции для её запуска с помощью объекта:", "name");

for (let key in asMas) {
  if ('a' in asMas) {
    a();
    break;
  } else if ('cube' in asMas) {
    cube(b);
    break;
  } else if ('avg2' in asMas) {
    avg2(d,e);
    break;
  } else if ('sum3' in asMas) {
    sum3(g,h,i);
    break;
  } else if ('intRandom' in asMas) {
    intRandom(k,l);
    break;
  } else if ('add' in asMas) {
    add(m[m.length -1]);
    break;
  } else if ('sum' in asMas) {
    sum(a);
    break;
  } else {
    alert('Не правильно введено имя функции!');
  };
}