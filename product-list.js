


//...Teddy bear list...................................................

async function getProductData() {

    const prodStream = await fetch('http://localhost:3000/api/teddies');
    const productPosts = await prodStream.json();

    console.log(productPosts);

    const newPost = productPosts.map(function(product, index) {
       if (index < 5) { return `
            <div class="blockProduct">
                <div class="namePriceCombo">
                    <h3 class="produit__name">${product.name}</h3>
                    <p class="produit__price">${product.price / 100 + '€ '}</p>
                </div>
                <img src="${product.imageUrl}" width="310" height="229" alt="${product.name}" class="produit_img"></img>
                <button class="VoirProduit">Voir produit</button>
                <span class="Line">_________________________________________________</span>
            </div>
        `};

        })
        
    .join("");

    console.log(newPost);

    document.querySelector('#produit__list--post').insertAdjacentHTML("afterbegin", newPost)


}
getProductData()





//...CAMERAS...................................................

async function getCameraData() {

    const camStream = await fetch('http://localhost:3000/api/cameras');
    const cameraPosts = await camStream.json();

    console.log(cameraPosts);


    const newCamPost = cameraPosts.map(function(product, index) {
       if (index < 5) { return `
            <div class="blockProduct">
                <div class="namePriceCombo">
                    <h3 class="produit__name">${product.name}</h3>
                    <p class="produit__price">${product.price / 100 + '€ '}</p>
                </div>
                <img src="${product.imageUrl}" width="310" height="229" alt="${product.name}" class="produit_img"></img>
                <button class="VoirProduit">Voir produit</button>
                <span class="Line">_________________________________________________</span>
            </div>
        `};

        })
        
    .join("");

    console.log(newCamPost);

    document.querySelector('#camera__list--post').insertAdjacentHTML("afterbegin", newCamPost)

}
getCameraData()





//...MEUBLES...................................................

async function getMeubleData() {

    const meubleStream = await fetch(' http://localhost:3000/api/furniture');
    const meublePosts = await meubleStream.json();

    console.log(meublePosts);


    const newMeuPost = meublePosts.map(function(product, index) {
       if (index < 5) { return `
            <div class="blockProduct">
                <div class="namePriceCombo">
                    <h3 class="produit__name">${product.name}</h3>
                    <p class="produit__price">${product.price / 100 + '€ '}</p>
                </div>
                <img src="${product.imageUrl}" width="310" height="229" alt="${product.name}" class="produit_img"></img>
                <button class="VoirProduit">Voir produit</button>
                <span class="Line">_________________________________________________</span>
            </div>
        `};

        })
        
    .join("");

    console.log(newMeuPost);

    document.querySelector('#meuble__list--post').insertAdjacentHTML("afterbegin", newMeuPost)


}
getMeubleData()


















