
const app = document.getElementById("app");

const file = document.getElementById("file");
// const btn = document.getElementById("btn");

// создаем контейнер для списка
const list = document.createElement("ul");

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var fileTypes = [
  'image/jpeg',
  'image/pjpeg',
  'image/png'
]

function fakeUploadFile(file, ms) {
  for(let i = 0; i < fileTypes.length; i++) {
    if(file.type === fileTypes[i]) {
      return new Promise(resolve => {
        setTimeout(function() {
          resolve(file);
        }, ms);
      });
    };
  };
  return false;
}


file.addEventListener("change", async event => {
  const files = event.target.files;
  let numberOfFiles = 0; // счётчик ко-во файлов
  for (let file of files) {
    numberOfFiles++
    // создаем элемент для списка
    const item = document.createElement("li");
    // item.innerText = "Loading";
    item.innerHTML = `<img src="img/tribe-loading.gif" alt="Please wait">`;
    const ms = randomInteger(600, 1200);
    list.appendChild(item);

    const attribute = file.type;
    console.log('attribute :>> ', attribute);
    const uploadedFile = await fakeUploadFile(file, ms);
    // добавляем элемент в спискок через условие
    if (uploadedFile === false) {
      item.innerHTML = `ОШИБКА! Данный файл: "<span>${file.name}</span>" не изображение формата: .jpeg .pjpeg .png!`;
      item.style.color = "red";
      numberOfFiles--
    } else {
      item.innerText = uploadedFile.name;
    }
    console.log('typeof(uploadedFile) :>> ', typeof(uploadedFile));
  }
  Promise.all([fakeUploadFile(file, 2000), fakeUploadFile(file, 3000)]).then(function() {
    console.log(numberOfFiles);
    const item = document.createElement("li");
    item.innerText = `Загружено файлов без ошибок: ${numberOfFiles}`;
    list.appendChild(item);
  });

})
// добавляем список в контейнер
app.appendChild(list);

// Games click

var start = document.querySelector('#start')
var btnClick = document.querySelector('#btnClick')
var resultHeader = document.querySelector('#result-header')
var time = document.querySelector('#time')

start.value = `Click me ${10} times`;

var score = 0;
var isGameStarted = false; // чтобы остановить игру в конце
var clickCount = 0;

start.addEventListener("click", raceButton)

function raceButton() {
  start.className = "hide";
  btnClick.className = "show";
  btnClick.value = `You clicked me ${clickCount} times`;
  var interval = setInterval(function() {
    var time2 = parseFloat(time.textContent) // time.textContent - cтроковое значение надо распарсить в Float
    if (time <= 0) {
      clearInterval(interval)
       // endGame()
    } else {
      time.textContent = (time - 0.1).toFixed(1)
    }
    //console.log('interval', time.textContent)
  }, 100);
  var p1 = new Promise(function(resolve) {
    setTimeout(function() {
      resultHeader.innerText = `Ксожалению Вы проиграли, Ваш результат: ${clickCount} кликов`
      // resultHeader.className = "show";
      setTimeout(function() {
        start.className = "show";
        resultHeader.className = "hide";
      }, 5000);
      clickCount = 0;
      resolve()
    }, 4000);
  })
  .then(function() {
    return {
      name: 'Promise 4000'
    };
  });
  btnClick.addEventListener("click", raceButton2);
};

function endGame() {
  isGameStarted = false
  start.classList.remove('hide')
};

function raceButton2() {
  clickCount++;
  btnClick.value = `You clicked me ${clickCount} times`;
  console.log('clickCount', clickCount);
  var p2 = new Promise(function(resolve) {
    if (clickCount === 10) {
      resultHeader.innerText = `Ваш результат: ${clickCount} кликов, Вы выиграли!`;
      resultHeader.className = "show";
      btnClick.className = "hide";
      setTimeout(function() {
        start.className = "show";
        resultHeader.className = "hide";
      }, 5000);
      clickCount = 0;
      resolve();
    }
  });
}
Promise.race([p1, p2]).then(function(data) {
  console.log('Race', data)
})