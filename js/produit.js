


// WORKING MODEL///////SINNGLE..TEDDY..FETCH///////SINNGLE..TEDDY..FETCH///////////

    // ........Recuperation de l'ID via Query String................................
const queryStr_id = window.location.search;
console.log(queryStr_id);

const product = new URLSearchParams(queryStr_id);
console.log(product);

const id = product.get('_id');
console.log(id);



//........Recuperation de des donnees via fetch method................................
const fetchedStream = fetch('http://localhost:3000/api/teddies/' + id);
fetchedStream.then((response) => response.json())

.then((product) => {
    console.log(product);

    const name = product.name;
    const prodPrice = product.price;
    const prodDesc = product.description;
    const coloris = product.colors;
    const prodID = product._id;


    //*******************Structuration et injection de la pesentation du produit***************************
    const productDetails = `
        <div class="produit__card__wrapper">
        <div class="produit__card__content">
            <img src="${product.imageUrl}" alt="${product.name}" class="productImg"></img>
        <div class="container_text">
                <h1 class="name"><span>${product.name}</span></h1>
                <p class="price"><strong>Price : </strong><span>${product.price / 100 + ' €'}</span></p>
                <p class="description"><strong>Description : </strong><span>${product.description}</span></p>
            <div>
                <form>
                    <label for="product_color"><strong>Choose a color :</strong></label>
                    <select name="product_color" id="theColorSpot">

                    </select>        
                </form>
                <br>

                <form>
                <label for="quantity"><strong>Quantity :</strong></label>
                <select name="quantity" id="qtyChoice">

                </select>
                </form>
            </div>
                <button id="addToCart" type="submit " name="ajouterToCart">Add to cart</button>
        </div>
        </div>
        </div>
        `;

    const container = document.querySelector('.container');
    container.innerHTML = productDetails;


///***********************Set Quantity of color choices in the dropdown*****************************

    const colordropdwnQty = product.colors;
    // console.log(colordropdwnQty);

    let colorQtyStructure = [];

    for(let j = 0; j < colordropdwnQty.length; j++) {

        colorQtyStructure = 
        colorQtyStructure + 
                `
                <option value="${colordropdwnQty[j]}">${colordropdwnQty[j]}</option>
                `;

        // console.log(colorQtyStructure);
    }

    const formSelect = document.querySelector('#theColorSpot');
    formSelect.innerHTML = colorQtyStructure;

    // console.log(formSelect);


    //....Quantity.structure.........................////............ 
    const containerOfQtyStructure = document.querySelector("#qtyChoice");

    const qtyStructure = `
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    `;

    containerOfQtyStructure.innerHTML = qtyStructure;


//**********************************ADDING PRODUCTS TO CART***************************************

    const formName = document.querySelector("#theColorSpot");

    ///....selection btn "Add to cart"........//////..........//...
    const btnSendSelection = document.querySelector("#addToCart");
    btnSendSelection.addEventListener("click", (e) => {
        e.preventDefault();

            ///....Customer's color selection.......///////......
            const clientColorChoice = formName.value;
            console.log(clientColorChoice);

            //....Customer's Quantity selection.......///////......
            const quantityChoice = containerOfQtyStructure.value;
            console.log(quantityChoice);

            //.... Data elements to be retrieved from the form for confirmation........//////.......///
            const prodDetails = {
                name: product.name,
                productId: prodID,
                product_color: clientColorChoice,
                quantity: quantityChoice,
                Price: prodPrice,
                sub_total: quantityChoice * prodPrice
            };
            // console.log(sub_total);

            ///...Setting up function of the "put in the cart" popup... this function is called below in the "If ()".
            const confirmationMessage = () => {
                if (window.confirm(`           ${name} has been added to your cart. 
                Press OK to view cart details or Cancel to continue shopping`)) {
                    window.location.href = "cart.html";
                } else {
                    window.location.href = "product-list.html";
                }
            }

            /////....Transfer selected product data from form/btn to local storage (this must be in a variable)...../////....///./////...
            ////But first we must check if a copy of the data is not already in the local Storage (using the Boolean effect - if there is somthing, it will return "true").
            /// RULE... Arr/Obj---> thru--JSON.stringify---> to transfer data to local Storage.
            /// RULE... local Storage---> thru--JSON.parse---> to get Arr/Obj from local Storage.
            
            //Creation of variable in which the selected keys and values will be inserted:
            let productsInLocalStorage = JSON.parse(localStorage.getItem("products"));
            // console.log(prodToLocalStorage);

            if(productsInLocalStorage) {   //..checks if item is already in local storage. Comes back 'false/null'... true if not....
                productsInLocalStorage.push(prodDetails);
                //.....Setup to send variable storage to local storage.....
                localStorage.setItem("products", JSON.stringify(productsInLocalStorage));
                confirmationMessage ();
                console.log(productsInLocalStorage);


            } else {
                productsInLocalStorage = [];
                productsInLocalStorage.push(prodDetails);
                //.....Setup to send variable storage to local storage.....
                localStorage.setItem("products", JSON.stringify(productsInLocalStorage));
                confirmationMessage ();
                console.log(productsInLocalStorage);
    
            }

    });

});



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

