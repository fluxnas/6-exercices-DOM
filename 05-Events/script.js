const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  const displayedsquareWrapper = document.querySelector(".displayedsquare-wrapper")
// Create a new <div>  
  const div = document.createElement("div")
// rajoute attribut class "displayedsquare" 
// et e.target.classList[1] pour la couleur
  div.classList.add("displayedsquare", e.target.classList[1])
  displayedsquareWrapper.appendChild(div)
// Create a new <li> in the log below to state when the action was done 
  const li = document.createElement("li")
  const ul = document.querySelector("ul")
  ul.appendChild(li)
  li.innerText = "[" + getElapsedTime() + "] created a new " + e.target.classList[1] + " square"
  
  // Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square
  const clickOnDisplaySquare = document.querySelector(".displayedsquare")
  clickOnDisplaySquare.addEventListener("click", function(j) {
    alert(j.target.classList[1])
  })

}





const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}


//ESSAIE 1
// const carreGreen = document.querySelector(".actionsquare.green")

// function displayGreen() {
//   const displayedquareWrapper = document.querySelector(".displayedsquare-wrapper")
//   const div = document.createElement("div")
//   div.className = "displayedsquare"
//   displayedquareWrapper.appendChild(div)
//   div.style.backgroundColor = "lime";
// }

// carreGreen.addEventListener(
//   "click",
//   displayGreen
//   )


// ESSAI 2
// const carre = document.querySelector(".actionsquare")
// const carreGreen = document.querySelector(".actionsquare.green")
// const carreViolet = document.querySelector(".actionsquare.violet")
// const carreOrange = document.querySelector(".actionsquare.orange")

// function display() {
//   const displayedsquareWrapper = document.querySelector(".displayedsquare-wrapper")
//   const div = document.createElement("div")
//   div.className = "displayedsquare"
//   displayedsquareWrapper.appendChild(div)  


//     if (carreGreen) {
//     div.style.backgroundColor = "lime";
//     }
//     else if (carreViolet) {
//     div.style.backgroundColor = "magenta";
//     }  
//     else {
//     div.style.backgroundColor = "orange";
//     }

// }

// carre.addEventListener(
//   "click",
//   display
//   )



// Add an event listener on the document <body>, 
// listening for the keypress event. (hint: have a look at this) 
// When the spacebar is hit randomly change the background color of the whole page


// document.body.onkeypress = function(e) {
//   if (e.key == " " ||
//       e.code == "Space" ||      
//       e.keyCode == 32      
//   ) {
//   var r = Math.floor(Math.random() * 255);
//   var g = Math.floor(Math.random() * 255);
//   var b = Math.floor(Math.random() * 255);
//   var bgColor = "rgb(" + r + ", " + g + ", " + b + ")";
//   document.body.style.backgroundColor = bgColor;
//   // créer li dans ul pour faire apparaitre la bgColor et le temps
//   const li = document.createElement("li")
//   const ul = document.querySelector("ul")
//   ul.appendChild(li)
//   li.innerText = "[" + getElapsedTime() + "] created a new background color : " + bgColor
//   }
// }

document.body.addEventListener("keypress", function(e) {
  if (e.keyCode == 32
      ) {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var bgColor = "rgb(" + r + ", " + g + ", " + b + ")";
        document.body.style.backgroundColor = bgColor;
        const li = document.createElement("li")
        const ul = document.querySelector("ul")
        ul.appendChild(li)
        li.innerText = "[" + getElapsedTime() + "] created a new background color : " + bgColor
      }
  }
)



  // When the l key is pressed the log gets deleted (erases the generated <li>s). 
  // Mind you: using a delete in a for loop might cause issues 
  // (as the amount of items to loop over changes), so a while loop might be a good 
  // choice instead.

// const ul = document.querySelector("ul")
//   document.body.onkeypress = function(f) {
//     if (f.key == "l" ||
//         f.code == "KeyL" ||
//         f.keyCode == 76
//         ) {
//         ul.removeChild(li)
//         }
//       }

// function deleteLog() {
//   const li = document.querySelector("li")
//   if (e.key == "l" ||
//       e.code == "KeyL" ||
//       e.keyCode == 76
//         ) {
//       li.remove()
//   }
// }
// const ulDelete = document.querySelector("ul")
// ulDelete.addEventListener("onkeypress", deleteLog)

document.body.addEventListener("keypress", function(f) {
  const ul = document.querySelector("ul");
  if (f.key == "l") {
      while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
      }
    }
})


// When the s key is pressed the squares get deleted (erases the generated squares)


document.body.addEventListener("keypress", function(g) {
  const square = document.querySelector(".displayedsquare-wrapper");
  if (g.key == "s") {
      while (square.firstChild) {
      square.removeChild(square.firstChild);
      }
    }
})









