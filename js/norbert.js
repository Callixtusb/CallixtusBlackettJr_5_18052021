
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
    
    
    let product = document.querySelector(".container");
    product.style.width ="450px";

    let namePriceDiv = document.createElement("div");
    namePriceDiv.setAttribute("class", "PriceNameBloc");
    product.appendChild(namePriceDiv);

    let PriceNameBlock = document.querySelector(".PriceNameBloc");
    PriceNameBlock.style.display = "flex";
    PriceNameBlock.style.justifyContent = "space-between";

    let titleName = document.createElement("h1");
    namePriceDiv.appendChild(titleName);

    let titlePrice = document.createElement("h1");
    titlePrice.style.color = "red";
    namePriceDiv.appendChild(titlePrice);

    let productName = nounours[0];
    titleName.append(productName.name);

function prix () {
    let prix = nounours[0];
    prix = prix.price / 100;
    titlePrice.append(prix + ' €');
}
prix ()

    let presTitle = document.createElement("h3");
    product.appendChild(presTitle);
    presTitle.style.marginBottom = 0;

    let presTitleName = document.createTextNode("Présentation produit :");
    presTitle.appendChild(presTitleName);   

    let divPres = document.createElement("p");
    divPres.style.width = "450px";

    let desc = nounours[0];
    product.append(desc.description);

    divPres.style.marginTop = 0;
    product.appendChild(divPres);

    let divImg = document.createElement("div");
    product.appendChild(divImg);

    let img = document.createElement("img");
    img.src = "http://localhost:3000/images/teddy_1.jpg";
    img.width = 450;
    img.height = 299;
    img.alt = 'brown fuzzy teddy bear';
    divImg.appendChild(img);

    let divSpecs = document.createElement("div");
    divSpecs.textContent = "Couleurs : ";
    divSpecs.style.fontWeight = 700;
    divSpecs.style.marginTop = "10px";
    divImg.appendChild(divSpecs);

    let coloris = nounours[0];
    divImg.append(coloris.colors);


    //.....Back button...........................................
function backBtn (url) {
    let divForm = document.createElement("form");
    divForm.setAttribute("action", url);
    product.appendChild(divForm);
    divForm.style.width ="450px";

    let btnBack = document.createElement("button");
    btnBack.textContent = "Back";
    btnBack.style.marginLeft = "50%";
    btnBack.style.marginTop ="20px";
    divForm.appendChild(btnBack);   
}
backBtn ("http://127.0.0.1:5500/?Norbert=Voir+produit")







