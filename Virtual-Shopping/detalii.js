window.addEventListener("load", function() {
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    });
    
    let id = window.location.search.split(/=/g)[1];
    let url = `https://andreicercel.firebaseio.com/produse/${id}.json`;
    fetch(url)
        .then(response => response.json())
        .then(produse => {
            document.querySelector(".detaliu").src = produse.detaliu;
            document.querySelector(".descriere").innerHTML = produse.descriere;
            document.querySelector(".nume").innerHTML = produse.nume;
            document.querySelector(".pret").innerHTML = produse.pret;
        })
    
    var lista = [];
    
    function get() {
        fetch('https://andreicercel.firebaseio.com/.json')
            .then(response => response.json())
            .then(data => {
                lista = data;
                draw();
            })
    }
    
    function addToCart(i) {
        if (typeof(Storage) !== "undefined") {
            var el = {};
            el.nume = lista.produse[i].nume;
            el.imagine = lista.produse[i].imagine;
            el.cantitate = 1;
            el.pret = parseInt(lista.produse[i].pret);
    
            localStorage.setItem(i, JSON.stringify(el));
            alert("Produsul a fost adaugat in cos");
            document.getElementById("nr").classList.remove("hidden");
            x++;
            document.getElementById("nr").innerText = x;
    
    
        } else {
            alert("eroare");
        }
    }