/**
 * Project Requirements:
 * - Change the background color by generating random Hex color by clicking a button
 * - Also display the hex code to a disabled input field
 */

// Steps

// Step 1 - create onload handler
window.onload = () => {
	main();
};

function main(){
  const root = document.getElementById('root');
	const btn = document.getElementById('change-btn');
	const output = document.getElementById('output');

  btn.addEventListener('click', function() {
    const bgColor = generateHEXColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
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