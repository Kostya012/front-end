
const app = document.getElementById("app");

const file = document.getElementById("file");
// const btn = document.getElementById("btn");

// создаем контейнер для списка
const list = document.createElement("ul");

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// raceButton.disabled = 'true'
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

function raceButton(clickCount, waitMs) {
  const container = document.createElement("div");
  const button = document.createElement("button");
  const result = document.createElement("span");
  button.innerText = `Click me ${clickCount} times`;

  container.appendChild(button);
  container.appendChild(result);
  app.appendChild(container);

  let timeoutID;
  let clicks = 0;
  let ms = waitMs;
  button.addEventListener("click", startGame)
  function startGame() {
    if (typeof timeoutID === 'number') {
      clicks++;
      if (clicks === clickCount) {
        button.disabled = 'true';
        result.innerText = "Вы выиграли!";
      };
    } else {
      var p1 = new Promise(function(resolve) {
        window.setTimeout(slowAlert, ms);
        console.log('Promise p1 Вы проиграли!');
        resolve();
      });
      var p2 = new Promise(function(resolve) {
        if (clicks === clickCount) {
          console.log('Promise p2 Вы выиграли!');
          button.disabled = 'true';
          result.innerText = "Вы выиграли!";
          resolve();
        };
      });
      Promise.race([p1, p2]).then(function() {
        console.log('Race');
      });
      timeoutID = 1;
    }
  }
  function slowAlert() {
    if (clicks === clickCount) {
    } else {
      button.disabled = 'true';
      result.innerText = "Вы проиграли!";
    }
  }
}

raceButton(10, 4000);
raceButton(3, 3000);
raceButton(5, 2000);