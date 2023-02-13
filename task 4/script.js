// Задание 4
/*
Напишите код приложения, интерфейс которого
представляет собой 2 input и кнопку submit.
В input можно ввести любое число.

При клике на кнопку происходит следующее:

Если оба числа не попадают в диапазон от 100 до 300
или введено не число — выводить ниже текст
«одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 —
сделать запрос c помощью fetch по URL https://picsum.photos/200/300,
где первое число — ширина картинки, второе — высота.
*/

let inp = document.querySelectorAll('.inp');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');
let collValue = [];
 

function rangeCheck(){
    const inpArr = Array.from(inp)
    for(let i = 0; i<inp.length; i++){
    collValue.push(inp[i].value)}
}



const useRequest = () => {
    return fetch(`https://picsum.photos/${collValue[0]}\/${collValue[1]}`)
      .then((response) => {
        return response.url;
      })
      .catch((error) => { console.log(error) });
  }
  

  btn.addEventListener('click', async () => {
    rangeCheck()
    if (collValue.length > 2) {
      collValue.splice(0, 2)
    }
    const requestResult = await useRequest();
    const relevantValue = collValue.filter(e => e >= 100 && e <= 300);

    if(relevantValue.length >= 2)
    {
      result.innerHTML =`<img src=${requestResult}>`
    }else{
        result.innerHTML = "<div>Одно из чисел вне диапазона от 100 до 300</div>"
    }
  });



