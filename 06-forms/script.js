// Add a keyup listener on the first input field, so that once you type a letter in this field, 
// it goes into the <span id="display-firstname">. The content of the field and the span should 
// always remain the same.

const inputFN = document.getElementById("firstname")
const logFN = document.getElementById("display-firstname")

inputFN.addEventListener("keyup", functionName)

function functionName() {
	logFN.innerText = input.value
}


// Add a keyup listener on the second input (the number input), so that if the age is below 18 
// the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.


const inputAge = document.getElementById("age")
const outputAge = document.getElementById("a-hard-truth")

inputAge.addEventListener("keyup", functionAge) 

function functionAge() {
	if (age.value<18) {
		outputAge.style.visibility = "hidden"
	}
	else {
		outputAge.style.visibility = "visible"
	}
}


// Well this is a common one. Add a keyup listener on both fields and show a visual hint 
// (for instance turn the field red) if the password is too short (less than 6 characters) 
// or if the password and its confirmation do not match.

const inputpwd = document.getElementById("pwd")
const inputpwdconfirm = document.getElementById("pwd-confirm")

inputpwd.addEventListener("keyup", functionpwd)
inputpwdconfirm.addEventListener("keyup", functionpwd)

function functionpwd() {
	if (inputpwd.value != inputpwdconfirm.value || inputpwd.length < 6 || inputpwdconfirm.length < 6) {
		inputpwd.style.border = "1px solid red"; 
		inputpwdconfirm.style.border = "1px solid red"; 
	}
	else {
		inputpwd.style = " "
		inputpwdconfirm.style = " "
	}
}

// function functionpwd() {
// 	if (inputpwd.value == inputpwdconfirm.value && inputpwd.length > 6) {
// 		inputpwd.style = " "
// 		inputpwdconfirm.style = " "
// 	}
// 	else {
// 		inputpwd.style.border = "2px solid red"; 
// 		inputpwdconfirm.style.border = "2px solid red"; 
// 	}
// }



// Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. 
// For ease of use, we'll say that the dark mode is just turning the background black and the text white.


const darkbtn = document.getElementById("toggle-darkmode")

darkbtn.addEventListener("change", functiondark)

function functiondark() {
	if (darkbtn.value == "dark") {
	document.body.style.backgroundColor = "black"
	document.body.style.color = "white" 
	}
	else {
	document.body.style.backgroundColor = "white"
	document.body.style.color = "black" 	
	}
}








