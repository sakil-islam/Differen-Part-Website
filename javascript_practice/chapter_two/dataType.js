//*** */ primitive data type -> javascript own data type. mainly javascript compiler gives this type.
// number 10 4.5 8.12 
// string 'sakil' "this is javascript"
// Boolean true / false
// Undefine -> it's indicate variable are not define.
// Null -> it's indicate absent of a value.

//**** */ object data type -> object type are work using different data type. it's all our javascript life. object type are create by primitive type.
// 1. Array
// 2. Object
// 3. function

//********Number ********

// Converting strings to numbers with vanilla JavaScript

//*** parseInt() # The parseInt() method converts a string into an integer (a whole number). ...
//**** */ parseFloat() # The parseFloat() method converts a string into a point number (a number with decimal points). ...
//**** */ Number() # The Number() method converts a string to a number.

// let n = 123456;
// let f = 45.32;
// let s = '4564646';
// let number = Number('45.65');

// console.log(Number(s)); // convert string as a number.
// console.log(number);
// console.log(Number.parseInt(f));
// console.log(1/0);
// console.log('addf' * 5);
// console.log(parseInt(s)); //num will equal 1 as a int.
// console.log(typeof(f.toString())); //converts number to string.

//******** String ********

// let str = 'String';
// let str2 = "String";
// let str3 = `String`;


// let str4 = String('String');
// let str5 = String(456);
// let str6 = String(3.122);

// console.log(str4, str5, str6);

//***** Boolean *******/

// let b1 = true;
// let b2 = false;

// let c1 = Boolean(true);
// let c2 = Boolean(false);

// console.log(c1,c2);

//**** Undefine and Null */

  //*** Null is special type used as a absence of an object */
  //*** Undefine a variable doesn't have a assign value */

  // var abc;
  // var xyz = null;

  // console.log(abc);
  // console.log(xyz);


//*** Hexa-decimal & octal */

let hex = 0xff; // hexa notation always 0x diye suru kore baki value dite hobe.
console.log(hex);

let oct = 0756; // oct 0 diye suru kore baki value use korte hobe 0-7 ar modde thakte hobe.
console.log(oct); // normal converstion hoy decimal a.

