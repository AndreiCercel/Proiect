window.addEventListener("load", function(){
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    });

let id = window.location.search.split(/=/g)[1];
		let url = `https://andreicercel.firebaseio.com/produse/${id}.json`;
		fetch(url)
			  .then(response => response.json())
			  .then(produse => {
					document.querySelector(".detaliu").src= produse.detaliu;
                                        document.querySelector(".descriere").innerHTML= produse.descriere;
                                        document.querySelector(".nume").innerHTML= produse.nume;
                                        document.querySelector(".pret").innerHTML= produse.pret;
              })
/*let id = window.location.search.split(/=/g)[1];
let url = `https://restaurant-menu-v1.firebaseio.com/menu/${id}.json`;
fetch(url)
    .then(response => response.json())
    .then(produs => {
            document.querySelector(".imagine").src= produs.imagine;
            document.querySelector("#nume").innerHTML= produs.nume;
            document.querySelector("#ingrediente").innerHTML= produs.ingrediente;
            document.querySelector("#reteta").innerHTML= produs.reteta;
    })
              */
              