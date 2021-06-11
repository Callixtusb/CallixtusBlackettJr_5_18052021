

//...Product details..............................................
const nounours = [
{colors:["Tan", " Chocolate", " Black", " White"], 
_id:"5be9c8541c9d440000665243", 
name:"Norbert", 
price:2900, 
imageUrl:"http://localhost:3000/images/teddy_1.jpg", 
description:"Magnifique nounours très souple, de 23 cm, qui deviendra très vite le meilleur ami de votre enfant. Tout en douceur, cet ours en peluche est tout mignon avec sa jolie expression du visage qui donne envie de le serrer très fort contre soi dès le premier regard."}, 

{colors:["Pale brown", " Dark brown", " White"], 
_id:"5beaa8bf1c9d440000a57d94", 
name:"Arnold", 
price:3900, 
imageUrl:"http://localhost:3000/images/teddy_2.jpg", 
description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}, 

{colors:["Brown"], 
_id:"5beaaa8f1c9d440000a57d95", 
name:"Lenny and Carl", 
price:5900, 
description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
imageUrl:"http://localhost:3000/images/teddy_3.jpg"}, 

{colors:["Brown", " Blue", " Pink"], 
_id:"5beaabe91c9d440000a57d96", 
name:"Gustav", 
price:4500, 
imageUrl:"http://localhost:3000/images/teddy_4.jpg", 
description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}, 

{colors:["Beige", " Tan", " Chocolate"], 
_id:"5beaacd41c9d440000a57d97", 
name:"Garfunkel", 
price:5500, 
description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
imageUrl:"http://localhost:3000/images/teddy_5.jpg"}
]


//....Display all names...........................................
function afficherNomDesNounours(bears) {
    for(let product of bears)
      console.log(product.name);
}

afficherNomDesNounours(nounours)




//.....Display Total of prices...................................
function afficherPrixTotal(bears) {
    let total = 0;
    for(let product of bears) 
      total += product.price;

        console.log(total);
    
}

afficherPrixTotal(nounours)




//.....Display Names and 50% discounted prices...................................
function afficherMoitiePrix() {
    
    for(let i = 0; i < nounours.length; i++) {
        
       let product = nounours[i];
       let discount = nounours[i];

        console.log(product.name + ' à -50% est à ' + discount.price / 100 *.5 + '€');
    }  
}

afficherMoitiePrix(nounours)




//.....Display Names and 20% discounted prices...................................
function afficherMoinsVingtPourcent() {
    
    for(let i = 0; i < nounours.length; i++) {
        
       let product = nounours[i];
       let discount = nounours[i];

        console.log(product.name + ' à -20% est à ' + discount.price / 100 *(1-0.20) + '€');
    }  
}

afficherMoinsVingtPourcent(nounours)




//.....Display colors..............................................
function afficherColorisDisponibles() {

    for(let i = 0; i < nounours.length; i++) {
        
        let product = nounours[i];
        let coloris = nounours[i]
 
         console.log(product.name + ' est disponible en ' + coloris.colors);
     }
}

afficherColorisDisponibles(nounours)




//.....Display "abordable"..if price is under 30EUR............................................
function afficherSuperieurTrente() {

    for(let i = 0; i < nounours.length; i++) {
        let product = nounours[i];
        let realprice = nounours[i];

        if (realprice.price / 100 > 30) {
            console.log(product.name + ' coûte + de 30€ ' + '(il coûte ' + realprice.price / 100 + '€)');

        } else {
            console.log('');
        } 
     }
}

afficherSuperieurTrente(nounours)




//.....Display la SOMME des descriptions qu'il faut afficher............................................
function afficherSommeDescriptions(bears) {
  
    let total = 0;
      for(let desc of bears)
      total += desc.description;

      console.log(total);

}
afficherSommeDescriptions(nounours)


//.....Attention: gérer les cas où aucune troisième couleur n'existe............................................
function afficherTroisiemeCouleurDispo() {

    for(let i = 0; i < nounours.length; i++) {
        
        let product = nounours[i];
        let coloris = nounours[i];
 
       if(coloris.colors[2]) { 
        console.log(product.name + '\'s 3rd color is' + coloris.colors[2]);
            
        } else {  
            console.log(product.name + ' do not have a 3rd color');
        }
     }
}

afficherTroisiemeCouleurDispo(nounours)




//.....Display an increase of age by ten......................................
function addTenToAge(age) {

    let ageJulie = 12;
    let agePaul = 24; 

    console.log(ageJulie + age);
    console.log(agePaul + age);
}
addTenToAge(10)




//PART III


//.....Option 1 ....afficher les noms des nounours sous forme de paragraphes dans la page........................
function afficherNounoursNameParagraphe() {
  
    let container = document.querySelector(".container");  // Recup

    let div = document.createElement('div');    // Create

        div.innerHTML = 'Norbert, Arnold, Lenny and Carl, <br> Gustave, Garfunkel';
        div.style.fontWeight = 800;
        div.style.padding = "20px 0px 20px 0px";


       container.appendChild(div)    //  Append
    }

afficherNounoursNameParagraphe()



// MULTIPLE ENTRIES
// pour chaque nounours, creer division et a l'interieur, ajoute nom + prix du nounours
function afficherDivAvecNomEtPrixNounours() {

    let bearDivs = document.querySelector(".container"); // (recup) Parent

    function createDivItem (text){

        let div = document.createElement('div');  // Create
        div.textContent = text;
        div.style.color = 'red';
        
        return div;
    }

    let divItems = [                               // Children
                createDivItem('Norbert - 29€'),
                createDivItem('Arnold - 39€'),
                createDivItem('Lenny and Carl - 59€'),
                createDivItem('Gustave - 45€'),
                createDivItem('Garfunkel - 55€')
            ];


    divItems.forEach(function (appDivs){   // Append
        bearDivs.appendChild(appDivs)});
   
} 
afficherDivAvecNomEtPrixNounours(nounours)


// SINGLE ENTRY
// pour chaque nounours, creer division et a l'interieur, ajoute nom + prix du nounours
function afficherDivAvecNomEtPrixNounours2() {

    let container2 = document.querySelector(".container");  // Recup

    let div = document.createElement('div');    // Create

        div.textContent = 'Norbert - 29€';
        div.style.fontWeight = 800;
        div.style.marginBottom = "20px";
        div.style.marginTop = "20px";
        container2.appendChild(div)    //  Append
    }

afficherDivAvecNomEtPrixNounours2()




// reussir a integrer les liens dans la balise src de tag <img>
function afficherPhotoDesNounours() {


    let newImg = document.querySelector(".container");

function create_image(src, width, height, alt, text) {

    let div = document.createElement("div");
    newImg.appendChild(div);

    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    div.appendChild(img);

    let divText = document.createElement("div");
    divText.textContent = text;
    divText.style.marginLeft = "50px";
    div.style.marginBottom = "30px";
    div.appendChild(divText);

    return text;

}

create_image("http://localhost:3000/images/teddy_1.jpg", 200, 133, 'brown fuzzy teddy bear', 'Norbert - 29€');
create_image("http://localhost:3000/images/teddy_2.jpg", 200, 133, 'beige and white teddy bear', 'Arnold - 39€');
create_image("http://localhost:3000/images/teddy_3.jpg", 200, 133, 'brown daddy and baby teddy bear', 'Lenny and Carl - 59€');
create_image("http://localhost:3000/images/teddy_4.jpg", 200, 133, 'Teddy bear with blue sweater', 'Gustave - 45€');
create_image("http://localhost:3000/images/teddy_5.jpg", 200, 133, 'Backward Teddy bear sitting on bed looking a window', 'Garfunkel - 55€');

}      
afficherPhotoDesNounours(nounours)




// combiner tout et faire un apercu du produit (image, nom, prix + bouton "voir produit")
function afficherLeToutSousFormeDeDivisions() {
    let newImg = document.querySelector(".container");

    function create_image(src, width, height, alt, text, nom, url) {
    
        let div = document.createElement("div");
        newImg.appendChild(div);
    
        let img = document.createElement("img");
        img.src = src;
        img.width = width;
        img.height = height;
        img.alt = alt;
        div.appendChild(img);
    
        let divText = document.createElement("div");
        divText.textContent = text;
        divText.style.marginLeft = "50px";
        div.style.marginBottom = "40px";
        div.appendChild(divText);

        let divForm = document.createElement("form");
        divForm.setAttribute("action", url);
        divForm.setAttribute("name", nom);
        div.appendChild(divForm);

        let button = document.createElement("button");
        button.style.marginLeft = "50px";
        button.style.marginTop = "10px";
        button.textContent = "Voir produit";
        divForm.appendChild(button);


        return text;
           
    }
    
    create_image("http://localhost:3000/images/teddy_1.jpg", 200, 133, 'brown fuzzy teddy bear', 'Norbert - 29€', 'Norbert', 'http://127.0.0.1:5500/norbert.html');
    create_image("http://localhost:3000/images/teddy_2.jpg", 200, 133, 'beige and white teddy bear', 'Arnold - 39€', 'Arnold', 'http://127.0.0.1:5500/arnold.html');
    create_image("http://localhost:3000/images/teddy_3.jpg", 200, 133, 'brown daddy and baby teddy bear', 'Lenny and Carl - 59€', 'LennyCarl', 'http://127.0.0.1:5500/lennyCarl.html');
    create_image("http://localhost:3000/images/teddy_4.jpg", 200, 133, 'Teddy bear with blue sweater', 'Gustave - 45€', 'Gustave', 'http://127.0.0.1:5500/gustave.html');
    create_image("http://localhost:3000/images/teddy_5.jpg", 200, 133, 'Backward Teddy bear sitting on bed looking a window', 'Garfunkel - 55€', 'Garfunkel', 'http://127.0.0.1:5500/garfunkel.html');
    
} 
afficherLeToutSousFormeDeDivisions(nounours)




// 5) reussir a faire la page des produit (il ne s'agit plus de faire un apercu des produits comme sur la page d'accueil, mais bien de remplir les informations sur un template de page HTML)






 


