// Задание 1
// Напиши функцию глубокого копирования объектов и массивов. Она должна делать не только копию переданного объекта/массива, но и копии вложенных них объектов/массивов. Также, копироваться должны объекты встроенного в JS конструктора Date

const a = { x: 1, y: 2, z: [1, 2, 3], u: undefined, v: null, w: new Date(2014, 1, 1, 12, 0, 0) };

const b = deepCopy2(a); // b — это отдельный объект

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj)); // не полностью копирует, без ф-ций
}

function deepCopy2(obj) {
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj[key] instanceof Date) {
      newObj[key] = new Date(obj[key])
    }
    else if (typeof obj[key] === "object" && obj[key] !== null) {
      newObj[key] = deepCopy2(obj[key]);
    }
    else {
      newObj[key] = obj[key];
    }
  }
  return newObj
};

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
console.log(getCount(c2, {skipUndefined:true})); // 3
console.log(getCount(c2, {skipNull:true})); // 3
console.log(getCount(c2, {skipUndefined:true, skipNull:true })); // 2
const d2 = [undefined,null]
console.log(getCount(d2)); // 2
console.log(getCount(d2, {skipNull:true})); // 1
console.log(getCount(d2, {skipUndefined:true})); // 1
console.log(getCount(d2, {skipUndefined:true, skipNull:true })); // 0

function getCount(obj, optionsObj = {}) {
  let i = 0;
  for (key in obj) {
    if ((obj[key] === null) && (optionsObj.skipNull === true)) {
      // break;
    } else if ((obj[key] === undefined) && (optionsObj.skipUndefined === true)) {
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
let category = document.getElementById('category');
let app = document.getElementById('app');

console.log('limit :>> ', limits.value);
console.log('category :>> ', category.value);

// forms.addEventListener('change', change);

// function change() {
//   let limit = limits.value;
//   let category = categories.value;
//   console.log('limit :>> ', limit);
//   console.log('categories :>> ', category);
// }


// const el = document.getElementById("el");
// const form = document.getElementById("form");
// form.setAttribute("style", "padding: 5px; display:flex; justify-content: space-between; margin: 0 auto; width: 25%;");
const resaultConteiner = document.getElementById("resaultContainer");
const loader = document.getElementById("loader");
// loader.style.fontSize = "30px";
// loader.style.display = "none";
// const limit = document.getElementById("limit");
// const category = document.getElementById("category");
const pagin = document.getElementById("pagin");
pagin.setAttribute("style", "margin: 10px auto; display:flex; justify-content: space-around; width: 30%;");
const prev = document.getElementById("prev");
prev.setAttribute("style", "margin: 10px; font-size: 16px");
const next = document.getElementById("next");
next.setAttribute("style", "margin: 10px; font-size: 16px");

prev.style.display = "none";
next.style.display = "none";

var labelAfter = null;
var labelBefore = null;
var distCount = 0;
var count = 0;
var arrDistCount = []

async function getRedditData(limits = limit.value, after = null, before = null) {
  prev.style.display = "none";
  next.style.display = "none";
  resaultConteiner.innerHTML = "";
  loader.style.display = "block";
  let data = await fetch(`https://www.reddit.com/r/${category.value}.json?limit=${limits}&dist=${limits}&after=${after}&count=${count}&before=${before}&count=${count}`);
  console.log("data", data)
  let res = await data.json();
  console.log(res)
  // console.log("limits", limits)
  labelAfter = res.data.after;
  console.log("labelAfter", labelAfter)
  if (labelAfter === null) {
    next.disabled = true; //кнопка next show
  }

  labelBefore = res.data.before;

  // console.log("labelBefore", labelBefore)
  if (labelBefore === null) {
    prev.disabled = true; // кнопка prev show
  }
  
  distCount = res.data.dist;
  // console.log("distCount", distCount)
  for (let elemArr of res.data.children) {
    const {data} = elemArr; // объект data записуем в elemArr

    const divContainer = document.createElement("div");
    divContainer.setAttribute("style", "background: #F0FFFF; padding: 3px; display:flex; justify-content: space-between; align-items:center; margin: 5px auto; width: 95%;");

    const span = document.createElement("span");
    span.setAttribute("style", "padding: 5px; font-size: 18px; width: 15%;");
    span.innerHTML = `<i>Posted by</i><br><span style="word-break: break-all">${data.author}</span>`;
    divContainer.appendChild(span);

    const titleContainer = document.createElement("div");
    titleContainer.setAttribute("style", "padding: 5px; background: #F0FFFF; display:flex; justify-content: space-between; align-items:center; width: 85%;");
    const a = document.createElement("a");
    a.setAttribute("href",`${data.url}`);
    a.setAttribute("target","_blank");
    a.setAttribute("style", "text-decoration: none; font-size: 22px; display:flex; justify-content: flex-start; align-items:center; width: 86%");
    // chek avatar
    if (data.thumbnail.includes("https:")) {
      const image = document.createElement("img");
      image.setAttribute("src", data.thumbnail);
      image.setAttribute("style", "width: auto; height: 50px;");
      a.appendChild(image);
    }
    // title
    const title = document.createElement("span");
    title.setAttribute("style", "padding-left: 10px");
    title.innerText = `${data.title}`;
    a.appendChild(title);
    titleContainer.appendChild(a);
    // date create post
    const createScore = document.createElement("div");
    createScore.setAttribute("style", "background: #F0FFFF; display:flex; flex-direction: column;");
    const create = document.createElement("span");
    create.innerHTML = `Created: ${new Date(data.created*1000).toLocaleDateString()}`;
    createScore.appendChild(create);
    // score
    const score = document.createElement("span");
    score.innerHTML = `Score ${data.score}`;
    createScore.appendChild(score);
    // Количество коментов
    const comments = document.createElement("span");
    comments.innerHTML = `Comments: ${data.num_comments}`;
    createScore.appendChild(comments);
    titleContainer.appendChild(createScore);
    divContainer.appendChild(titleContainer);
    resaultConteiner.appendChild(divContainer);
  }

  loader.style.display = "none";
  prev.style.display = "block";
  next.style.display = "block";
}

// ?????????????????????????????? прикрепить и удалить событие что за событие? handler-обработчик

function attachEvent (event, handler, node) {
  node.addEventListener(event, handler);
  return () => {
    node.removeEventListener(event, handler);
  };
};

function getRedditDataForForm() {
  arrDistCount = [];
  count = 0;
  getRedditData();
}

// form что это??????????????????????????????????

attachEvent("change", getRedditDataForForm, form)

function paginationNext() {
  prev.disabled = false;
  arrDistCount.push(distCount)
  // console.log("arrDistCount", arrDistCount)
  count = arrDistCount.reduce((acc, curVal) => acc + curVal, 0);
  // console.log("countNext", count)
  getRedditData(limits = limit.value, labelAfter, before = null);
}
attachEvent("click", paginationNext, next)

function paginationPrev() {
  next.disabled = false;
  getRedditData(limits = arrDistCount[arrDistCount.length-1], after = null, labelBefore)
  arrDistCount = arrDistCount.slice(0, arrDistCount.length-1);
  count = arrDistCount.reduce((acc, curVal) => acc + curVal, 0);
  // console.log("countPrev", count);
  // console.log("arrDistCount", arrDistCount);
}

attachEvent("click", paginationPrev, prev)