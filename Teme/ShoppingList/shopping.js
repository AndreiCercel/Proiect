function Item(description) {
	this.description = description;
	this.bought = false;
	this.buy = function() {
		this.bought = true;
	}
}

function ShoppingList() {
	this.produs = [];
	this.addItem = function(description) {
		let exists = false;
		let produs = document.querySelector('#produsError');
		for(let i = 0; i < this.produs.length && !exists; i++) {
			if(this.produs[i].description === description) {
				exists = true;
			}
		}
		if(!exists) {
			this.produs.push( new Item(description) );
			produsError.innerHTML = '';
		} else {
			produsError.innerHTML = `Produsul ${description} este în listă!`;
		}
	}
	this.display = function() {
		let table = document.querySelector('tbody');
		table.innerHTML = '';

		if( this.produs.length > 0 ) {
			let entireTable = document.querySelector('table');
			entireTable.style.display = 'block';
			for(let i = 0; i < this.produs.length; i++) {
				let row = table.insertRow(i);
				row.insertCell(0).innerHTML = this.produs[i].description;
				if( this.produs[i].bought ) {
					row.cells[0].style.textDecoration = 'line-through';
				}
				row.insertCell(1).innerHTML = `<button id="buyButton">buyed</buton>`;
				row.cells[1].onclick = buy;
			}
		}
	}
	this.sortAsc = function() {
		for(let i = 0; i < this.produs.length - 1; i++) {
			for(let j = i + 1; j < this.produs.length; j++) {
				if(this.produs[i].description > this.produs[j].description) {
					[this.produs[i], this.produs[j]] = [this.produs[j], this.produs[i]];
				}
			}
		}
	}
	this.sortDesc = function() {
		for(let i = 0; i < this.produs.length - 1; i++) {
			for(let j = i+1; j < this.produs.length; j++) {
				if(this.produs[i].description < this.produs[j].description) {
					[this.produs[i], this.produs[j]] = [this.produs[j], this.produs[i]];
				}
			}
		}
	}
}

let sh = new ShoppingList();

function addItem(event) {
	event.preventDefault();
	let description = document.querySelector('[name="description"]');
	if( description.value ) {
		sh.addItem(description.value);
		sh.display();
		console.log(sh);
	}
}

function buy(elem) {
	let cell0 = elem.path[2].cells[0];
	cell0.style.textDecoration = 'line-through';
	for(let i = 0; i < sh.produs.length; i++) {
		if(sh.produs[i].description === cell0.innerHTML) {
			sh.produs[i].bought = true;
		}
	}
}

function sortAsc() {
	sh.sortAsc();
	sh.display();
}

function sortDesc() {
	sh.sortDesc();
	sh.display();
}

function verifica(event) {
	if(event.keyCode !== 13) {
		let exists = false;
		let produsError = document.querySelector('#produsError');
		let elem = event.srcElement;
		for(let i = 0; i < sh.produs.length && !exists; i++) {
			if(sh.produs[i].description === elem.value) {
				exists = true;
			}
		}
		if(exists) {
			produsError.innerHTML = `Item <u>${elem.value}</u> is already in the list!`;
		} else {
			produsError.innerHTML = '';
		}
	}
}

document.querySelector('[name="description"]').addEventListener("keyup", verifica, false);