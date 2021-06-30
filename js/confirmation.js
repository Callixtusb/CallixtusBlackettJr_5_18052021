
//**************************GET ORDER DETAILS**************************
const varOrderId = localStorage.getItem("orderId");
console.log(`Order Id : ${varOrderId}`);

const varContactInfo = JSON.parse(localStorage.getItem("contact"));
console.log(varContactInfo);

const varProdInLocalStorage = JSON.parse(localStorage.getItem("products"));
console.log(varProdInLocalStorage);


//***************************TOTAL PRICE CALCULATION*******************************/
//.....stocking the prices
const stockingPrices = [];

// Getting the prices....
for(s = 0; s < varProdInLocalStorage.length; s++) {
    let pricesInTheCart = varProdInLocalStorage[s].quantity * varProdInLocalStorage[s].Price;
    stockingPrices.push(pricesInTheCart);

    // console.log(stockingPrices);
}

//...Use of ".Reduce" method to calculte the total price :
    //...ex.: const reducer = (accumulator, currentalue) => accumulator + currentValue;
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const totalPrice = stockingPrices.reduce(reducer, 0)

    console.log(totalPrice);


//***************************ORDER ITEMS*******************************/

const articleTitles = `
<span class="titleProdName"><b>Name</b></span> 
<span class="titleColor"><b>Color</b></span>
<span class="titleQty"><b>Quantity</b></span>
<span class="titlePrice"><b>Price</b></span>
<span class="titlePrice"><b>Sub-total</b></span>
`;


let prodInCart = [];

    for(let p = 0; p < varProdInLocalStorage.length; p++){

        prodInCart = prodInCart + 
            `
            <span class="cartDetails">${varProdInLocalStorage[p].name}</span>
            <span class="color">${varProdInLocalStorage[p].product_color}</span>
            <span class="qty">${varProdInLocalStorage[p].quantity}</span>
            <span class="price">${varProdInLocalStorage[p].Price / 100 + ' €'}</span> 
            <span class="subTotal">${varProdInLocalStorage[p].quantity * varProdInLocalStorage[p].Price / 100 + ' €'}</span>
            `;

    }


//***********************************PAGE STRUCTURE**************************************/
const orderInfo = document.querySelector('#confirmation__content');

const pageStructure = `
<div class="confirmation__blocks">

<div class="confirmation__order-summary">
    <p class="confirmation__order-title"><strong>Vos articles</strong></p>
    <hr>
      <div class="confirmation__summary_text_bloc">
      ${articleTitles}
      ${prodInCart}
      </div>
</div>

<div class="confirmation__order-details">
    <p class="confirmation__order-title"><strong>Détail commande</strong></p>
    <hr>
      <div class="confirmation__details_text_bloc">
        <p class="confirmation__details_orderId"><strong>Numéro de commande :</strong> <br> <br><span class="confirmation__details_orderId--eur"> ${varOrderId}</span></p>
        <p class="confirmation__details_Facturation"><strong>Facturation: </strong></p>

        <p class="confirmation__details_subtotal_bloc">
            <span class="confirmation__details_subtotal">Sub-total:</span>
            <span class="confirmation__details_subtotal--eur"> ${totalPrice / 100 + '.00€'}</span>
        </p>
        <p class="confirmation__details_tva_bloc">
            <span class="confirmation__details_tva">TVA:</span>
            <span class="confirmation__details_tva--eur"> 0.00€</span>
        </p>    
        <p class="confirmation__details_total_bloc">
            <span class="confirmation__details_total"><strong>Total:</strong></span>
            <span class="confirmation__details_total--eur"><strong> ${totalPrice / 100 + '.00€'}</strong></span>
        </p>
        <hr>
        <p class="confirmation__details_billingAddress"><strong>Adresse de facturation: </strong></p>
        <p class="confirmation__details_nameBlock">
            <span class="confirmation__details_firstName">${varContactInfo.firstName}</span>
            <span class="confirmation__details_lastName">${varContactInfo.lastName}</span>
        </p>
        <p><span class="confirmation__details_address">${varContactInfo.address}</span></p>
        <span class="confirmation__details_city">${varContactInfo.city}</span>
      </div>
</div>
</div>
`;
orderInfo.insertAdjacentHTML("afterbegin", pageStructure);
