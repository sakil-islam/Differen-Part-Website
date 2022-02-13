const buttonSelect = document.querySelector('button');
const bodySelect = document.querySelector('body');
buttonSelect.addEventListener('click', (event) => {
 event.preventDefault();
 console.log(buttonSelect);
 console.log(bodySelect);
 bodySelect.classList.toggle("active");
});