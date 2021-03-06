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
        alert("Produsul a fost adaugat in coș");
        document.getElementById("nr").classList.remove("hidden");
        x++;
        document.getElementById("nr").innerText = x;


    } else {
        alert("eroare");
    }
}


function draw() {
    var str = "";
    for (let i in lista.produse) {
        if (lista.produse[i] === null) {
            continue;
        }
        str += `
        <div class="produs">
            <div id="imagine">
                <img src="${lista.produse[i].imagine}" alt="Guitar" height="175px">
            </div>
            <div id="nume">
                ${lista.produse[i].nume}
            </div>
            <div id="pret">
                ${lista.produse[i].pret}<span>€</span>
            </div>
            
            <div id="detalii">
                <a class="btn btn-medium-detalii btn-detalii  btn-radius" href="detalii.html?produs=${i}" >detalii</a>
            </div>
            
            <div id="cart" onclick="addToCart('${i}')">
                    <svg viewBox="0 0 25 25" >
                    <path  d="M17.6,4.6c0.2-0.5,0.6-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0.1c0.6,0.3,0.8,0.9,0.7,1.5l-2.5,8.1
                    c-0.2,0.5-0.6,0.9-1.2,0.9H6.9c-0.5,0-1-0.4-1.2-0.9l-3.5-11h-1C0.6,2.5,0,1.9,0,1.2S0.6,0,1.2,0h1.9c0.5,0,1,0.4,1.2,0.9l3.5,11
                    h7.5L17.6,4.6z M10,18.1c0-1-0.8-1.9-1.9-1.9s-1.9,0.8-1.9,1.9c0,1,0.8,1.9,1.9,1.9S10,19.2,10,18.1z M15,20c1,0,1.9-0.8,1.9-1.9
                    c0-1-0.8-1.9-1.9-1.9c-1,0-1.9,0.8-1.9,1.9C13.1,19.2,14,20,15,20z M10.6,9.3c0.5,0.5,1.3,0.6,1.8,0.1c0,0,0.1-0.1,0.1-0.1l2.8-3.2
                    c0.4-0.4,0.4-1.1-0.1-1.4c-0.2-0.2-0.4-0.3-0.7-0.3h-1.8V1.2c0-0.7-0.6-1.2-1.2-1.2c-0.7,0-1.2,0.6-1.2,1.2v3.1H8.5
                    c-0.6,0-1,0.5-1,1c0,0.3,0.1,0.5,0.3,0.7L10.6,9.3z"/>
                    </svg>
            </div>
        </div>
        `
    }
    document.querySelector(".container").innerHTML = str;

}
