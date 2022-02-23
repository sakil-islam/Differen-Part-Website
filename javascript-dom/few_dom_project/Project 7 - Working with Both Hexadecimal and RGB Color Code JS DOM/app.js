/**
 * Project Requirements:
 * - Change the background color by generating random Hex color by clicking a button
 * - Also display the hex code to a disabled input field
 * - Add toast message when copied
 * - user can type own hex code too
 * - show rgb color too, but do not need to edit it.
 * - user can also copy the rgb color code
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
	const output2 = document.getElementById('output2');



  changeBtn.addEventListener('click', function() {
		const color = generateColorDecimal();
    const hex = generateHEXColor(color);
    const rgb = generateRGBColor(color);
    root.style.backgroundColor = hex;
    output.value = hex.substring(1);
    output2.value = rgb;
  });

	copyBtn.addEventListener('click', function() {
		navigator.clipboard.writeText(`#${output.value}`);

		if(div !== null){
			div.remove();
			div = null;
		}

		// step 8 - prevent coping hex code if it is not valid
		if(isHexValid(output.value)){
		generateToastMessage(`#${output.value} Copied!`);
		}
		else {
			alert('Invalid Color Code');
		}
	});

	//step 7 - implement change handler on input field
	output.addEventListener('keyup', function(e){
		const color = e.target.value;
		if(color){
			output.value = color.toUpperCase();
			if(isHexValid(color)){
				root.style.backgroundColor = `#${color}`;
				}
		}
	});
};

//step 9 - refactor the color generator function
//*** function 1 - generate three random decimal number for red, green and blue
// return as an object
function generateColorDecimal() {
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);

	return {
		red,
		green,
		blue,
	}
}

//*** function - 2 generate hex color code
function generateHEXColor({ red, green, blue }){
	// const { red, green, blue } = generateColorDecimal();
	//*** using variable to calculate hex code
	// const twoCodeRed = red <= 15 ? `0${red}` : red.toString(16);
	// const twoCodeGreen = green <= 15 ? `0${green}` : green.toString(16);
	// const twoCodeBlue = blue <= 15 ? `0${blue}` : blue.toString(16);

	//*** using function to calculate hex code
	const getTwoCode = (value) => {
		const hex = value.toString(16);
		return hex.length ===1 ? `0${hex}` : hex;
	}

	return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`.toUpperCase();
}

//*** function 3 - Generate RGB color code
 function generateRGBColor ({ red, green, blue }){
	 return `rgb(${red}, ${green}, ${blue})`;
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
/**
 * js Doc it's name;
 * @param {string} color : ;
 */
//step 6 - create isHexValid function
function isHexValid(color){
	if (color.length !== 6) return false;
	
	return /^[0-9A-Fa-f]{6}$/i.test(color);
}
// Step 1 - create onload handler

// step 2 - random color generator function

// step 3 - collect all necessary references

// step 4 - handle the change button click event

// step 5 - handle the copy button click event

// Step 6 - activate toast message

// Step 7 - create a dynamic toast message

// step 8 - clear toast message

// step 9 - create isHexValid function

// step 10 - implement change handler on input field

// step 11 - prevent copying hex code if it is not valid

// step 12 - refactor the color generator function

// step 13 - update color code to display rbg colors