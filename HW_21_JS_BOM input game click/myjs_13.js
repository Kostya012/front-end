
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
    item.innerHTML = `<img src="tribe-loading.gif" alt="Please wait">`;
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

function raceButton(clickCount, waitMs) {
  const container = document.createElement("div");
  const button = document.createElement("button");
  const result = document.createElement("span");
  button.innerText = `Click me ${clickCount} times`;

  // result.innerText = "Great";
  container.appendChild(button);
  container.appendChild(result);
  app.appendChild(container);
}

raceButton(10, 4000);
raceButton(3, 3000);
raceButton(5, 2000);









class View {
  constructor() {
    this.app = document.getElementById('app');
    this.title = this.createElement('h2', 'title');
    this.title.textContent = 'Github Search Users';

    this.searchLine = this.createElement('div', 'search-line');
    //создаём input
    this.searchInput = this.createElement('input', 'search-input');
    this.searchBtn = this.createElement('button')
    // this.searchBtn.src = 'search.png'
    this.searchBtn.src = "tribe-loading.gif";
    // this.searchBtn.type = "image";
// document.body.appendChild(deleteButton)
    
    this.searchBtn.textContent = 'Search'
    
    // this.searchBtn.img = '<img src="search.png" alt="Поиск" style="vertical-align: middle">'
    this.searchCounter = this.createElement('span', 'counter');
    this.searchLine.append(this.searchInput);
    this.searchLine.append(this.searchBtn);
    // this.searchLine.searchBtn.append(this.searchBtn.src)


    this.searchLine.append(this.searchCounter);

    

    this.usersWrapper = this.createElement('div', 'users-wrapper');
    this.usersList = this.createElement('ul', 'users');
    this.usersWrapper.append(this.usersList);

    this.main = this.createElement('div', 'main');
    this.main.append(this.usersWrapper);

    this.app.append(this.title);
    this.app.append(this.searchLine);
    this.app.append(this.main);

  }

  createElement(elementTag, elementClass) {
    const element = document.createElement(elementTag);
    if (elementClass) {
      element.classList.add(elementClass);
    }
    return element;
  }

  createUser(userData) {
    const userElement = this.createElement('li', 'user-prev');
    // userElement.addEventListener('click', this.showUserData(userData.login))
    userElement.innerHTML = `<img class="user-prev-photo" src="${userData.avatar_url}" alt="${userData.login}">
    <span class="user-prev-name">${userData.login}</span>`
    this.usersList.append(userElement);
  }
}

class Search {
  constructor(view) {
    this.view = view;

    this.view.searchInput.addEventListener('keyup', this.searchUsers.bind(this))

  }

  async searchUsers() {
    return await fetch(`https://api.github.com/search/users?q=${this.view.searchInput.value}`)
    .then((res) => {
      if (res.ok) {
        res.json().then((res) => {
          res.items.forEach(user => this.view.createUser(user));
        })
      } else {

      }
    })

  }

}

new Search(new View());
