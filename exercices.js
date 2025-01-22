const MaBoutique = "La Bonne Potions"
let potionsDeSoinsEnStock = 100;
let prixPotionDeSoin = 15.99;
let boutiqueOuverte = true;
let quantitePotion = 50 ;

if (boutiqueOuverte) {
    console.log("Bienvenue dans la boutique <La Bonne Potion> Aventurier ! 🎉 !");
} else {
    console.log("La boutique <La Bonne Potion> est fermée, revenez plus tard Aventurier ! 😴.");
}
function afficherMenu() {
    console.log("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔");
    console.log("1. Le nom de la boutique");
    console.log("2. Le nom du Sorcier");
    console.log("3. Le prix d'un potion de soin");
    console.log("4. La quantité d'une potion de soin");

    let choix = parseInt(prompt("Entrez le numéro de votre choix (1 à 4) :"), 10);
    return choix;
}


switch (choix){
case 1:
    console.log("1. La Bonne Potion")
    break

case 2:
    console.log("2. Merlin")
    break

case 3:
    console.log("Le prix d'une potion de soin est de : 25 pièces d'or.");
    break;

case 4:
    console.log("La quantité d'une potion de soin est de : 3 flacons disponibles.");
    break;

default:
    console.log("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕");
    break;
}