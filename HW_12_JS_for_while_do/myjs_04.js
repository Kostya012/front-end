//Home work 4 JS
//Task 1 Сделайте декларативную JSON-структуру для html

let body = {
  tagName: "body",
  attrs: {},
  subTags: [
    {
      tagName: "div",
      attrs: {},
      subTags: [
        {
          tagName: "span",
          text: "Enter a data please:",
          attrs: {},
        },
        {
          tagName: "br",
          text: "\n",
        },
        {
          tagName: "input",
          attrs: {
            type: "text",
            id: "name",
          },
        },
        {
          tagName: "input",
          attrs: {
            type: "text",
            id: "surname",
          },
        },
      ]
    },
    {
      tagName: "div",
      attrs: {},
      subTags: [
        {
          tagName: "button",
          text: "OK",
          attrs: {
            id: "ok",
          },
        },
        {
          tagName: "button",
          text: "Cancel",
          attrs: {
            id: "cancel",
          },
        },
      ]
    }
  ]
}
console.log(body.subTags[1].subTags[1].text)// с помощью . 2й button Cancel
console.log(body["subTags"][1]["subTags"][1]["text"])// с помощью []  2й button Cancel

console.log(body.subTags[0].subTags[3].attrs.id)
console.log(body["subTags"][0]["subTags"][3]["attrs"]["id"])

//Task 2 Declarative fields

let notebook = {
  brand: prompt('Введите название бренда ноутбука:', "Brand name notebook"),
  type: prompt('Введите тип ноутбука:', "Notebook type"),
  model: prompt('Введите модель ноутбука:', "Notebook model"),
  ram: Number(prompt('Введите объём оперативы ноутбука:', 0,)),
  size: Number(prompt('Введите диагональ монитора ноутбука:', 0,)),
  weight: Number(prompt('Введите вес в кг ноутбука:', 0,)),
  resolution: {
      width: Number(prompt('Введите max разрешение по ширине монитора ноутбука:', 0,)),
      height: Number(prompt('Введите max разрешение по высоте монитора ноутбука:', 0,)),
  },
};

let phone = {
  brand: prompt('Введите название бренда телефона:', "Brand name phone"),
  model: prompt('Введите модель телефона:', "Phone model"),
  ram: Number(prompt('Введите объём оперативы телефона:', 0,)),
  color: prompt('Введите цвет телефона:', "Phone color"),
};

let person = {
  name: prompt('Введите своё имя:', "Name"),
  surname: prompt('Введите свою фамилию:', "Surname"),
  married: confirm("Вы замужем/женаты?"),//true or false
}
person.smartphone = prompt('Введите название бренда смартфона:', "Smartphone name")
person.laptop = prompt('Введите название бренда leptop:', "Laptop name")
//console.log(person)
notebook.owner = prompt('Введите имя владельца ноутбука:', "Name")
phone.owner = prompt('Введите имя владельца телефона:', "Name")
console.log(notebook)
console.log(phone)

//(person.smartphone.owner.laptop.owner.smartphone == person.smartphone) ? console.log("Равны") : console.log("НЕ Равны")// это не работает, так как в задании не звучало присоединять цикличные ссылки присвоением

//Task 3 imperative array fill 3
//Создайте пустой массив и добавьте в него три элемента, введенные пользователем (prompt), используя императивный подход (несколько операторов подряд)
let mas = []
mas[0] = prompt('Введите первое значение массива', "Any")
mas.push(prompt('Введите второе значение массива', "Any"))
mas[mas.length] = prompt('Введите третье значение массива', "Any")
console.log(mas)

//Task 4 while confirm
//делайте цикл с confirm, который продолжается по Отмена и заканчивается по ОК.
let ch = false
while (ch === false) {
  ch = confirm("Хотите продолжить?")
}

//Task 5 array fill
//Создайте пустой массив и добавляйте в него элементы, пока пользователь не нажмет Отмена в очередном prompt. Используйте push для удобства: push
let mass = []

do {
  mass.push(prompt('Введите массив:', '')); //ввод массив
} while (mass[mass.length -1] != null) //Пока значение массива не станет равен null...
  mass.pop()//удаляет последнее значение массива null
  // console.log(mass)

//Task 6 array fill nopush
//Сделайте предыдущее задание, не используя push, а обращаясь к элементам по индексу.
let mass2 = []

do {
  mass2[mass2.length] = prompt('Введите массив:', ''); //ввод массив
  // console.log(mass2) // вот тут видно, пошагово значения
} while (mass2[mass2.length -1] != null) //Пока значение массива не станет равен null...
console.log(mass2) // вот тут видно, что при отмене, значение становится null
  mass2.pop()//удаляет последнее значение массива null
  // console.log(mass)

//Task 7 infinite probability
//Создайте бесконечный цикл, который прерывается с помощью конструкции break, когда Math.random() > 0.9. Код должен подсчитывать количество итераций и вывести это число с помощью alert.
let a = Number//случайное число
let i = 0//счётчик

//можно вот так, так короче код:
// do {
//   i += 1;
//   a = Math.random(); //random 0 - 1
//   console.log(i, a)
// } while (a <= 0.9)
// alert(`Колличество циклов: ${i} раз`)

do {
  i += 1;
  a = Math.random(); //random 0 - 1
//  console.log(i, a)
  if (a > 0.9) {
    break;
  }
} while (a <= 0.9)
alert(`Колличество циклов: ${i} раз`)

//Task 8 empty loop

let b = String;

do {
  b = prompt('Ок-прервать, Отмена-продолжить:', ''); //ввод массив
//  console.log(b, typeof(b));
} while (b === null) //Пока значение массива не станет противное null...

//Task 9 progression sum
// Подсчитать сумму арифметической прогрессии от 1 до N c шагом 3 (1,4,7....) используя цикл for.

let n = Number(prompt('Введите N - конечное число для арифметической прогрессии (от 1 до N с шагом 3):', 0));
for (let i = 1,summa = 1; i <= n; i += 3, summa += i) {
  console.log("Для шага", i, "сумма арифметической прогрессии равна:", summa);
}

//Task 10 chess one line

let hash = Number(prompt('Введите количество # в строке от 1 и выше:', 1));
for (let i = 1,j = " #"; i <= hash; i++, j += " #") {
  // console.log(i, j)
  if (i === hash) {
    console.log(`Строка сформирована: "${j} "`);
  };
}

//Task 11 numbers
//Сформировать строку c помощью вложенных циклов. Для перевода строки используйте \n.

let str = Number(prompt('Введите количество строк, которые будут содержать числа от 1 до 9:', 1));
for (let i = 0,j = ""; i < str; i++) {
  for (let i2 = 0; i2 < 10; i2++) {
    j += String(i2);
    // console.log(i, j)
    if (i2 === 9 && i < (str - 1)) {
      j += "\n"
      //console.log("Строка сформирована:\n",'"',j,'"');
    };
  };
  console.log(`Строка сформирована:\n${j}`);
}

//Task 12 Chess
//Сформируйте строку с шахматной доской из вложенных циклов. Для перевода строки используйте \n. Код должен поддерживать легкое изменение размеров доски.

let str1 = Number(prompt('Введите количество строк, для шахмотной доски от 1 и выше:', 1));
let col1 = Number(prompt('Введите количество столбцов, для шахмотной доски от 1 и выше:', 1));
for (let i = 0,g = ""; i < str1; i++) {
  for (let j = 0; j < col1; j++) {
    (i % 2 === 0) ? (g += ".#") : (g += "#.");
    // console.log(i, g)
    if ((j === (col1 - 1)) && (i < (str1 - 1))) {
      g += "\n"
      //console.log("Строка сформирована:\n",'"',g,'"');
    };
  };
  console.log(`Строка сформирована:\n${g}`);
}

//Task 13 cubes
//Сформируйте массив из N элементов, содержащий в себе кубы индексов, т. е:

let mass3 = []
let lengM = Number(prompt('Введите длину массива от 1 и выше:', 1));

for (let i = 0; i < lengM; i++) {
  mass3[i] = i ** 3;
}
console.log(mass3)

//Task 14 multiply table
//C помощью вложенного цикла сформируйте массив массивов "таблица умножения". Для инициализации вложенных массивов используйте

let mass4 = []
let oneN = Number(prompt('Проверка таблицы умножения! Введите первое число от 0 и выше:', 0));
let twoN = Number(prompt('Введите второе число от 0 и выше:', 0));
for (let i = 0; i <= oneN; i++) {
  mass4 [i] = [];
  for (let j = 0; j <= twoN; j++) {
    mass4[i][j] = i * j;
    if (i === oneN && j === twoN) {
      console.log(`Число ${oneN} * ${twoN} = ${mass4[i][j]}`)
    }
  };
}

//Task 15 таблица умножения в html

let mass5 = []
let oneNu = Number(prompt('Проверка таблицы умножения! Введите первое число от 0 и выше:', 0));
let tbody1 = "<table><tbody>"
let tbody2 = "</tbody></table>"
let tr1 = "<tr>"//строка
let tr2 = "</tr>"
// let th1 = "<th>"
// let th2 = "</th>"
let td1 = "<td>"//ячейка
let td2 = "</td>"
let twoNu = Number(prompt('Введите второе число от 0 и выше:', 0));

for (let i = 0; i <= oneNu; i++) {
  mass5 [i] = [];
  tbody1 += tr1
  for (let j = 0; j <= twoNu; j++) {
    mass5[i][j] = i * j;
    tbody1 += td1 + mass5[i][j] + td2
    if (j === twoNu) {
      tbody1 += tr2
    } if (i === oneNu && j === twoNu) {
      console.log(`Число ${oneNu} * ${twoNu} = ${mass5[i][j]}`);
      tbody1 += tbody2;
      console.log(tbody1)
    }
  };
}
root.innerHTML = tbody1
//document.writeln(tbody1)// чёт не работает(перезаписует весь код html)!!!!
// document.write(tbody1)// чёт не работает так тоже(перезаписует весь код html)!!!!


//Task 16 Задание на синий пояс: Треугольник
//Сформировать следующую строку - треугольник:

let hash2 = "#"
let tab = "."
let oneNum = Number(prompt('Введите высоту ёлки из # кол-во строк от 0:', 1));

for (let i = 1,it2 = oneNum,i2 = 1,j = ""; i <= oneNum; i++, it2--, i2 += 2) {
  for (let it = 1; it < it2; it++) {
    j += tab;
  };
  for (let ih = 0; ih < i2; ih++) {
    j += hash2;
  };
  for (let it = 1; it < it2; it++) {
    j += tab;
  };
  j += "\n"
  if (i === oneNum) {
    console.log(`Строка сформирована:\n${j}`);
  };
}