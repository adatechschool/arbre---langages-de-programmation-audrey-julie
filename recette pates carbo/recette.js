let ingredients = [" Pâtes", " Oeuf", " Sel", " Poivre", " Oignon", " Lardons", " Parmesan"]
let tab = ingredients.length //calcule le nombre de cases du tableau

let nbIngr = "Vous avez besoin de " + tab + " ingrédients."
document.getElementById("p1").innerHTML = (nbIngr) // il va chercher l'émément selon son id dans le document HTML


//afficher la liste des ingrédients
function list() { //nomme la fonction
    for (let i = 0; i < tab; i++) //parcoure le tableau cellule par cellule
        document.getElementById("list").innerHTML = "Vous avez besoin de : " + (ingredients) + "<br>" //dans le paragraphe "list", il affiche les ingrédients dans la page HTML. Ne pas mettre (ingredients[i]) car ______.
}
list() //appelle la fonction



//afficher les ingrédients en liste ordonnée
let ingrlist = new Array() //variable stocke un tableau
function ol() {
    ingr = ["Pâtes", " Oeuf", " Sel", " Poivre", " Oignon", " Lardons", " Parmesan"]
    ingr[1] = "Pates"
    ingr[2] = "Oeufs"
    ingr[3] = "Sel"
    ingr[4] = "Poivre"
    ingr[5] = "Oignon"
    ingr[6] = "Lardons"
    ingr[7] = "Parmesan"

    let olist = ingrlist.sort()
    document.write(olist).innerHTML
}



//afficher la liste des ingrédients alphabet. Ne fonctionne pas quand la fonction du dessus est activée : pourquoi ? Il n'y a pas d'accolade qui indique le début et la fin de la fonction.
let alist = ingredients.sort()
document.write(alist).innerHTML