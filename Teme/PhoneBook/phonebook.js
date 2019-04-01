var list = [];

function initialize(){
  draw();
  addButton();
}

function addButton(){
  document.querySelector("#adauga").addEventListener("click", function(){
    addItem();
  })
}

function draw(){
  var contactList = document.querySelector("#list");
  var saveButton = document.querySelector("#salveaza");
  var addButton = document.querySelector("#adauga");
  addButton.style.display = "";
  saveButton.style.display = "none";
  contactList.innerHTML = "";
  for(let i = 0; i < list.length; i++){
    contactList.innerHTML += `<li>
      <div class="item container">
        <div class="item-np clr-white">
          <p>${list[i].name}</p>
        </div>
        <div class="item-np clr-white">
          <p>${list[i].phone}</p>
        </div>
        <div class="item-buttons">
          <i class="far fa-edit" onclick="editButtons(${i})"></i>
          <i class="fas fa-trash-alt" onclick="deleteButtons(${i})"></i>
        </div>
      </div>
    </li>`
  }
}

function addItem(){
  var name = document.querySelector("#nume");
  var phone = document.querySelector("#tel");
  var newItem = {};

  if(name.value !== "" && phone.value !== ""){
    newItem.name = name.value;
    newItem.phone = phone.value;
    list.push(newItem);
    name.value = "";
    phone.value = "";
  }
  draw();
}

let listener = false;
function editButtons(i){
  
  if(listener){
	  alert("save first");
  } else {
	  var name = document.querySelector("#salveaza");
	  var phone = document.querySelector("#adauga");
	  var saveButton = document.querySelector("#salveaza");
	  var addButton = document.querySelector("#adauga");
	  saveButton.style.display = "";
	  addButton.style.display = "none";
	  name.value = list[i].name;
	  phone.value = list[i].phone;
	  listener = true;

	  document.querySelector("#salveaza").addEventListener("click", function saveEdit(){
		if(name.value !== "" && phone.value !== ""){
		  list[i].name = name.value;
		  list[i].phone = phone.value;
		  name.value = "";
		  phone.value = "";
		  draw();
		}
		listener = false;
		
	  },{once: true})
  }
}


function deleteButtons(i){
  list.splice(i,1);
  draw();
}


initialize();