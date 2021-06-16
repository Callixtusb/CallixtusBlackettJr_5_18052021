

const list = [
	{ name: 'coucou', price: 12 },
	{ name: 'kiki', price: 200 },
	{ name: 'bouh', price: 50 }
]

//...Liste Bear names and prices For..of loop.......

for(let elements of list)
 console.log(elements.name);
 
 for(let elements of list)
 console.log(elements.price);

 for(let elements of list)
 console.log(elements.name, elements.price);


 //...Second part of the Console.log() exer...........


let liste = [
    { name: 'Foufou', price: 230000 }
]


function affichePrenomsDeLaListe(bears) {

   for (let elem of bears) {
       
     console.log('Le nounours ' + elem.name + ' est à ' + elem.price + '€')
     console.log(`Le nounours ${elem.name} est à ${elem.price}€`)
     console.log(`Le nounours elem.name est à elem.price €`)
    }
}

affichePrenomsDeLaListe(liste)