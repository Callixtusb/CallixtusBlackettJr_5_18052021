
    //Creation of variable in which the selected keys and values will be inserted:
    /// RULE... Arr/Obj---> thru--JSON.stringify---> to transfer data to local Storage.
    /// RULE... local Storage---> thru--JSON.parse---> to get Arr/Obj from local Storage.
// function cartProdInsertion (){

    let prodInLocalStorage = JSON.parse(localStorage.getItem("productToOrder"));
    console.log(prodInLocalStorage);

    //Alimentation du panier..............
    const prodAdditionToCart = document.querySelector(".container__recap--in-Cart");


    //...Indicate wether or not the cart is empty..
    if (prodInLocalStorage === null) {
        let emptyCart =`
        <div class="panierVideMessage">
        <div>Votre panier est vide.</div>
        </div>`;
        prodAdditionToCart.innerHTML = emptyCart;
      
    } else {

        let prodInCart = [];

        for(let p = 0; p < prodInLocalStorage.length; p++){

            prodInCart = prodInCart + 
                ` 
                <p class="cartDetails"><a href="#" class="product_name">${prodInLocalStorage[p].prodName}</a> 
                <span class="color">${prodInLocalStorage[p].product_color}</span>
                <span class="qty">${prodInLocalStorage[p].quantity}</span>
                <span class="price">${prodInLocalStorage[p].Price}</span>
                <button class="btnSupprimer">Supprimer</button>
                </p>
                `;
                const prodAddToCart = document.querySelector(".container__recap--in-Cart");
                prodAddToCart.innerHTML = prodInCart;

            prodInCartQty = `
                <i class="fa fa-shopping-cart"></i>
                <b class="total__qty">${prodInLocalStorage.length}</b>`;
                const totalQty = document.querySelector(".produits_qty");
                totalQty.innerHTML = prodInCartQty;


        console.log(prodInLocalStorage[p].prodName);                
        console.log(prodInLocalStorage[p].product_color);
        console.log(prodInLocalStorage[p].productID);
        }
        
    }



    let btnSupprimer = document.querySelectorAll(".btnSupprimer");
    //...Delete buttons..............///....../////..........

    for (q = 0; q < btnSupprimer.length; q++) {

        btnSupprimer[q].addEventListener("click", (e) => {
            e.preventDefault();

            const prodID = prodInLocalStorage[q].productID;
            console.log(prodID);

            console.log(btnSupprimer.length);
        });
    }
