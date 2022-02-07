// console.log(typeof(document));
// // check type format 
// console.dir(document); // document related all info show
// console.log(document); // same output as like dir

// console.log(document.title); // show console title we set in the html page 

// console.log(document.domain);// show domain 
// console.log(document.head);
// // log show output html tag but dir show ouput all related 
// console.log(document.body);

// console.log(document.all);// all html element are show 

// for (let element of document.all){
//   console.log(element);
// }
// // show html element show

// console.log(document.links);
// console.log(document.forms);


// // Get element by ID


// console.log(document.getElementById('new-task'));

// let headerElement = document.getElementById('header');

// // headerElement.style.fontSize = '500px'; // style korar jonno aavabe style likhte hoy js a it's not css as like react or veujs

// // headerElement.textContent = 'sakil';// html ar text content jemon ase seta dey output sudu html gulu ignore kore ja lekha tai output dey
// console.log(headerElement.textContent);
// // headerElement.innerText = 'sakil'; // innerText hocce display te je rokom dekha jacce seta output dey mane finally je output dekhe seta show kore

// console.log(headerElement.innerText);// html tag soho show korbe jodi design korar jonno kisu use kora hoy

// console.log(headerElement.innerHTML);


// // Get elements  by class

// console.log(document.getElementsByClassName('item')[1]);  // ar length ase symbol.iterator ase and array moto access o kora jabe but agula array na.

// let itemUl = document.getElementById('items'); // 2i ta ul ar akta select kore tar under a loop chalano jabe and document ar replace itemsul variable use kora hoyece.

// let items = itemUl.getElementsByClassName('item'); // getElementsByClassName ata sudu document ar jonno aplicable sudu ta na ata sokol html element ar jonno applicable. ({getElementById/getElementsByClassName agula document a na prototype chain ar modde chilo se prototype chain ar akta onsho itemul nije o a o ai prototype theke inherite kore astece a o oi element access korte pare})

// for (let i = 0; i<items.length; i++){
//   items[i].style.color = 'red';
// }

// // Get elements  by tagname

// let itemtag = document.getElementsByTagName('div'); // 2i ta ul ar akta select kore tar under a loop chalano jabe and document ar replace itemsul variable use kora hoyece.
// console.log(itemtag);

// query selector
// class use korte hole ('.classname') id ar jonno('#idname') tag ar jonno ('tagname) je kono selector use kora jay.

// let newTask = document.querySelector('#new-task');
// console.log(newTask);

// let lastItem = document.querySelector('.item:last-child'); //querySelector ar behaviour hocce ata first matching element ar modde last child ta dibe. ata always akta jinis return kore. jodi aktar besi output pete hoy tobe se querySelectorAll use korte hobe.
// lastItem.style.color = 'green';

// let lastItems = document.querySelectorAll('.item:last-child'); // aktar besi aksathe style korte hole loop use korte hobe.
// for(let element of lastItems){
//   element.style.color = 'white';
// }

// let lastItems = document.querySelector('.item:nth-child(2)'); // jekono child niye kaj kora jay .
// lastItems.style.color = 'white';

// let lastchild = document.querySelector('#items').querySelector('.item:nth-child(2)');

// lastchild.style.fontSize = '50px'; // document bade o select kora jay .



//parent /children relation

// const parent = document.querySelector('#items');

// const children = parent.children;

// console.log(children[1]); // parent ar under a joto children ase sop chole asbe

// const grandparent = document.querySelector('.todo-list');

// const parent = grandparent.children; 

// const children = parent[1].children; // grandparent ar modde sop gula array akare thakbe and show korte hobe array akare

// console.log(children); 

// const grandparent = document.querySelector('.todo-list');

// const children = grandparent.querySelectorAll('.item'); // descent a pete chaile seta dore tar modde query selector all chalale paowa jabe but parent use kora lagbe na.

// console.log(children); 

//children to parent to grandparent

// const children = document.querySelector('.item');
// const parent = children.parentElement;
// console.log(parent);

// const children = document.querySelector('.item');
// const grandparent = children.closest('.todo-list'); // closest onk ta query selector ar moto kaj kore but ata nich theke upor a kaj kore.
// console.log(grandparent);

// const childrenOne = document.querySelector('.item'); // both children sibling selector sudu children theke children delected kora jay 

// const childrenTwo = childrenOne.nextElementSibling;

// childrenTwo.style.color = 'black';

// const childrenTwo = document.querySelector('.item').nextElementSibling; // second child theke first child a asa jay 

// const childrenOne = childrenTwo.previousElementSibling;

// childrenOne.style.color = 'black';

// anchester--- grandparent /descent--- parent  / sibling prev or next --- children two or more.


// how to manipulated an element---------

// const divElement = document.createElement('div');  //jeta create korte chai seta div ar jaygay dilei hobe

// //console.dir(divElement);
// console.log(divElement);

// divElement.className = 'red'; //div element ar class name set kora jay

// divElement.setAttribute('id', 'red'); // id set korar jonno
// divElement.setAttribute('title', 'Red-Div'); // title set kora


// const container = document.querySelector('.todo-list');
//const h2Element = container.querySelector('h2');
//container.insertBefore(divElement, h2Element); // insertBefore 2i ta paremeter ney akta holo ki insert korbo second hocce kothay insert korbo.


//difference between append and appendchild

//container.appendChild(divElement); // ar modde html element na diye text dileo thik vabe kaj korbe na. obossoi html element / node dite hobe. ata append sudu kore na jeta pass kora hoy ta abr return kore dey.

//container.append(divElement); // ar modde html element na diye text dileo thik vabe kaj korbe.append kisui return kore na.
//container.append('hello world');

// const a = container.append(divElement, document.createElement('p'), 'hello world'); // append ar modde multiple perameter pass kora jay.

// const a = container.appendChild(divElement, document.createElement('p'), 'hello world'); // ata sudu first aktai append korbe but baki gula ignore kore jabe.


//Event Listeners -----

// const headerElement = document.querySelector('#header');

// headerElement.addEventListener('dblclick', (event) => { // first paramenter ki type ar option dite chacci ar second holo akta function. click, dblclick, mouseout, mouseover(ata nijer div and vitorer child ar upor o kaj kore),mouseleave,mouseup, mouseenter(ata nijer div and vitorer child ar upor kaj kore na)
//   console.log(event);
// })

// const inputElement = document.querySelector('input[type="text"]');
// inputElement.addEventListener('keydown', (event) => {
//   // keydown (text bok a kono world type korle event fire hobe) keyup (text press kore chere dile than event fire hobe) keypress (key press kore chere dile / dore raklei event fire hobe) focus (box click korlei fire hobe) blur ( focus ar ulta) cut ( kisu likhe cut korle event fire hobe) paste (kisu paste korle dectact hobe) input (kisu input dile event gotbe)
//   console.log(event);
// })

// const formElement = document.querySelector('form');
// formElement.addEventListener('submit', (event) => {
//   event.preventDefault(); // browser window reload hoy by default prevent/fiexd korar jonno prevent default kora hoy
//   //console.log(event);

//   console.log(event.target); // kon element ar upor event fire hocce seta dey.
  

// });

const inputElement = document.querySelector('input[type="text"]');
inputElement.addEventListener('keydown', (event)=> {
  console.log(event.target.value); //input box a kono key press kore onno kisu dilei seta output a show korbe.
})


