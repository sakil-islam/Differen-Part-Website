/**
 * Project Requirements:
 * - Change the background color by generating random Hex color by clicking a button
 * - Also display the hex code to a disabled input field
 * - Add toast message when copied
 * _ user can type own hex code too
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

		if(isHexValid(output.value)){
		generateToastMessage(`${output.value} Copied!`);
		}
		else {
			alert('Invalid Color Code');
		}
	});

	output.addEventListener('keyup', function(e){
		const color = e.target.value;
		if(color && isHexValid(color)){
		root.style.backgroundColor = color;
		}
	});
};

// step 2 - random color generator function
function generateHEXColor() {
	// rgb(0, 0, 0), rgb(255, 255, 255) -> #ffffff
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);

	return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

//step 4 - create dynamic toast message
function generateToastMessage(msg){

	div = document.createElement('div');
	div.innerText = msg;
	document.body.appendChild(div);
	div.className = "toast-message toast-message-slide-in";


	//step 3 -  activate toast message 
	div.addEventListener('click', function(){
		div.classList.remove('toast-message-slide-in');
		div.classList.add('toast-message-slide-out');

		//step 5 - clear toast message
		div.addEventListener('animationend', function(){
			div.remove();
			div = null;
		});
	});

};

//step 3 -  activate toast message  
//step 4 - create dynamic toast message 
//step 5 - clear toast message

/**
 * js Doc it's name;
 * @param {string} color : ;
 */

function isHexValid(color){
	if (color.length !== 7) return false;
	if (color[0] !== '#') return false;
	
	// color = color.substring(1);
	return /^[#][0-9A-Fa-f]{6}$/i.test(color);
}
//step 6 - create isHexValid function
//step 7 - implement change handler on input field
// step 8 - prevent coping hex code if it is not valid
