//****Creating Quantity count in menu*******************************************************
let prodInLocalStorage = JSON.parse(localStorage.getItem("productToOrder"));
console.log(prodInLocalStorage);


//.....stocking the Qty
const stockingQuantities = [];

// Getting the quantities....
for(s = 0; s < prodInLocalStorage.length; s++) {
    let quantitiesInTheCart = prodInLocalStorage[s].quantity * 1;
    stockingQuantities.push(quantitiesInTheCart);

    console.log(stockingQuantities);
}

   //...Use of ".Reduce" method to calculte the total Qty :
    //...ex.: const reducer = (accumulator, currentalue) => accumulator + currentValue;
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const totalQties = stockingQuantities.reduce(reducer, 0)

    const totalQty = document.querySelector(".container_btnMenuPanier");

    const prodInCartQty = `
    <i class="fa fa-shopping-cart"></i>
    <a href="cart.html" class="menu__panier"><b class="total__qty">(${totalQties})</b>Panier</a>`;

    totalQty.innerHTML = prodInCartQty;

    console.log(totalQties);