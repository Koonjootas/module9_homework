// Задание 1.
/*
Вам дана заготовка и результат, который вы должны получить.
Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.
*/

const parser = new DOMParser();

const xmlString =`
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

const students = parser.parseFromString(xmlString, "text/xml").getElementsByTagName('student');
const list = parser.parseFromString(xmlString, "text/xml").getElementsByTagName('list'); 


function getResult () { 
  for (let i = 0; i < students.length; i++){
  arr.push({
  name: students[i].querySelector("first").textContent +" "+students[i].querySelector("second").textContent,
  age: Number(students[i].querySelector("age").textContent),
  prof: students[i].querySelector("prof").textContent,
  lang: students[i].querySelector("name").getAttribute("lang")
  })
  }};

 
 let arr = [];
 let users = {
   "list" : arr
 };

 getResult(students)


console.log(users)

// Задание 2.
/*
Вам дана заготовка и результат, который вы должны получить.
Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.
*/


const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`

const data = JSON.parse(jsonString);
const list = data.list;


function getResult () { 
  for (let i = 0; i < list.length; i++){
  arr.push({
  name: list[i].name,
  age: Number(list[i].age),
  prof: list[i].prof,
  })
  }};

 
 let arr = [];
 let users = {
   "list" : arr
 };

 getResult(list)


console.log(users)



