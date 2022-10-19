// const newSection = document.createElement("section")
// newSection.innerHTML = "Solene"
// document.querySelector("article").appendChild(newSection)

// const newSection2 = document.createElement("section")
// newSection2.innerHTML = "Geoffroy"
// document.querySelector("article").appendChild(newSection2)

// const newSection3 = document.createElement("section")
// newSection3.innerHTML = "Tabata"
// document.querySelector("article").appendChild(newSection3)


// let learners = ["Solene", "Hanna", "Martin", "Rebecca"]

// function getRandomColor() {
// 	var r = Math.floor(Math.random() * 255);
// 	var g = Math.floor(Math.random() * 255);
// 	var b = Math.floor(Math.random() * 255);
// 	var bgColor = "rgb(" + r + ", " + g + ", " + b + ")";
// 	document.body.style.backgroundColor = bgColor;
// 	console.log(bgColor);
// }
// getRandomColor(newSection, newSection2, newSection3);




// * sélectionner les éléments que tu dois sélectionner 
// -> ici l'article , tu peux faire un queryselector pour le choper directement
// * créer un array avec les learners

// * faire une boucle pour travailler sur chaque learner à l'intérieur de ton array learners 

// => Créer une section
// => Créer un paragraphe
// => attacher le texte (le learner) au paragraphe
// => attacher le paragraphe à ta section
// => attacher ta section à l'article

// => appliquer ta couleur random à la section
// => appliquer la formule pour que si bg = dark -> text = white et si bg = light -> text = dark

// * shuffle l'ordre des éléments


// let art = document.querySelectorAll("article");
// let learners = ["Samuel", "Eli", "shama", "victor"];

// for (let learner in learners) {
// 	let newSection = document.createElement("section")
// 	document.querySelector("article").appendChild(newSection)
// }
	
// for (let learner2 in learners) {
// 	let newParagraphe = document.createElement("p")
// 	document.querySelector("section").appendChild(newParagraphe)
// }









// // * sélectionner les éléments que tu dois sélectionner 
// let art = document.querySelectorAll("article");

// * créer un array avec les learners
let learners = ["Samuel", "Eli", "shama", "victor"];

// * faire une boucle pour travailler sur chaque learner à l'intérieur de ton array learners :

learners.forEach((learner) => {

// * Créer une section : 
	let newSection = document.createElement("section")

// // * Créer un paragraphe :
// 	let newParagraphe = document.createElement("p")

// // * attacher le texte (le learner) au paragraphe : 
// 	newParagraphe.innerHTML = learner

// // * attacher le paragraphe à ta section : 
// 	document.querySelector("section").appendChild(newParagraphe)

// // * attacher ta section à l'article : 
// 	document.querySelector("article").appendChild(newSection)


});



// learners.forEach(myFunction);

// function myFunction(learner) {

// //* Créer une section : 
// 	let newSection = document.createElement("section")

// // // * Créer un paragraphe :
// // 	let newParagraphe = document.createElement("p")

// // // * attacher le texte (le learner) au paragraphe : 
// // 	newParagraphe.innerHTML = learner

// // // * attacher le paragraphe à ta section : 
// // 	document.querySelector("section").appendChild(newParagraphe)

// // // * attacher ta section à l'article : 
// // 	document.querySelector("article").appendChild(newSection)
// }




// * appliquer ta couleur random à la section
// * appliquer la formule pour que si bg = dark -> text = white et si bg = light -> text = dark

// * shuffle l'ordre des éléments








