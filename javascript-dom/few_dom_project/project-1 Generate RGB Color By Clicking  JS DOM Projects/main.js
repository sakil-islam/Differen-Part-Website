/** 
const buttonSelect = document.querySelector('button');
const bodySelect = document.querySelector('body');
buttonSelect.addEventListener('click', (event) => {
 event.preventDefault();
 console.log(buttonSelect);
 console.log(bodySelect);
 bodySelect.classList.toggle("active");
});
*/



/**
 * Project Requirements:
 * - Change the background color by generating random rbg color by clicking a button
 */

// Steps

// Step 1 - create onload handler
window.onload = () => {
	main();
};

function main() {
	const root = document.getElementById('body');
	const btn = document.getElementById('button');

	btn.addEventListener('click', function () {
		const bgColor = generateRGBColor();
		root.style.backgroundColor = bgColor;
	});
}

// step 2 - random color generator function
function generateRGBColor() {
	// rgb(0, 0, 0), rgb(255, 255, 255)
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);

	return `rgb(${red}, ${green}, ${blue})`;
}

// step 3 - collect all necessary references

// step 4 - handle the click event

