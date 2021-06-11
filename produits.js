// fetch('http://localhost:3000/api/teddies/' + '5beaacd41c9d440000a57d97')
// .then(res => res.json())
// .then(data => console.log(data))



function remplirListeProduits(bear) {
    // loop here to display nounourses names
    for (let elem of bear) {
      console.log(elem.name)
      document.write(elem.name + ", ");
    }
  }


  async function fillProducts() {
    fetch('http://localhost:3000/api/teddies/')
        .then(res => { 
            console.log(res)
            return res.json();
        })
        .then(bear => {
            remplirListeProduits(bear)
            console.log(bear);
        });
            // console.log(nounours);
        //  document.write('res');
    }
    fillProducts()



//....................................................................


fetch('https://unsplash.it/600/400')
.then(res => res.blob())
.then(blob => {
    let img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    document.querySelector('body').appendChild(img);

});







            // document.querySelector('imageUrl');

// async function teddy1 () {
//     const response = await fetch('http://localhost:3000/api/teddies/' + '5be9c8541c9d440000665243');
//     const product = await response.json()
//     // document.querySelector()

// }

// teddy1().then(response => {
//     console.log('yay');
// })

// .catch(error => {
//     console.log('error!');
//     console.error(error);
// })