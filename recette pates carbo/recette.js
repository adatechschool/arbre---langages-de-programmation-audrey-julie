let ingredients = ["Pâtes", " Oeuf", " Sel", " Poivre", " Oignon", " Lardons", " Parmesan"]
let tab = ingredients.length //calcule le nombre de cases du tableau

let nbIngr = "Vous avez besoin de " + tab + " ingrédients."
document.getElementById("p1").innerHTML = (nbIngr) // il va chercher l'émément selon son id dans le document HTML


//afficher la liste des ingrédients
function list() { //nomme la fonction
    for (let i = 0; i < tab; i++) //parcoure le tableau cellule par cellule
        document.getElementById("list").innerHTML = "Vous avez besoin de : " + (ingredients) + "<br>" //dans le paragraphe "list", il affiche les ingrédients dans la page HTML. Ne pas mettre (ingredients[i]) car ______.
}
list() //appelle la fonction










/*
//afficher les ingrédients en liste ordonnée
function Olist() {
    for (let i = 0; i < tab; i++)
     document.getElementsByClassName("alist").innerHTML = (ingredients) + "<br>"
    }
Olist()

*/

//afficher la liste des ingrédients alphabet
function alist() {
    ingredients.sort(function (a, b) {
        
            a.length - b.length;

            document.getElementById("alist").innerHTML = (ingredients) + "<br>"
            return //doit être mis à la fin pour toutes les instructions soient lues
        }

    )
}
alist()