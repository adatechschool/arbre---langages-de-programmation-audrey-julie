let ingredients = ["Pâtes", "Oeuf", "Sel", "Poivre", "Lardon", "Oignon", "Parmesan"];

let TotalIngredients = ingredients.length
console.log(ingredients.length)

var texte = " Il y a " + TotalIngredients + " ingrédients dans cette recette "

texte = document.body.innerHTML += "<h2>" + texte + "</h2>"



for(var i= 0; i <ingredients.length; i++){
  console.log(ingredients[i])
}



//text += ingredients[0] + "<br>";
//text += ingredients[1] + "<br>";
//text += ingredients[2] + "<br>";
//text += ingredients[3] + "<br>";
//text += ingredients[4] + "<br>";
//text += ingredients[5] + "<br>"

//for (let i = 0; i < ingredients.length; i++) {
  //text += ingredients[i] + "<br>";
//} 