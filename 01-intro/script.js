// /* Display the document title in the console */

// var docTitle = document.title
// console.log(docTitle)


//  Change the document title to Modifying the DOM 

// var newTitle = 'The title has changed!';
// document.title = newTitle
// console.log(document.title)


// // Change the background color of the body to hot pink (#FF69B4).

// document.body.style.backgroundColor = "#FF69B4";


// // If that worked, try with a random color as an extra challenge. (tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255).

// function getRandomColor() {
// 	var r = Math.floor(Math.random() * 255);
// 	var g = Math.floor(Math.random() * 255);
// 	var b = Math.floor(Math.random() * 255);
// 	var bgColor = "rgb(" + r + ", " + g + ", " + b + ")";
// 	console.log(bgColor);
// 	document.body.style.backgroundColor = bgColor;
// }
// getRandomColor();


// // Using the children method and a for ... of loop, display every children elements of the second child element of your document (display all children elements of the <body>)

// const collection = document.body.children;
// console.log(collection);

// ou

function display()
{
        var element = document.querySelector("body");
        var children = element.children;
        for(var i=0; i<children.length; i++)
        { 
            var child = children[i];
            console.log(child);
        }
}

display();
