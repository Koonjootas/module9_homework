// Задание 5.
/*
Написать код приложения, интерфейс которого состоит из двух input и кнопки.
В input можно ввести любое число.

Заголовок первого input — «номер страницы».
Заголовок второго input — «лимит».
Заголовок кнопки — «запрос».
При клике на кнопку происходит следующее:

Если число в первом input не попадает в диапазон от 1 до 10 или не является числом
— выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом
— выводить ниже текст «Лимит вне диапазона от 1 до 10»;
Если и первый, и второй input не в диапазонах или не являются числами
— выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL
https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page
— это число из первого input, а GET-параметр limit — это введённое число второго
input.
Пример. Если пользователь ввёл 5 и 7, то запрос будет вида
https://picsum.photos/v2/list?page=5&limit=7.
После получения данных вывести список картинок на экран.

Если пользователь перезагрузил страницу, то ему должны показываться картинки из
последнего успешно выполненного запроса (использовать localStorage).
*/

function showPreviousRes(){
  return fetch(
    `https://picsum.photos/v2/list?page=${localStorage.getItem("mypicture1")}&limit=${localStorage.getItem("mypicture2")}`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      displayResult(json)
      return json;
    })
    .catch((error) => {
      console.log(error);
    });
};

showPreviousRes()

let inp = document.querySelectorAll(".inp");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");
let collValue = [];

function rangeCheck() {
  const inpArr = Array.from(inp);
  for (let i = 0; i < inp.length; i++) {
    collValue.push(inp[i].value);
  }
  if (collValue.length>2){
    collValue.splice(0, 2)
  }
}



const makeRequest = function () {
  return fetch(
    `https://picsum.photos/v2/list?page=${collValue[0]}&limit=${collValue[1]}`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      displayResult(json)
      return json;
    })
    .catch((error) => {
      console.log(error);
    });
};


function displayResult(apiData) {
  let cards = "";

  apiData.forEach((item) => {
    const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
    cards = cards + cardBlock;
  });

  result.innerHTML = cards;
}


btn.addEventListener("click", () => {
    rangeCheck()

  const relevantValue = collValue.filter(e => e >= 1 && e <= 10);
  localStorage.setItem('mypicture1', relevantValue[0])
  localStorage.setItem('mypicture2', relevantValue[1])


    if(relevantValue.length >= 2)
    {
      makeRequest()
    }else{
        result.innerHTML = "<div>Одно из чисел вне диапазона от 1 до 10</div>"
    }
})

