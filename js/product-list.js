


//...TEDDY BEARS...................................................

async function getProductData() {

    const prodStream = await fetch('http://localhost:3000/api/teddies');
    const productPosts = await prodStream.json();

    console.log(productPosts);

    const newPost = productPosts.map(function(product, index) {
       if (index < 5) { return `
       <a href="./produit.html?_id=${product._id}">
       <div class="blockProduct">
           <div class="namePriceCombo">
               <h3 class="produit__name">${product.name}</h3>
               <p class="produit__price">${product.price / 100 + '€ '}</p>
           </div>
           <div = class="produit__img_container">
               <img src="${product.imageUrl}" alt="${product.name}" class="produit_img"></img>
           </div>
           <button class="VoirProduit">Voir produit</button>
       </div>
     </a>
        `};

        })
        
    .join("");

    // console.log(newPost);

    document.querySelector('#produit__list--post').insertAdjacentHTML("afterbegin", newPost)

}
getProductData()



//****Creating Quantity count in menu*******************************************************
let productsInLocalStorage = JSON.parse(localStorage.getItem("products"));
console.log(productsInLocalStorage);

const totalQty = document.querySelector(".container_btnMenuPanier");

if (productsInLocalStorage === null || productsInLocalStorage == 0) {

    const prodInCartQty = `
    <i class="fa fa-shopping-cart"></i>
    <a href="cart.html" class="menu__panier"><b class="total__qty">(0)</b>Panier</a>`;

    totalQty.innerHTML = prodInCartQty;

} else {

    //.....stocking the Qty
    const stockingQuantities = [];

    // Getting the quantities....
    for(s = 0; s < productsInLocalStorage.length; s++) {
        
        let quantitiesInTheCart = productsInLocalStorage[s].quantity * 1;
        stockingQuantities.push(quantitiesInTheCart);

        console.log(stockingQuantities);
    }

   //...Use of ".Reduce" method to calculte the total Qty :
    //...ex.: const reducer = (accumulator, currentalue) => accumulator + currentValue;
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const totalQties = stockingQuantities.reduce(reducer, 0)

    console.log(totalQties);

    const totalQty = document.querySelector(".container_btnMenuPanier");

    const prodInCartQty = `
    <i class="fa fa-shopping-cart"></i>
    <a href="cart.html" class="menu__panier"><b class="total__qty">(${totalQties})</b>Panier</a>`;

    totalQty.innerHTML = prodInCartQty;

}

   