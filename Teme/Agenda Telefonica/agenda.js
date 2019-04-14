function addContact(event) {
	event.preventDefault();
	let nume = document.querySelector('[name="nume"]');
	let telefon = document.querySelector('[name="telefon"]');

	if(nume.value && telefon.value) {
		
		let table = document.querySelector('tbody');

		let nrLinie = -1;
		let linii = document.querySelectorAll('tr');
		for(let i = 0; i < linii.length; i++) {
			if (linii[i].cells[0].innerHTML === nume.value) {
				nrLinie = i;
			}
		}

		if(nrLinie === -1) {
			showTab();
			
			let row = table.insertRow(0);

			
			row.insertCell(0).innerHTML = nume.value;
			row.insertCell(1).innerHTML = telefon.value;

			let cellModifica = row.insertCell(2);
			cellModifica.innerHTML = 'Modifică'.link('#');
			cellModifica.onclick = modify;

			let cellSterge = row.insertCell(3);
			cellSterge.innerHTML = 'Șterge'.link('#');
			cellSterge.onclick = sterge;
		} else {
			linii[nrLinie].cells[1].innerHTML = telefon.value;
		}
	}
}
function verifyName(nume, event) {
	if(event.keyCode !== 13) {
	
		let table = document.querySelector('tbody');

		let nrLinie = -1;
		let linii = document.querySelectorAll('tr');
		for(let i = 0; i < linii.length; i++) {
			if(linii[i].cells[0].innerHTML === nume.value) {
				nrLinie = i;
			}
		}

		if(nrLinie !== -1) {
			let eroareNume = document.querySelector('#eroareNume');
			eroareNume.innerHTML = `Există deja numele: ${nume.value}<br />`;
		} else {
			eroareNume.innerHTML = '';
		}
	}
}
function verifyPhone(telefon, event) {
	if(event.keyCode !== 13) {
		
		let table = document.querySelector('tbody');

		let nrLinie = -1;
		let linii = document.querySelectorAll('tr');
		for(let i = 0; i < linii.length; i++) {
			if(linii[i].cells[1].innerHTML === telefon.value) {
				nrLinie = i;
			}
		}

		if(nrLinie !== -1) {
			let eroareTelefon = document.querySelector('#eroareTelefon');
			eroareTelefon.innerHTML = `Există deja numarul: ${telefon.value}<br />`;
		} else {
			eroareTelefon.innerHTML = '';
		}
	}
}

function modify(elem) {
	let nume = document.querySelector('[name="nume"]');
	let telefon = document.querySelector('[name="telefon"]');
	console.log(elem);
	let cells = elem.path[2].cells;
	nume.value = cells[0].innerHTML;
	telefon.value = cells[1].innerHTML;
}

function sterge(elem) {
	let nume = document.querySelector('[name="nume"]');
	let telefon = document.querySelector('[name="telefon"]');
	let linii = document.querySelectorAll('tr');
	if(linii.length === 2) {
		hideTab();
		nume.value = '';
		telefon.value = '';
	}
	let linie = elem.path[2];
	linie.parentNode.removeChild(linie);
}

function hideTab() {
	let tabel = document.querySelector('table');
	tabel.style.display = 'none';
}
function showTab() {
	let tabel = document.querySelector('table');
	tabel.style.display = 'table';
}