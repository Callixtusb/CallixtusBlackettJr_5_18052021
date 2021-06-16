


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
           <img src="${product.imageUrl}" width="310" height="229" alt="${product.name}" class="produit_img"></img>
           <button class="VoirProduit">Voir produit</button>
           <span class="Line">_________________________________________________</span>
       </div>
     </a>
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
       <a href="./produit.html?_id=${product._id}">
       <div class="blockProduct">
           <div class="namePriceCombo">
               <h3 class="produit__name">${product.name}</h3>
               <p class="produit__price">${product.price / 100 + '€ '}</p>
           </div>
           <img src="${product.imageUrl}" width="310" height="229" alt="${product.name}" class="produit_img"></img>
           <button class="VoirProduit">Voir produit</button>
           <span class="Line">_________________________________________________</span>
       </div>
     </a>
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
       if (index < 50) { return `
       <a href="./produit.html?_id=${product._id}">
       <div class="blockProduct">
           <div class="namePriceCombo">
               <h3 class="produit__name">${product.name}</h3>
               <p class="produit__price">${product.price / 100 + '€ '}</p>
           </div>
           <img src="${product.imageUrl}" width="310" height="229" alt="${product.name}" class="produit_img"></img>
           <button class="VoirProduit">Voir produit</button>
           <span class="Line">_________________________________________________</span>
       </div>
     </a>
        `};

        })
        
    .join("");

    console.log(newMeuPost);

    document.querySelector('#meuble__list--post').insertAdjacentHTML("afterbegin", newMeuPost)



}
getMeubleData()








// window.addEventListener('load', () => {

//....creating URLs.............
const urlBear = new URL('http://127.0.0.1:5500/produit.html')
urlBear.search = "?id=5be9c8541c9d440000665243"

console.log(urlBear)
console.log(urlBear.toString())


// }


    //...Query string creation...........................
    // const usp = new URLSearchParams({
    //     name: 'Nobert'


    // } );
    // console.log(usp.get('name'));







    // const ProductStream = await fetch(' http://localhost:3000/api/furniture');
    // const productPosts = await ProductStream.json();

    // const searchParams = new URLSearchParams(productPosts);










// window.addEventListener('load', async function () {

//     const ProductStream = await fetch(' http://localhost:3000/api/furniture');
//     const productPosts = await ProductStream.json();

//     const searchParams = new URLSearchParams(window.location.search);
//         if(searchParams.has('id')) {
//             const productID = searchParams.get('id');
//             const productToDisplay = productPosts[productID];



//         }
//     console.log(window.location);

// }, false);







//NOT WORKING YET!!!...................need to investigate and debbug

// const btnSeeDetails = document.querySelector('blockProduct .VoirProduit');
// for(let i = 0; i < btnSeeDetails.length; i++) {
//     let btn = btnSeeDetails[i];
//     btn.addEventListener('click', () => {alert('Hello')}, false);

// }
// console.log(btnSeeDetails);