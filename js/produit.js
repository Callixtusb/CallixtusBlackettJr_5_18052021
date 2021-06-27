// function nounours() {
//     //...Il y a Deux methodes pour la recuperation de la chaine de requete de l'url...
//     const queryStr_id = window.location.search;
//     console.log(queryStr_id);

//             //...1ere methode...
//     const product = new URLSearchParams(queryStr_id);
//     console.log(product);

//     const id = product.get('_id');
//     console.log(id);

//     const idPres = product.has('_id');
//     console.log(idPres);

//             //...2eme methode...
//             // const prodId = queryStr_id.slice(5);
//             // console.log(prodId);

//     //...Il y a Deux methodes pour afficher le produit qui a ete selectionne par l'id...

//             //...1ere methode ("Find()" method)...Used if the source is an array..
//                     // const selectedProduct = array.find ((element) => element._id ===id);
//                     // console.log(selectedProduct);

//             //...2eme method..("fetch())....fetch "await" or fetch ".then" ...(Best adapted to my use case)...
//             const fetchedStream = fetch('http://localhost:3000/api/teddies/' + id);
//             fetchedStream.then((response) => response.json())

//                     .then((product) => {
//                     console.log(product);

//                     const prodName = product.name;
//                     const prodPrice = product.price / 100 + ' Eur';
//                     const prodDesc = product.description;
//                     const coloris = product.colors;

//     // //... Structuration de la pesentation du produit......
//             const productDetails = `
//         <div class="produit__card__wrapper">
//         <div class="produit__card__content">

//                 <img src="${product.imageUrl}" alt="${product.name}" class="productImg"></img>

//             <div class="container_text">

//                     <h1 class="name"><span>${product.name}</span></h1>
//                     <p class="price"><strong>Price : </strong><span>${product.price / 100 + ' €'}</span></p>
//                     <p class="description"><strong>Description : </strong><span>${product.description}</span></p>
//                 <form>
//                     <label for="product_color"></label>
//                     <select name="product_color" id="product_color">

//                     </select>
//                 </form>

//                     <button id="addToCart" type="submit " name="addToCart">Ajouter au panier</button>
//             </div>
//         </div>
//         </div>
//         `;
//         const container = document.querySelector('.container');
//         container.innerHTML = productDetails;

//         });
// }
// nounours()



// function cameras() {
//     //...Il y a Deux methodes pour la recuperation de la chaine de requete de l'url...
//     const queryStr_id = window.location.search;
//     console.log(queryStr_id);

//             //...1ere methode...
//     const product = new URLSearchParams(queryStr_id);
//     console.log(product);

//     const id = product.get('_id');
//     console.log(id);

//     const idPres = product.has('_id');
//     console.log(idPres);

//             //...2eme methode...
//             // const prodId = queryStr_id.slice(5);
//             // console.log(prodId);

//     //...Il y a Deux methodes pour afficher le produit qui a ete selectionne par l'id...

//             //...1ere methode ("Find()" method)...Used if the source is an array..
//                     // const selectedProduct = array.find ((element) => element._id ===id);
//                     // console.log(selectedProduct);

//             //...2eme method..("fetch())....fetch "await" or fetch ".then" ...(Best adapted to my use case)...
//             const fetchedStream = fetch('http://localhost:3000/api/cameras/' + id);
//             fetchedStream.then((response) => response.json())

//                     .then((product) => {
//                     console.log(product);

//                     const prodName = product.name;
//                     const prodPrice = product.price / 100 + ' Eur';
//                     const prodDesc = product.description;
//                     const coloris = product.colors;

//     // //... Structuration de la pesentation du produit......
//             const productDetails = `
//         <div class="produit__card__wrapper">
//         <div class="produit__card__content">

//                 <img src="${product.imageUrl}" alt="${product.name}" class="productImg"></img>

//             <div class="container_text">

//                     <h1 class="name"><span>${product.name}</span></h1>
//                     <p class="price"><strong>Price : </strong><span>${product.price / 100 + ' €'}</span></p>
//                     <p class="description"><strong>Description : </strong><span>${product.description}</span></p>
//                 <form>
//                     <label for="product_color"></label>
//                     <select name="product_color" id="product_color">

//                     </select>
//                 </form>

//                     <button id="addToCart" type="submit " name="addToCart">Ajouter au panier</button>
//             </div>
//         </div>
//         </div>
//         `;
//         const container = document.querySelector('.container');
//         container.innerHTML = productDetails;

//         });
// }

// cameras()

/////////////////////////////////////////////////////////////////////

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

const prodName = product.name;
const prodPrice = product.price;
const prodDesc = product.description;
const coloris = product.colors;
const prodID = product._id;
// const sub_total = quantity * Price;


console.log(prodID);
//... Structuration et injection de la pesentation du produit...........
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


////.......Set Quantity of color choices in the dropdown........./////..//////.....
const colordropdwnQty = product.colors;
console.log(colordropdwnQty);

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

console.log(formSelect);


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




//.................CART...................///////..................
const formName = document.querySelector("#theColorSpot");


///....selection btn "sent to cart"........//////..........//...
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
            prodName: product.name,
            productID: prodID,
            product_color: clientColorChoice,
            quantity: quantityChoice,
            Price: prodPrice,
            sub_total: quantityChoice * prodPrice
        };
        // console.log(sub_total);

        ///...Setting up function of the "put in the cart" popup... this function is called below in the "If ()".
        const confirmationMessage = () => {
            if (window.confirm(`           ${prodName} has been added to your cart. 
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
        let prodInLocalStorage = JSON.parse(localStorage.getItem("productToOrder"));
        // console.log(prodToLocalStorage);

        if(prodInLocalStorage) {   //..checks if item is already in local storage. Comes back 'false/null'... true if not....
            prodInLocalStorage.push(prodDetails);
            //.....Setup to send variable storage to local storage.....
            localStorage.setItem("productToOrder", JSON.stringify(prodInLocalStorage));
            confirmationMessage ();
            console.log(prodInLocalStorage);


        } else {
            prodInLocalStorage = [];
            prodInLocalStorage.push(prodDetails);
            //.....Setup to send variable storage to local storage.....
            localStorage.setItem("productToOrder", JSON.stringify(prodInLocalStorage));
            confirmationMessage ();
            console.log(prodInLocalStorage);
 
        //     prodInLocalStorage.forEach(item => {
        //         if(product.name == item.name){
        //             product.quantity = item.quanity += 1;
        //         } else {
        //             prodInLocalStorage.push(product)
        //         }

        //     });
        }


    });




});



//****Creating Quantity count in menu*******************************************************
let prodInLocalStorage = JSON.parse(localStorage.getItem("productToOrder"));
console.log(prodInLocalStorage);

const totalQty = document.querySelector(".container_btnMenuPanier");

if (prodInLocalStorage === null || prodInLocalStorage == 0) {

    const prodInCartQty = `
    <i class="fa fa-shopping-cart"></i>
    <a href="cart.html" class="menu__panier"><b class="total__qty">(0)</b>Panier</a>`;

    totalQty.innerHTML = prodInCartQty;

} else {

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

    console.log(totalQties);

    const totalQty = document.querySelector(".container_btnMenuPanier");

    const prodInCartQty = `
    <i class="fa fa-shopping-cart"></i>
    <a href="cart.html" class="menu__panier"><b class="total__qty">(${totalQties})</b>Panier</a>`;

    totalQty.innerHTML = prodInCartQty;

}




///...Set up quantity of individual products...//////..............
// let qty = document.querySelector("#qtyChoice");

// const quantity = [];

// for (a = 0; a < prodInLocalStorage.length; a += 1) {
//     if (prodInLocalStorage[a].prodName === prodName) {

//         prodInLocalStorage[a].quantity += 1

//         console.log(prodInLocalStorage[a].quantity);
        
//     }
//     // quantity.push(quantity)


// }















// WORKING MODEL///////SINNGLE..TEDDY..FETCH///////SINNGLE..TEDDY..FETCH///////////

//////////CAMERAS///////".then" method////////CAMERAS/////////".then" method///////////CAMERAS/////////
//...Il y a Deux methodes pour la recuperation de la chaine de requete de l'url...
// const queryStr_id = window.location.search;
// console.log(queryStr_id);

//         //...1ere methode...
// const product = new URLSearchParams(queryStr_id);
// console.log(product);

// const id = product.get('_id');
// console.log(id);

// const fetchedStream = fetch('http://localhost:3000/api/cameras/' + id);
// fetchedStream.then((response) => response.json())

// .then((product) => {
//     console.log(product);

//     const prodName = product.name;
//     const prodPrice = product.price / 100 + ' Eur';
//     const prodDesc = product.description;
//     const coloris = product.colors;

//     const productDetails = `
//     <div class="produit__card__wrapper">
//     <div class="produit__card__content">

//             <img src="${product.imageUrl}" alt="${product.name}" class="productImg"></img>

//         <div class="container_text">

//                 <h1 class="name"><span>${product.name}</span></h1>
//                 <p class="price"><strong>Price : </strong><span>${product.price / 100 + ' €'}</span></p>
//                 <p class="description"><strong>Description : </strong><span>${product.description}</span></p>
//             <form>
//                 <label for="product_color">
//                   <select name="product_color" id="prodColor">

//                   </select>
//                 </label>
//             </form>

//                 <button id="addToCart" type="submit " name="addToCart">Ajouter au panier</button>
//         </div>
//     </div>
//     </div>
//     `;
// const container = document.querySelector('.container');
// container.innerHTML = productDetails;

// });

//////////CAMERAS///////".then" method////////CAMERAS/////////".then" method///////////CAMERAS/////////


//...Il y a Deux methodes pour la recuperation de la chaine de requete de l'url...
// const queryStr_id = window.location.search;
// console.log(queryStr_id);

//         //...1ere methode...
// const product = new URLSearchParams(queryStr_id);
// console.log(product);

// const id = product.get('_id');
// console.log(id);

// async function getProductId() {

//     const productStream = await fetch('http://localhost:3000/api/teddies/' + id);
//     const productPosts = await productStream.json();
//     console.log(productPosts);

//     productPosts = ((teddyBear) => {
//         console.log(teddyBear[1]);

//     });

//... Structuration de la pesentation du produit......

// console.log(container);

// })

/////////COMBINED////////".then"..method/////////COMBINED////////".then"..method///////////COMBINED/////////

// async function test () {
// const queryStr_id = window.location.search;
// console.log(queryStr_id);

// const product = new URLSearchParams(queryStr_id);
// console.log(product);

// const id = product.get("_id");
// console.log(id);

// const idPres = product.has("_id");
// console.log(idPres);

// const nounours = fetch("http://localhost:3000/api/teddies/" + id);
// nounours.then((id) => id.json());
// console.log(nounours);

// const cameras = fetch("http://localhost:3000/api/cameras/" + id);
// cameras.then((id) => id.json());
// console.log(cameras);

// const furniture = fetch("http://localhost:3000/api/furniture/" + id);
// furniture.then((id) => id.json());
// console.log(furniture);


// const results = await Promise.all([nounours, cameras, furniture]);
// console.log(results);

// let i = 0;
    
// const prodImg = results[i].imageUrl;
// const prodName = results[i].name;
// const prodPrice = results[i].price / 100 + " Eur";
// const prodDesc = results[i].description;
// const coloris = results[i].colors;
// //   const lenses = finalData[i].lenses;
// //   const varnish = finalData[i].varnish;
// console.log(prodImg);
// console.log(prodName);
// console.log(prodPrice);
// console.log(prodDesc);
// console.log(coloris);
// //   console.log(lenses);
// //   console.log(varnish);


// const productDetails = `
//     <div class="produit__card__wrapper">
//         <div class="produit__card__content">
//             <img src="${results.imageUrl}" alt="${results.name}" class="productImg"></img>
//         <div class="container_text">
//                 <h1 class="name"><span>${results.name}</span></h1>
//                 <p class="price"><strong>Price : </strong><span>${results.price / 100 + " €"}</span></p>
//                 <p class="description"><strong>Description : </strong><span>${results.description}</span></p>
//             <form>
//                  <label for="product_color">
//                    <select name="product_color" id="prodColor">

//                    </select>
//                  </label>
//             </form>
//                 <button id="addToCart" type="submit " name="addToCart">Ajouter au panier</button>
//         </div>
//         </div>
//     </div>
//     `;

// const container = document.querySelector(".container");
// container.innerHTML = productDetails;

//   }
// test ()

/////////COMBINED////////".then"..method/////////COMBINED////////".then"..method///////////COMBINED/////////
//////////PROMISE.ALL//////////////BEARS//////////PROMISE.ALL//////////////BEARS///////////////////////////////////////

// async function loadData() {
//   const queryStr_id = window.location.search;
//   console.log(queryStr_id);

//   const product = new URLSearchParams(queryStr_id);
//   console.log(product);

//   const id = product.get("_id");
//   console.log(id);

//   try {
//     const url_teddies = "http://localhost:3000/api/teddies/" + id;
//     const url_cameras = "http://localhost:3000/api/cameras/" + id;
//     const url_furniture = "http://localhost:3000/api/furniture/" + id;

//     const results = await Promise.all([fetch(url_teddies), fetch(url_cameras), fetch(url_furniture)]);
//     const dataPromises = results.map((result) => result.json());
    
//     const finalData = await Promise.all(dataPromises);
//     console.log(finalData);

//     return finalData;
// } catch (err) {
//   console.log(err);
// }


// }
// loadData()


// function ShowBears (loadData) {

    
//       const prodImg = finalData[0].imageUrl;
//       const prodName = finalData[0].name;
//       const prodPrice = finalData[0].price / 100 + " Eur";
//       const prodDesc = finalData[0].description;
//       const coloris = finalData[0].colors;
//     //   const lenses = finalData[i].lenses;
//     //   const varnish = finalData[i].varnish;
//       console.log(prodImg);
//       console.log(prodName);
//       console.log(prodPrice);
//       console.log(prodDesc);
//       console.log(coloris);
//     //   console.log(lenses);
//     //   console.log(varnish);

// const productDetails = `
//     <div class="produit__card__wrapper">
//         <div class="produit__card__content">
//             <img src="${finalData[0].imageUrl}" alt="${finalData[0].name}" class="productImg"></img>
//           <div class="container_text">
//                 <h1 class="name"><span>${finalData[0].name}</span></h1>
//                 <p class="price"><strong>Price : </strong><span>${finalData[0].price / 100 + " €"}</span></p>
//                 <p class="description"><strong>Description : </strong><span>${finalData[0].description}</span></p>
//               <form>
//                  <label for="product_color">
//                    <select name="product_color" id="prodColor">

//                    </select>
//                  </label>
//               </form>
//                 <button id="addToCart" type="submit " name="addToCart">Ajouter au panier</button>
//           </div>
//         </div>
//     </div>
//     `;
 
//     const container = document.querySelector(".container");
//     container.innerHTML = productDetails;

//     loadData();
// }

     
// // //////////PROMISE.ALL//////////////BEARS//////////PROMISE.ALL//////////////BEARS//////////////////////////
// // /////////////////CAMERAS///////////CAMERAS////////////CAMERAS/////////CAMERAS/////////////CAMERAS/////////
 
               
// async function ShowCameras (loadData) {


//     const camImg = finalData[1].imageUrl;
//     const camName = finalData[1].name;
//     const camPrice = finalData[1].price / 100 + " Eur";
//     const camDesc = finalData[1].description;
//     const lenses = finalData[1].lenses;
//     console.log(camImg);
//     console.log(camName);
//     console.log(camPrice);
//     console.log(camDesc);
//     console.log(lenses);

//     const cameraDetails = `
//     <div class="produit__card__wrapper">
//         <div class="produit__card__content">
//             <img src="${finalData[1].imageUrl}" alt="${finalData[1].name}" class="productImg"></img>
//         <div class="container_text">
//                 <h1 class="name"><span>${finalData[1].name}</span></h1>
//                 <p class="price"><strong>Price : </strong><span>${finalData[1].price / 100 + " €"}</span></p>
//                 <p class="description"><strong>Description : </strong><span>${finalData[1].description}</span></p>
//             <form>
//                  <label for="product_color">
//                    <select name="product_color" id="prodColor">

//                    </select>
//                  </label>
//             </form>
//                 <button id="addToCart" type="submit " name="addToCart">Ajouter au panier</button>
//         </div>
//         </div>
//     </div>
//     `;

//     const camContainer = document.querySelector(".container");
//     camContainer.innerHTML = cameraDetails;

//     loadData();
//   }


// // // /////////////////CAMERAS///////////CAMERAS////////////CAMERAS/////////CAMERAS/////////////CAMERAS////////
// // // /////////////////FURNITURE///////////FURNITURE////////////FURNITURE/////////FURNITURE/////////////FURNITURE/////////

// async function ShowFurniture(loadData) {
    

//     const furImg = finalData[2].imageUrl;
//     const furName = finalData[2].name;
//     const furPrice = finalData[2].price / 100 + " Eur";
//     const furDesc = finalData[2].description;
//     const varnish = finalData[2].varnish;
//     console.log(furImg);
//     console.log(furName);
//     console.log(furPrice);
//     console.log(furDesc);
//     console.log(varnish);

//     const furnitureDetails = `
//     <div class="produit__card__wrapper">
//         <div class="produit__card__content">
//             <img src="${finalData[2].imageUrl}" alt="${finalData[2].name}" class="productImg"></img>
//             <div class="container_text">
//                 <h1 class="name"><span>${finalData[2].name}</span></h1>
//                 <p class="price"><strong>Price : </strong><span>${finalData[2].price / 100 + " €"}</span></p>
//                 <p class="description"><strong>Description : </strong><span>${finalData[2].description}</span></p>
//             <form>
//                 <label for="product_color">
//                   <select name="product_color" id="product_color">
//                   </select>
//                 </label>
//             </form>
//                 <button id="addToCart" type="submit " name="addToCart">Ajouter au panier</button>
//             </div>
//         </div>
//     </div>
//         `;

//     const furContainer = document.querySelector(".container");
//     furContainer.innerHTML = furnitureDetails;

//     loadData();
//     }

// /////////////////FURNITURE///////////FURNITURE////////////FURNITURE/////////FURNITURE/////////////FURNITURE/////////


