
//Creation of variable in which the selected keys and values will be inserted:
/// RULE... Arr/Obj---> thru--JSON.stringify---> to transfer data to local Storage.
/// RULE... local Storage---> thru--JSON.parse---> to get Arr/Obj from local Storage.


let prodInLocalStorage = JSON.parse(localStorage.getItem("productToOrder"));
console.log(prodInLocalStorage);

// let prodIncreaseInLocalStorage = JSON.parse(localStorage.getItem("productToOrder"));
// console.log(prodInLocalStorage);

//Alimentation du panier..............
const prodAdditionToCart = document.querySelector(".container__recap--in-Cart");
const totalQty = document.querySelector(".container_btnMenuPanier");

//...Indicate whether or not the cart is empty..
if (prodInLocalStorage === null || prodInLocalStorage == 0) {
    let cartIsEmpty =`
    <div class="panierVideMessage">
    <div>Votre panier est vide.</div>
    </div>`;
    prodAdditionToCart.innerHTML = cartIsEmpty;

    //...also indicate "(0)" when cart is empty..
    const prodInCartQty = `
    <i class="fa fa-shopping-cart"></i>
    <a href="cart.html" class="menu__panier"><b class="total__qty">(0)</b>Panier</a>`;

    totalQty.innerHTML = prodInCartQty;

    
} else {

    let prodInCart = [];

    for(let p = 0; p < prodInLocalStorage.length; p++){

        prodInCart = prodInCart + 
            `
            <p class="cartDetails"><a href="#" class="product_name">${prodInLocalStorage[p].name}</a> 
            <span class="color">${prodInLocalStorage[p].product_color}</span>
            <span class="qty">${prodInLocalStorage[p].quantity}</span>
            <span class="price">${prodInLocalStorage[p].Price / 100 + ' €'}</span>
            <span class="subTotal">${prodInLocalStorage[p].quantity * prodInLocalStorage[p].Price / 100 + ' €'}</span>
            <button class="btnSupprimer">Supprimer</button>
            </p>
            `;

            const prodAddToCart = document.querySelector(".container__recap--in-Cart");
            prodAddToCart.innerHTML = prodInCart;

 
    console.log(prodInLocalStorage[p].name);                
    console.log(prodInLocalStorage[p].product_color);
    console.log(prodInLocalStorage[p].productId);

    }


//.....stocking the Qty amount....
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

}



//...Delete buttons..............///....../////..........

//     // (for Option 1 & 2)
let btnSupprimer = document.querySelectorAll(".btnSupprimer");
console.log(btnSupprimer);   


for (r = 0; r < btnSupprimer.length; r++) {

//     // (for Option 1)
    // const button = btnSupprimer[r]

//     // (for Option 2)
    const itemID = prodInLocalStorage[r].productId;
    // const itemModifID = prodInLocalStorage.productId;
    console.log(itemID); 
    // console.log(itemModifID); 

    btnSupprimer[r].addEventListener("click" , (event) => {
        event.preventDefault();
        
//         // Option 1 (working but not removing item from local storage)
        // const btnSupprimerClicked = event.target
        // btnSupprimerClicked.parentElement.remove()

//         // Option 2 (working in console.log but need to refresh page for itrm to disappear)
        prodInLocalStorage = prodInLocalStorage.filter(item => item.productId !== itemID);
        console.log(prodInLocalStorage);
        localStorage.setItem("productToOrder", JSON.stringify(prodInLocalStorage));
        window.location.href = "cart.html";

    });

}

//Delete Button to empty cart.......

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

    localStorage.removeItem('productToOrder');

    alert('Votre panier a été vidé');
    window.location.href = "cart.html";

});


// ... Quantity and total calculation...........................
//...Indicate whether or not the cart is empty..
if (prodInLocalStorage === null || prodInLocalStorage == 0) {
    let cartIsEmpty =`
    <div class="panierVideMessage">
    <div>Votre panier est vide.</div>
    </div>`;
    prodAdditionToCart.innerHTML = cartIsEmpty;

} else {    
    //.....stocking the prices
    const stockingPrices = [];

    // Getting the prices....
    for(s = 0; s < prodInLocalStorage.length; s++) {
        let pricesInTheCart = prodInLocalStorage[s].quantity * prodInLocalStorage[s].Price;
        stockingPrices.push(pricesInTheCart);

        console.log(stockingPrices);
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
        console.log(totalPrice);
    
}

/////...............................Order form///........................

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
        <label> <input type="checkbox" checked="checked" name="sameadr" /> Adresse de livraison pareil que l'adresse de facturation </label>

        <button type="submit" value="btnCheckout" class="btnCheckout">Continue to checkout</button>

        </form>
    </div>  
    

    `;

    containerCommandeForm.innerHTML = formStructure

};
showHtmlForm();

//*************************************************************** */
/* <div class="container__wrapper--forms">

<form>

<div class="container__content--forms">
    <div class="container__content--billing">
    <h3>Billing Address</h3>
    <label for="fname"><i class="fa fa-user"></i> Nom complet</label><span id="nameError"></span>
    <input type="text" id="fname" name="fullname" placeholder="Callixtus Blackett Jr" required/>
    <label for="email"><i class="fa fa-envelope"></i> Email</label><span id="emailError"></span>
    <input type="text" id="email" name="email" placeholder="c.blackettjr@example.com" required/>
    <label for="adr"><i class="fa fa-address-card-o"></i> Adresse</label><span id="adrError"></span>
    <input type="text" id="adr" name="adresse" placeholder="213 Jefferson ave" required/>
    <label for="Ville"><i class="fa fa-institution"></i> Ville</label><span id="villeError"></span>
    <input type="text" id="ville" name="Ville" placeholder="Bklyn, New York" required/>

    <div class="container--state_zip">
        <div class="container__content--zip">
        <label for="zip">Code postal</label><span id="zipError"></span>
        <input type="text" id="zip" name="zip" placeholder="11216" required/>
        </div>

        <div class="container__content--state">
        <label for="state">Region</label><span id="regionError"></span>
        <input type="text" id="region" name="region" placeholder="NY" required/>
        </div>
    </div>
    </div>

    <div class="container__content--payment">
    <h3>Payment</h3>
    <label for="fname">Cartes accepté</label>
    <div class="icon-container">
        <i class="fa fa-cc-visa"></i>
        <i class="fa fa-cc-amex"></i>
        <i class="fa fa-cc-mastercard"></i>
        <i class="fa fa-cc-discover"></i>
    </div>
    <label for="cname">Nom sur Carte</label><span id="cnameError"></span>
    <input type="text" id="cname" name="cardname" placeholder="C. Blackett Jr" />
    <label for="ccnum">Numéro de carte</label><span id="ccnumError"></span>
    <input type="text" id="ccnum" name="cardnumber" placeholder="1111222233334444" />
    <label for="expmonth">Mois Exp</label><span id="expmonthError"></span>
    <input type="text" id="expmonth" name="expmonth" placeholder="September" />

    <div class="container--exp_cvv">
        <div class="container__content--exp">
        <label for="expyear">Année Exp</label><span id="expyearError"></span>
        <input type="text" id="expyear" name="expyear" placeholder="2018" />
        </div>
        <div class="container__content--cvv">
        <label for="cvv">CVV</label><span id="cvvError"></span>
        <input type="text" id="cvv" name="cvv" placeholder="352" />
        </div>
    </div>
    </div>
</div>
<label> <input type="checkbox" checked="checked" name="sameadr" /> Adresse de livraison pareil que l'adresse de facturation </label>

<button type="submit" value="btnCheckout" class="btnCheckout">Continue to checkout</button>

</form>
</div>  */


//*************************************************************** */

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
                // this.region = document.querySelector("#region").value,
                // this.zip = document.querySelector("#zip").value,
                // this.cardname = document.querySelector("#cname").value,
                // this.cardnumber = document.querySelector("#ccnum").value,
                // this.expmonth = document.querySelector("#expmonth").value,
                // this.expyear = document.querySelector("#expyear").value,
                // this.cvv = document.querySelector("#cvv").value
            }
        }

        //...Call Class "form" to create "form" object :
        const contact = new form();
            console.log(contact);
            

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


// function validationOfRegion() {
        //     //.."region" validation...region must be of only letters (capital or lowercase), 
        //     //..spaces + letters must be a mini of 3 and 21 max. 
        //         const regionValidation = contact.region;
        //         if (regExpFullnameVilleRegionCcardName(regionValidation)) {
        //             inputErrorMessageDisappear("regionError");
        //             return true;
        //         } else {
        //             alert(alertEntryError("region"));
        //             inputErrorMessage("regionError");
        //             return false;
        //         };
        //     }

        // function validationOfCcardName() {
        //     //.."Cardname" validation... must be of only letters (capital or lowercase), 
        //     //..spaces + letters must be a mini of 3 and 21 max. 
        //         const ccardNameValidation = contact.cardname;
        //         if (regExpFullnameVilleRegionCcardName(ccardNameValidation)) {
        //             inputErrorMessageDisappear("cnameError");
        //             return true;
        //         } else {
        //             alert(alertEntryError("cardname"));
        //             inputErrorMessage("cnameError");
        //             return false;
        //         };
        //     }

        //********* ZIP-CODE VALIDATION**********/
        // const regExpZip = (value) => {
        //     return /^[0-9]{5}$/.test(value);
        // }

        // function validationOfZip() {
        // //.."Zip" validation... Only 5 digits are allowed (and no spaces).
        //     const zipValidation = contact.zip;
        //     if (regExpZip(zipValidation)) {
        //         inputErrorMessageDisappear("zipError");
        //         return true;
        //     } else {
        //         alert("Votre code postal n'est pas valid");
        //         inputErrorMessage("zipError");
        //         return false;
        //     };
        // }

        // //********* CREDIT CARD NUMBER VALIDATION**********/
        // const regExpCcnum = (value) => {
        //     return /^4[0-9]{15}$/.test(value);
        // }

        //     function validationOfCcnum() {
        //     //.."Ccnum" validation... Only 16 digits are allowed (and no spaces).
        //         const ccnumValidation = contact.cardnumber;
        //         if (regExpCcnum(ccnumValidation)) {
        //             inputErrorMessageDisappear("ccnumError");
        //             return true;
        //         } else {
        //             alert("Votre numéro de carte n'est pas valid");
        //             inputErrorMessage("ccnumError");
        //             return false;
        //         };
        //     }

        //********* CREDIT CARD EXP MONTH VALIDATION**********/
        // const regExpExpmonth = (value) => {
        //     return /^[A-Za-z]{3,8}$/.test(value);
        // }          

        //     function validationOfExpmonth() {
        //         //.."expmonth" validation... Only letters are allowed (and no spaces).
        //             const expmonthValidation = contact.expmonth;
        //             if (regExpExpmonth(expmonthValidation)) {
        //                 inputErrorMessageDisappear("expmonthError");
        //                 return true;
        //             } else {
        //                 alert("Votre mois d'expiration de carte n'est pas valid");
        //                 inputErrorMessage("expmonthError");
        //                 return false;
        //             };
        //         }
    
        //********* CREDIT CARD EXP YEAR VALIDATION**********/
        // const regExpExpyear = (value) => {
        //     return /^[0-9]{4}$/.test(value);
        // }

        //     function validationOfExpyear() {
        //     //.."expyear" validation... Only 4 digits are allowed (and no spaces).
        //         const expyearValidation = contact.expyear;
        //         if (regExpExpyear(expyearValidation)) {
        //             inputErrorMessageDisappear("expyearError");
        //             return true;
        //         } else {
        //             alert("Votre année d'expiration n'est pas valid");
        //             inputErrorMessage("expyearError");
        //             return false;
        //         };
        //     }

        //********* CREDIT CARD CODE CVV VALIDATION**********/
        // const regExpCvv = (value) => {
        //     return /^[0-9]{3}$/.test(value);
        // }

        //     function validationOfCvv() {
        //     //.."cvv" validation... Only 3 digits are allowed (and no spaces).
        //         const cvvValidation = contact.cvv;
        //         if (regExpCvv(cvvValidation)) {
        //             inputErrorMessageDisappear("cvvError");
        //             return true;
        //         } else {
        //             alert("Votre code CVV n'est pas valid");
        //             inputErrorMessage("cvvError");
        //             return false;
        //         };
        //     }

        //*******************************************SEND TO LOCAL STORAGE AFTER VALIDATION OF FIELDS**********************************************/

        if (validationOfFirstName() &&
            validationOfLastName() &&
            validationOfAdresse() &&
            validationOfVille() &&
            validationOfEmail() ){
            // validationOfRegion() &&
            // validationOfZip() &&
            // validationOfCcardName() &&
            // validationOfCcnum() &&
            // validationOfExpmonth() &&
            // validationOfExpyear() &&
            // validationOfCvv()){
        //..Sending the input data to the local storage if argument "if" returns "true":
        localStorage.setItem("contact", JSON.stringify(contact));
        }else{
            alert("Please review and correct your entries.");
        }


        // ......Need to send products and form details to the server :
        const infoToBeSent = {
            prodInLocalStorage,
            contact
        }
        console.log("infoToBeSent");
        console.log(infoToBeSent);

        //...Sending product and user data to server.......
        const sendToServer = fetch("http://localhost:3000/api/teddies/order", {
            method: "POST",
            body: JSON.stringify(infoToBeSent),
            headers: {
                "Content-Type": "applicatiom/json"
            },
        });

        console.log(sendToServer);
});


///....Objective : Keep user input in fields after page reloads - Hence, get local storage to keep field populated.
//...Putting local storage data (strings) into a variable
const loadedData = localStorage.getItem("contact");

//...Convert the strings into an Js object.
const loadedDataInField = JSON.parse(loadedData);

//*************NOT WORKING...Returns "Undefined"***********************************************************************************************/
//....Function to Get local storage to populate the field.
// function reloadedDataFromLocalStorage(userData) {

//     if(loadedDataInField == null) {
//         console.log("Local storage is empty");
//         } else {
//         document.querySelector(`#${userData}`).value = loadedDataInField[userData];
//         } 
// }

// reloadedDataFromLocalStorage("firstName");
// reloadedDataFromLocalStorage("email");
// reloadedDataFromLocalStorage("address");
// reloadedDataFromLocalStorage("city");
// reloadedDataFromLocalStorage("region");
// reloadedDataFromLocalStorage("zip");
// reloadedDataFromLocalStorage("cname");
// reloadedDataFromLocalStorage("ccnum");
// reloadedDataFromLocalStorage("expmonth");
// reloadedDataFromLocalStorage("expyear");
// reloadedDataFromLocalStorage("cvv");

// console.log(loadedDataInField);

//************************************************************************************************************/

///....Keep user details from disappearing after a page reload - Populate the field.
if(loadedDataInField == null) {
    console.log("Local storage is empty");
    } else {

    document.querySelector("#firstName").value = loadedDataInField.firstName;
    document.querySelector("#lastName").value = loadedDataInField.lastName;
    document.querySelector("#address").value = loadedDataInField.address;   
    document.querySelector("#city").value = loadedDataInField.city;     
    document.querySelector("#email").value = loadedDataInField.email;
    // document.querySelector("#region").value = loadedDataInField.region;
    // document.querySelector("#zip").value = loadedDataInField.zip;
    // document.querySelector("#cname").value = loadedDataInField.cardname;
    // document.querySelector("#ccnum").value = loadedDataInField.cardnumber;
    // document.querySelector("#expmonth").value = loadedDataInField.expmonth;
    // document.querySelector("#expyear").value = loadedDataInField.expyear;
    // document.querySelector("#cvv").value = loadedDataInField.cvv;
    }

    console.log(loadedDataInField);
