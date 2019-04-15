var objElev = {

    nume: "",
    note: [],
    media: 0

}

listaElevi = [];


function desenareElevi() {

    var headTbl = document.querySelector('.thd');
    var bodTbl = document.querySelector('.tbod');

    var htmlBod = "";
    var htmlHead = "<tr><td>Nume:</td><td>Media:</td><td>Note:</td></tr>";

    for (let i = 0; i < listaElevi.length; i++) {

        var rand = `
		
		<tr>
		<td>${listaElevi[i].nume}</td>
		<td>${listaElevi[i].media}</td>
		<td><button onclick="afisareNota(${i}),afisareDiv()">Afiseaza nota</button></td>
		</tr>
		
		`;

        htmlBod += rand;
    }

    headTbl.innerHTML = htmlHead;
    bodTbl.innerHTML = htmlBod;


}



function adaugaElev() {

    var inpVal = document.querySelector('input[placeholder="Nume"]').value;
    if (inpVal.length < 3) {

        alert('Numele are mai putin de 3 caractere');

    } else {

        var obj = Object.create(objElev);

        obj.nume = inpVal;
        obj.note = [];
        obj.media = 0;

        listaElevi.push(obj);

        desenareElevi();

    }


}


function afisareDiv() {

    var divNote = document.querySelector('.lista-note');
    var divElevi = document.querySelector('.lista-elevi');

    divElevi.style.width = "50%";
    divNote.style.display = "block";

}

function hideNote() {

    var divNote = document.querySelector('.lista-note');
    var divElevi = document.querySelector('.lista-elevi');

    divElevi.style.width = "100%";
    divNote.style.display = "none";

}


function afisareNota(ind) {

    var formNote = document.querySelector('.form-note');
    var bodTblNote = document.querySelector('.tbodNote');
    var numeElevH1 = document.querySelector('#numeElev');
    var sortareDiv = document.querySelector('.sortareDivNote');


    var htmlForm = `<input type="number" placeholder="Nota" onkeypress="insertNota(this,event,${ind})"><button onclick="addNota(${ind})">Adauga Nota</button>`;

    var htmlSortare = `<span onclick="sortareAsc(${ind})">Up</span><span onclick="sortareDesc(${ind})">Down</span>`

    sortareDiv.innerHTML = htmlSortare;
    formNote.innerHTML = htmlForm;
    numeElevH1.textContent = listaElevi[ind].nume;

    var htmlBodTabel = "";

    for (let i = 0; i < listaElevi[ind].note.length; i++) {

        var rand = `
		<tr>
		
		<td>
			${listaElevi[ind].note[i]}
		</td>
		
		</tr> `;
        htmlBodTabel += rand;
    }

    bodTblNote.innerHTML = htmlBodTabel;
}


function addNota(index) {

    var inpNoteValue = document.querySelector('input[type="number"]').value;

    if (inpNoteValue < 1 || inpNoteValue > 10) {
        alert('Adauga nota');

    } else {

        var listaNote = listaElevi[index].note
        listaNote.push(parseInt(inpNoteValue));



        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        listaElevi[index].media = ((listaNote.reduce(reducer)) / listaNote.length).toFixed(2);

        console.log(listaElevi[index].media);
        afisareNota(index);
        desenareElevi();
    }
}



function sortAscMedie() {

    listaElevi.sort(function(a, b) {

        if (a.media < b.media) {
            return -1;
        }
        if (a.media > b.media) {
            return 1;
        }
        return 0;
    })

    desenareElevi();

}

function sortDescMedie() {

    listaElevi.sort(function(a, b) {

        if (a.media < b.media) {
            return 1;
        }
        if (a.media > b.media) {
            return -1;
        }
        return 0;
    })

    desenareElevi();

}



function sortareAsc(num) {

    var listaSortare = listaElevi[num].note;

    listaSortare.sort(function(a, b) {

        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    })
    afisareNota(num);
}


function sortareDesc(num) {

    var listaSortare = listaElevi[num].note;

    listaSortare.sort(function(a, b) {

        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }
        return 0;
    })
    afisareNota(num);
}


function insertText(elem, e) {



    if (e.keyCode == 13) {
        adaugaElev();
    }

}


function insertNota(elem, e, nr) {

    if (e.keyCode == 13) {
        addNota(nr);
    }

}