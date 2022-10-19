// /* Add a title attribute to every element that has the important class, stating This is an important item.  */

// const elements = document.querySelectorAll(".important");
// for(var i=0; i<elements.length; i++)
//         {
//         var ele = elements[i];
//         ele.title = "This is an important item";
//         }

// /* Select all the img tags and loop through them. If they have no important class, turn their display property to none */

// const img = document.querySelectorAll("img");

// for (let element of img) {
// 	if (element.classList.contains("important")) {
// 		element.style.display = "block";
// 	}
// 	else {
// 		element.style.display = "none";
// 	}
// }


// //Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well

// var para = document.querySelectorAll("p");

// for (let element of para) {
// 	console.log(element.innerText);
// 	console.log(element.className);
// }


// Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.

var para = document.querySelectorAll("p");

for (let element of para) {
	function getRandomColor() {
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		var color = "rgb(" + r + ", " + g + ", " + b + ")";
		element.style.color = color;
}
getRandomColor();
}