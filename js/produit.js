
// WORKING MODEL///////SINNGLE..TEDDY..FETCH///////SINNGLE..TEDDY..FETCH///////////

function recupProductIdAndDisplayProductDetails() {

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
        const prodImg = product.imageUrl;


        //*******************Structuration et injection de la pesentation du produit***************************
        const productDetails = `
            <div class="produit__card__wrapper">
            <div class="produit__card__content">
                <img src="${prodImg}" alt="${name}" class="productImg"></img>
            <div class="container_text">
                    <h1 class="name"><span>${name}</span></h1>
                    <p class="price"><strong>Price : </strong><span>${prodPrice / 100 + ' €'}</span></p>
                    <p class="description"><strong>Description : </strong><span>${prodDesc}</span></p>
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
                    <button id="addToCart" type="submit " name="ajouterToCart">Ajouter au panier</button>
            </div>
            </div>
            </div>
            `;

        const container = document.querySelector('.container');
        container.innerHTML = productDetails;


    ///***********************Set color options in dropdown*****************************

        const colorOptions = coloris;
        // console.log(colordropdwnQty);

        let colorDropDownStructure = [];

        for(let j = 0; j < colorOptions.length; j++) {

            colorDropDownStructure = colorDropDownStructure + 
                    `
                    <option value="${colorOptions[j]}">${colorOptions[j]}</option>
                    `;

            // console.log(colorQtyStructure);
        }

        const colorSelection = document.querySelector('#theColorSpot');
        colorSelection.innerHTML = colorDropDownStructure;

        // console.log(formSelect);


        //***********************Quantity structure*********************************** 
        const qtyChoice = document.querySelector("#qtyChoice");

        const qtyStructure = `
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        `;

        qtyChoice.innerHTML = qtyStructure;


    //**********************************ADDING PRODUCTS TO CART***************************************

        const colorName = document.querySelector("#theColorSpot");

        ///....selection btn "Add to cart"........//////..........//...
        const btnAddToCart = document.querySelector("#addToCart");

        btnAddToCart.addEventListener("click", (e) => {
        e.preventDefault();

            ///....Customer's color selection.......///////......
            const clientColorChoice = colorName.value;
            console.log(clientColorChoice);

            //....Customer's Quantity selection.......///////......
            const quantityChoice = qtyChoice.value;
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

            ///...Setting up function of the "put in cart" popup... this function is called below in the "If ()".
            const confirmationMessage = () => {
                if (window.confirm(`           ${name} has been added to your cart. 
                Press OK to view cart details or Cancel to continue shopping`)) {
                    window.location.href = "cart.html";
                } else {
                    window.location.href = "product-list.html";
                }
            }
            
            //Creation of variable in which the selected keys and values will be inserted from the local storage.  But if there's nothing in the local storage, an array (see in argument "else" below) will be initiated in order to receive new prodct selections.
            let productsInLocalStorage = JSON.parse(localStorage.getItem("products"));

             /////....Transfer selected product data from form/btn to local storage (this must be in a variable)...../////....///./////...
            ////But first we must check if a copy of the data is not already in the local Storage (using the Boolean effect - if there is somthing, it will return "true").
            if (productsInLocalStorage == null || productsInLocalStorage == 0) {
            
                // Function to add selected product(s) to local storage
                const addProdToLocalStorage = () => {
                    //...add product details to the variable storsgre..
                    productsInLocalStorage.push(prodDetails);
                    //.....Setup to send variable storage to "key" (products) of the local storage.....
                    localStorage.setItem("products", JSON.stringify(productsInLocalStorage));
                };
                
                    //..if there are items in the local storage.
                    if(productsInLocalStorage) {   
                        addProdToLocalStorage();
                        confirmationMessage ();

                    //..if there are no item in the local storage. 
                    } else {
                        productsInLocalStorage = [];
                        addProdToLocalStorage();
                        confirmationMessage ();
                    }

            } else {
                    //...Check in LS if the product with combo 'ID and Color' is already present 
                    const duplicateFound = productsInLocalStorage.find(element => element.productId == prodID && element.product_color == clientColorChoice);
                    console.log(duplicateFound);
                    
                    if (duplicateFound) {
                        console.log('Already in cart');
                        //..If product is present in LS, appliquer filtre par pair Index/ID, Index/name et Index/color and put in variable
                        const newProductsInLocalStorage = productsInLocalStorage.filter((index) => index.productId !== prodID || index.name !== name || index.product_color !== clientColorChoice);
                        
                        //...push product-detail template into the new data filter structure....
                        newProductsInLocalStorage.push(prodDetails);

                        //.....Send variable of new filtered structure to "key" (products) of the local storage.....
                        localStorage.setItem("products", JSON.stringify(newProductsInLocalStorage));

                    } else {
                        // Function to add selected product(s) to local storage
                        const addProdToLocalStorage = () => {
                            //...add product details to the variable storsgre..
                            productsInLocalStorage.push(prodDetails);
                            // console.log(quantityChoice);
                            //....send variable storage to "key" (products) of the local storage.....
                            localStorage.setItem("products", JSON.stringify(productsInLocalStorage));
                            };
                        
                            //..if there are items in the local storage.
                            if(productsInLocalStorage) {   
                                addProdToLocalStorage();
                                confirmationMessage ();

                            //..if there are no item in the local storage. 
                            } else {
                                productsInLocalStorage = [];
                                addProdToLocalStorage();
                                confirmationMessage ();
                            }
                        }
                    
            }
        });
        

    });

}
recupProductIdAndDisplayProductDetails();



function qtyCountInMenu() {
    //****Creating Quantity count in menu*******************************************************
    let productsInLocalStorage = JSON.parse(localStorage.getItem("products"));

    const totalQty = document.querySelector(".container_btnMenuPanier");

        if (productsInLocalStorage === null || productsInLocalStorage == 0) {

            const prodInCartQty = `
            <i class="fa fa-shopping-cart"></i>
            <a href="cart.html" class="menu__panier"><b class="total__qty">(0)</b>Panier</a>`;

            totalQty.innerHTML = prodInCartQty;
            console.log('LocalStorage is empty');

        } else {

            //.....stocking the Qty
            const stockingQuantities = [];

            // Getting the quantities....
            for(s = 0; s < productsInLocalStorage.length; s++) {
                
                let quantitiesInTheCart = productsInLocalStorage[s].quantity * 1;
                stockingQuantities.push(quantitiesInTheCart);
            }
            console.log(stockingQuantities);

            //...Use of ".Reduce" method to calculte the total Qty :
            //...ex.: const reducer = (accumulator, currentalue) => accumulator + currentValue;
            const reducer = (accumulator, currentValue) => accumulator + currentValue
            const totalQties = stockingQuantities.reduce(reducer, 0)

            const totalQty = document.querySelector(".container_btnMenuPanier");
            const prodInCartQty = `
            <i class="fa fa-shopping-cart"></i>
            <a href="cart.html" class="menu__panier"><b class="total__qty">(${totalQties})</b>Panier</a>`;

            totalQty.innerHTML = prodInCartQty;
    }
}
qtyCountInMenu(); 