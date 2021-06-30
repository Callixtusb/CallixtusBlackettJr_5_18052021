
//Creation of variable in which the selected keys and values will be inserted:
/// RULE... Arr/Obj---> thru--JSON.stringify---> to transfer data to local Storage.
/// RULE... local Storage---> thru--JSON.parse---> to get Arr/Obj from local Storage.


let productsInLocalStorage = JSON.parse(localStorage.getItem("products"));
// console.log(productsInLocalStorage);


function addProductsToCart () {
    //Alimentation du panier..............
    const prodAdditionToCart = document.querySelector(".container__recap--in-Cart");
    const totalQty = document.querySelector(".container_btnMenuPanier");

    //...Indicate if the cart is empty otherwise add selected product and add quantity choice to cart....
    if (productsInLocalStorage === null || productsInLocalStorage == 0) {
        let cartIsEmpty =`
        <div class="panierVideMessage">
        <div>Votre panier est vide.</div>
        </div>`;
        prodAdditionToCart.innerHTML = cartIsEmpty;

        //...also indicate "(0)" in menu button when cart is empty..
        const prodInCartQty = `
        <i class="fa fa-shopping-cart"></i>
        <a href="cart.html" class="menu__panier"><b class="total__qty">(0)</b>Panier</a>`;

        totalQty.innerHTML = prodInCartQty;

        
    } else {

        let prodInCart = [];

        for(let p = 0; p < productsInLocalStorage.length; p++){

            prodInCart = prodInCart + 
                `
                <p class="cartDetails"><a href="#" class="product_name">${productsInLocalStorage[p].name}</a> 
                <span class="color">${productsInLocalStorage[p].product_color}</span>
                <span class="qty">${productsInLocalStorage[p].quantity}</span>
                <span class="price">${productsInLocalStorage[p].Price / 100 + ' €'}</span>
                <span class="subTotal">${productsInLocalStorage[p].quantity * productsInLocalStorage[p].Price / 100 + ' €'}</span>
                <button class="btnSupprimer">Supprimer</button>
                </p>
                `;

                const prodAddToCart = document.querySelector(".container__recap--in-Cart");
                prodAddToCart.innerHTML = prodInCart;
        }


        //.....stocking the Qty amount....
        const stockingQuantities = [];

        // Getting the quantities....
        for(s = 0; s < productsInLocalStorage.length; s++) {
            let quantitiesInTheCart = productsInLocalStorage[s].quantity * 1;
            stockingQuantities.push(quantitiesInTheCart);

            // console.log(stockingQuantities);
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

            // console.log(totalQties);

    };
};
addProductsToCart ();


//****************************DELETE BUTTON TO REMOVE INDIVIDUAL ITEMS FROM CART************************************

function removeItemFromCart() {

    let btnSupprimer = document.querySelectorAll(".btnSupprimer");
    // console.log(btnSupprimer);   


    for (r = 0; r < btnSupprimer.length; r++) {

        // const itemColor = productsInLocalStorage[r].product_color;
        const itemID = productsInLocalStorage[r].productId;
        // console.log(itemID);

        btnSupprimer[r].addEventListener("click" , (event) => {
            event.preventDefault();

            productsInLocalStorage = productsInLocalStorage.filter(item => item.productId !== itemID);

            localStorage.setItem("products", JSON.stringify(productsInLocalStorage));
            window.location.href = "cart.html";

        });

    }
};
removeItemFromCart();
console.log(productsInLocalStorage);


//****************************DELETE BUTTON TO EMPTY CART************************************

function epmtyCart() {
    const tableTitles = document.querySelector(".cartDetailsTitles");

    const epmtiedCart = `
    <span class="titleProdName"><b>Name</b></span> 
    <span class="titleColor"><b>Color</b></span>
    <span class="titleQty"><b>Quantity</b></span>
    <span class="titlePrice"><b>Price</b></span>
    <span class="titlePrice"><b>Sub-total</b></span>
    <button class="btnViderPanier"><b>Vider le panier</b></button>
    `;
    tableTitles.innerHTML = epmtiedCart;

        const btnViderPanier = document.querySelector(".btnViderPanier");
        // console.log(btnViderPanier);

        btnViderPanier.addEventListener("click", (event) => {
            event.preventDefault();

            localStorage.removeItem('products');

            alert('Votre panier a été vidé');
            window.location.href = "cart.html";

        });
};
epmtyCart ();


//***************************QUANTITIES AND TOTAL CALCULATIONS******************************

function priceCalculations () {
//...Indicate if the cart is empty otherwise calculate individual and total prices..
if (productsInLocalStorage === null || productsInLocalStorage == 0) {
    let cartIsEmpty =`
    <div class="panierVideMessage">
    <div>Votre panier est vide.</div>
    </div>`;
    prodAdditionToCart.innerHTML = cartIsEmpty;

} else {    
    //.....stocking the prices
    const stockingPrices = [];

    // Getting the prices....
    for(s = 0; s < productsInLocalStorage.length; s++) {
        let pricesInTheCart = productsInLocalStorage[s].quantity * productsInLocalStorage[s].Price;
        stockingPrices.push(pricesInTheCart);

        // console.log(stockingPrices);
    }

    //...Use of ".Reduce" method to calculte the total price :
        //...ex.: const reducer = (accumulator, currentalue) => accumulator + currentValue;
        const reducer = (accumulator, currentValue) => accumulator + currentValue
        const totalPrice = stockingPrices.reduce(reducer, 0)

        //..Added total price function...
        const cartTotalPrice = document.querySelector('.cartTotalPrice');
        const containerCartTotalPrice = `
            <span class="titleTotal">Total</span> 
            <span class=" "><b> </b></span>
            <span class="titleTotalQty"><b> </b></span>
            <span class="spaceHolder"><b></b></span>
            <span class="price_total"><b>${totalPrice / 100 + ' €'}</b></span>
        `;
        cartTotalPrice.innerHTML = containerCartTotalPrice;
        // console.log(totalPrice);
}
};
priceCalculations ();




/////******************************ORDER FORM*********************************** */

const showHtmlForm = () => {

    const containerCommandeForm = document.querySelector('.container__wrapper--block_pmt');

    const formStructure = `
    <div class="container__wrapper--forms">

        <form>

        <div class="container__content--forms">
            <div class="container__content--billing">
            <h3>Coordonnées</h3>
            <label for="firstName"><i class="fa fa-user"></i> Prénom</label><span id="firstNameError"></span>
            <input type="text" id="firstName" name="firstName" placeholder="Callixtus" required/>

            <label for="lastName"><i class="fa fa-user"></i> Nom</label><span id="lastNameError"></span>
            <input type="text" id="lastName" name="lastName" placeholder="Blackett Jr" required/>

            <label for="address"><i class="fa fa-address-card-o"></i> Adresse</label><span id="addressError"></span>
            <input type="text" id="address" name="address" placeholder="213 Jefferson ave" required/>

            <label for="city"><i class="fa fa-institution"></i> Ville</label><span id="cityError"></span>
            <input type="text" id="city" name="city" placeholder="Bklyn, New York" required/>

            <label for="email"><i class="fa fa-envelope"></i> Email</label><span id="emailError"></span>
            <input type="text" id="email" name="email" placeholder="c.blackettjr@example.com" required/>

            </div>

        </div>

        <button type="submit" value="btnCheckout" class="btnCheckout">Continue to checkout</button>

        </form>
    </div>  
    

    `;

    containerCommandeForm.innerHTML = formStructure

};
showHtmlForm();



//*************************************USER INPUT VALIDATION************************************* */

function validateUserInput() {

//........Getting input-info from form and send to local storage :

    const btnCheckout = document.querySelector(".btnCheckout");
    btnCheckout.addEventListener("click", (e) => {
        e.preventDefault();

            //..Get info from form :
            class form {
                constructor() {
                    this.firstName = document.querySelector("#firstName").value,
                    this.lastName = document.querySelector("#lastName").value, 
                    this.address = document.querySelector("#address").value,
                    this.city = document.querySelector("#city").value,                                          
                    this.email = document.querySelector("#email").value
                }
            }

            //...Call Class "form" to create "form" object :
            const contact = new form();
                // console.log(contact);
                

            //*******************************************VALIDATION OF THE FORM**********************************************/
            //This is where we must make sure the form has been properly populated before.. 
            //sending the data to the local storage (implementing REGEX (REGULAR EXPRESSION) validation with ).
            const alertEntryError = (value) => {
                return `Your ${value} must be of only : \n Capital or lowercase letters, spaces \n Min. of 3 and max. of 21`;
            }
            const regExpFullnameVilleRegionCcardName = (value) => {
                return /^([A-Za-z \t]{3,25})?([-]{0,1})?([A-Za-z \t]{3,25})$/.test(value);
            }

            //..Function to handle appearance of error message above each "fullname" field.......
            function inputErrorMessageDisappear (querySelectorId){
                document.querySelector(`#${querySelectorId}`).textContent = "";
            };

            function inputErrorMessage (querySelectorId){
                document.querySelector(`#${querySelectorId}`).textContent = "Veuillez corriger ce champ.";
            };

            function validationOfFirstName() {
            //.."firstName" validation...Name must be of only letters (capital or lowercase), 
            //..spaces + letters must be a mini of 3 and 21 max. 
                const nameValidation = contact.firstName;
                if (regExpFullnameVilleRegionCcardName(nameValidation)) {
                    inputErrorMessageDisappear("firstNameError");
                    return true;
                } else {
                    inputErrorMessage("firstNameError");
                    alert(alertEntryError("firstName"));
                    return false;
                };
            }

            function validationOfLastName() {
                //.."lastName" validation...Name must be of only letters (capital or lowercase), 
                //..spaces + letters must be a mini of 3 and 21 max. 
                    const nameValidation = contact.lastName;
                    if (regExpFullnameVilleRegionCcardName(nameValidation)) {
                        inputErrorMessageDisappear("lastNameError");
                        return true;
                    } else {
                        inputErrorMessage("lastNameError");
                        alert(alertEntryError("lastName"));
                        return false;
                    };
                }

            
            function validationOfVille() {
                //.."Ville" validation...Ville must be of only letters (capital or lowercase), 
                //..spaces + letters must be a mini of 3 and 21 max. 
                    const villeValidation = contact.city;
                    if (regExpFullnameVilleRegionCcardName(villeValidation)) {
                        inputErrorMessageDisappear("cityError");
                        return true;
                    } else {
                        alert(alertEntryError("city"));
                        inputErrorMessage("cityError");
                        return false;
                    };
                }

            //********* ADDRESS VALIDATION**********/
            const regExpAdresse = (value) => {
                return /^(\d{1,}) [a-zA-Z0-9\s]+(\.)? [a-zA-Z\s]+(\,)?$/.test(value);
            }

            function validationOfAdresse() {
            //.."address" validation... digits not accepted in 2nd part address.
                const adresseValidation = contact.address;
                if (regExpAdresse(adresseValidation)) {
                    inputErrorMessageDisappear("addressError");
                    return true;
                } else {
                    alert("Votre adresse n'est pas valid");
                    inputErrorMessage("addressError");
                    return false;
                };
            }


            //********* EMAIL VALIDATION**********/
            const regExpEmail = (value) => {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
            }

            function validationOfEmail() {
            //.."email" validation...limited to alphanumeric & underscore entries, with an @ symbol 
            //..spaces + letters must be a mini of 3 and 21 max. 
                const emailValidation = contact.email;
                if (regExpEmail(emailValidation)) {
                    inputErrorMessageDisappear("emailError");
                    return true;
                } else {
                    alert("Your email is not valid");
                    inputErrorMessage("emailError");
                    return false;
                };
            }

            //************************SEND TO LOCAL STORAGE AFTER VALIDATION OF FIELDS**********************************************/

            if (validationOfFirstName() &&
                validationOfLastName() &&
                validationOfAdresse() &&
                validationOfVille() &&
                validationOfEmail() ){

            //..Sending the input data to the local storage if argument "if" returns "true":
            localStorage.setItem("contact", JSON.stringify(contact));
            }else{
                alert("Please review and correct your entries.");
            }

    });

}
validateUserInput();



//************************LOAD FIELD WITH USER INFO**********************************************/

function fieldReloadWithUserInput () {
///....Objective : Keep user input in fields after page reloads - Hence, get local storage to keep field populated.
//...Putting local storage data (strings) into a variable
const loadedData = localStorage.getItem("contact");

//...Convert the strings into an Js object.
const loadedDataInField = JSON.parse(loadedData);

///....Keep user details from disappearing after a page reload - Populate the field.
if(loadedDataInField == null) {
    console.log("Local storage is empty");
    } else {

    document.querySelector("#firstName").value = loadedDataInField.firstName;
    document.querySelector("#lastName").value = loadedDataInField.lastName;
    document.querySelector("#address").value = loadedDataInField.address;   
    document.querySelector("#city").value = loadedDataInField.city;     
    document.querySelector("#email").value = loadedDataInField.email;
    }

    // console.log(loadedDataInField);

}
fieldReloadWithUserInput();
    




//************************BUILD OBJECT OF PRODUCT & CONTACT ORDER INFORMATION**********************************************/
function OrderInfo() {

    let btnCheckout = document.querySelector(".btnCheckout");
    btnCheckout.addEventListener("click", (e) => {
        e.preventDefault();

        //...Building Contact object & Product array...
        const infoToSendToServer = {
            
            contact : {   
            firstName: document.querySelector("#firstName").value,
            lastName: document.querySelector("#lastName").value,
            address: document.querySelector("#address").value,
            city: document.querySelector("#city").value,
            email: document.querySelector("#email").value
            },

            products : []
        };

        let productIDs = JSON.parse(localStorage.getItem("products"));
            productIDs.forEach(objectTeddies => { 
            infoToSendToServer.products.push(objectTeddies.productId);
        });
        console.log(infoToSendToServer);  
        
        //...Sending product and user data to server.......
        let sendToServer = fetch('http://localhost:3000/api/teddies/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode:'cors',
            body: JSON.stringify(infoToSendToServer)
        });
                //...View response from server.......
                sendToServer.then(async(response)=>{
                    try{
                        const content = await response.json();
                        console.log("content from server:");
                        console.log(content);
                        console.log(response);

                        if(response.ok) {
                            console.log(`Results of response.ok : ${response.ok}`);

                            //..Get Order Id...
                            console.log("Order Id from server :");
                            console.log(content.orderId);

                            //..Put Order Id in the local storage...
                            localStorage.setItem("orderId", content.orderId);

                            //..Go to confirmation page...
                            window.location.href = "confirmation.html";

                        }else {
                            console.log(`Response status : ${response.status}`);
                            alert(`Problem with the server : ${response.status}`);
                        };


                    }catch(e){
                        console.log(e);
                    }
                })

    });
}
OrderInfo();
console.log("Object sent to server:");
