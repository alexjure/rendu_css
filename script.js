

let blockText = document.querySelector(".blockText")
let textSize = blockText.querySelector("p")

let inputColor = document.getElementById("color")
let inputColorText = document.getElementById("colorText")
let inputSize = document.getElementById("size")
let inputBorder = document.getElementById("border")

let resetButton = document.querySelector(".reset")

// Récupération des valeurs de l'input couleur de fond
inputColor.addEventListener("input", function(){
    blockText.style.backgroundColor = inputColor.value
})

// Récupération et application de la couleur du texte
inputColorText.addEventListener("input", function(){
    textSize.style.color = inputColorText.value
})

// Récupération et application de la taille du texte
inputSize.addEventListener("input", function(){
    textSize.style.fontSize = inputSize.value
})

// Récupération et application du border-radius 
inputBorder.addEventListener("input", function(){
    blockText.style.borderRadius = inputBorder.value
})

// Bouton pour reset la page (recharge la page)
resetButton.addEventListener("click", function(){
    location.reload()
})