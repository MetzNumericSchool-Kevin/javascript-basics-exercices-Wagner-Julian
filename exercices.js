const MaBoutique = "La Bonne Potions"
let potionsDeSoinsEnStock = 100;
let prixPotionDeSoin = 15;
let boutiqueOuverte = true;
let quantitePotion = prompt("veuillez saisir le nombre de potion") ;
let prixTotal = prixPotionDeSoin*quantitePotion;
let BourseAventurier= 300
let objet= { nom: 'Potion de Mana'}


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
    console.log("Le prix d'une potion de soin est de : 15.99.");
    break;

case 4:
    console.log("La quantité d'une potion de soin est de : 50 ml.");
    break;

default:
    console.log("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕");
    break;
}

console.log(`Prix de ${quantitePotion} potions de soins : ${prixTotal.toFixed(2)} 🪙 mon cher Aventurier. 💸`);

if (quantitePotion > potionsDeSoinsEnStock) {
    console.log("Désolé, il n'y a pas assez de potions en stock pour satisfaire votre demande.");
} else if (prixTotal > bourseAventurier) {
    console.log("Désolé, vous n'avez pas assez d'argent pour acheter cette quantité de potions.");
} else {
    
    potionsDeSoinsEnStock -= quantitePotion;
    bourseAventurier -= prixTotal;

    
    console.log(`Achat réussi ! Vous avez acheté ${quantitePotion} potions de soins pour ${prixTotal.toFixed(2)} 🪙.`);
    console.log(`Il vous reste ${bourseAventurier.toFixed(2)} 🪙 dans votre bourse.`);
    console.log(`Il reste ${potionsDeSoinsEnStock} potions de soins en stock.`);
}


let potion = ["Potion de soin", "Potion de soin majeur", "Potion de guerison" , "Potion currative"]; 
console.log= ( "La premier potion est" + potion[0])
console.log= ("La derniere potion est" + potion[potion.lenght-1])
for (let i = 0; i < potion.lenght; i++) {
    console.log(potion[i]);
}

potion.push(objet);
console.log(potion)

