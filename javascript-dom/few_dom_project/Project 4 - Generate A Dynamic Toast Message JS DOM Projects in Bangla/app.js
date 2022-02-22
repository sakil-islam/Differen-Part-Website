/**
 * Project Requirements:
 * - Change the background color by generating random Hex color by clicking a button
 * - Also display the hex code to a disabled input field
 * - Add toast message when copied 
 */

// Steps Global

let div = null;

// Step 1 - create onload handler
window.onload = () => {
	main();
};

function main(){
  const root = document.getElementById('root');
	const changeBtn = document.getElementById('change-btn');
	const copyBtn = document.getElementById('copy-btn');
	const output = document.getElementById('output');



  changeBtn.addEventListener('click', function() {
    const bgColor = generateHEXColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });

	copyBtn.addEventListener('click', function() {
		navigator.clipboard.writeText(output.value);

		if(div !== null){
			div.remove();
			div = null;
		}
		generateToastMessage(`${output.value} Copied!`);
	});

}

// step 2 - random color generator function
function generateHEXColor() {
	// rgb(0, 0, 0), rgb(255, 255, 255) -> #ffffff
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);

	return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

function generateToastMessage(msg){

	div = document.createElement('div');
	div.innerText = msg;
	document.body.appendChild(div);
	div.className = "toast-message toast-message-slide-in";

	div.addEventListener('click', function(){
		div.classList.remove('toast-message-slide-in');
		div.classList.add('toast-message-slide-out');

		div.addEventListener('animationend', function(){
			div.remove();
			div = null;
		});
	});

};

//step 3 -  activate toast message  

//step 4 - create dynamic toast message 
//step 4 - clear toast message
