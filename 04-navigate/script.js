 // Modify the script.js, do not create any new nodes!
 // Select the last child of the <ol> tag and put it at the beginning of the list 

// const ol = document.querySelector("ol")
// const l = ol.lastElementChild

// ol.prepend(l)


 // Move the <h2> of the third section in the second one and vice-versa 

const h2 = document.querySelectorAll('h2')
const div = document.querySelector('div')
const section = document.querySelectorAll('section')



const titre2 = h2[1]
const section3 = section[2]
div.prepend(titre2)


const titre3 = h2[1]
const section2 = section[1]
section2.prepend(titre3)





//  Delete the last section from the DOM, we don't need it anyways 

section3.remove()



