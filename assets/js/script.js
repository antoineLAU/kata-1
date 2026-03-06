// Etape 4 , 5 et 6

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault() 

})

const texte = document.querySelector("#titre")
const auteurs = document.querySelector("#author")
const bouton = document.querySelector("#bouton")
const liste = document.querySelector("#quote-list")
const titre =document.querySelector("#nombreCitation")

let counter = 0

bouton.addEventListener("click",() => {
  
    const newDiv = document.createElement("div")
    const newP1 = document.createElement("p")
    const newP2 = document.createElement("p")
    const newHr = document.createElement("hr")

    newP1.textContent = " Citation : " + texte.value; 
    newP2.textContent = " Auteurs : " + auteurs.value;
    newDiv.appendChild(newP1)
    newDiv.appendChild(newP2)
    newDiv.appendChild(newHr)
    liste.appendChild(newDiv)
    counter++
    titre.textContent=`${counter} citation`
    
})

