let response = [];

function initialize(){
  
  getListAjax();
}


function getListAjax(idx, method, body){
  if(idx === undefined){
    idx = "";
  }

  if(!method){
      method = "GET";
  }

  if(!body){
    body = null;
  }

  fetch(`https://andreicercel.firebaseio.com/produse/${idx}.json`,{
    method: method,
    body: body
  })
  .then(response => response.json())
  .then(json => {
    response = json;
    if(method === "DELETE"){
      alert(`Produsul "${deletedItem}" a fost sters`);
      getListAjax();
    }
    else if(method !== "GET"){
      getListAjax();
    } else if(idx === ""){
      drawList(json);
    }
  })
}

function drawList(response){
  let listContainer = document.querySelector(".container");
  listContainer.innerHTML = "";
  for (let item in response){
    if(response.hasOwnProperty(item) && response[item].existsInSearch !== "no"){
      listContainer.innerHTML += `
      <div class="produse">
                <div class="imagine">
                        <img src="${response[item].imagine}" alt="Guitar" height="100px">
                </div>
                <div class="nume">
                ${response[item].nume}
                </div>
                
                
                <div class="pret">
                ${response[item].pret}<span>€</span>
                </div>
                <div class="stock">
                        Stoc:<span>${response[item].stoc}</span>
                </div>
                <div class="options">
                    <div id="editare">
                        <a class="btn btn-medium-detalii btn-editare  btn-radius" onclick="editDetails('${item}')" href="#" >edit</a>
                    </div>
                    
                    <div id="stergere">
                            <a class="btn btn-medium-detalii btn-stergere  btn-radius" onclick="deleteEntry('${item}')" href="#" >delete</a>
                    </div>
                </div>        
        </div>
      `
    }
  }
}

function editDetails(idx){
  let detailsContainer = document.querySelector("#popup-container");
  detailsContainer.style.display = "flex";

  let method = "";

  if(idx){
    method = "PUT";

    detailsContainer.innerHTML = `
    <div id="popup-window" >
      <div class="col-xs-12 d-flex justify-center">
        <label class="col-xs-11" for="">Nume: <br><input id="nume-input" type="text" value="${response[idx].nume}"></label>
      </div>
      <div class="col-xs-12 d-flex justify-center">
        <label class="col-xs-11" for="">Imagine: <br><input id="imagine-input" type="text" value="${response[idx].imagine}"></label>
      </div>
      <div class="col-xs-12 d-flex justify-center">
        <label class="col-xs-11" for="">Imagine detaliu: <br><input id="imagined-input" type="text" value="${response[idx].detaliu}"></label>
      </div>
      
      <div class="col-xs-12 d-flex justify-center">
        <label class="col-xs-11" for="">Descriere: <br><textarea id="descriere-input" class="col-xs-12" name="name">${recipeHTMLToText(response[idx].descriere)}</textarea></label>
      </div>
      <div class="col-xs-12 d-flex justify-center">
        <label class="col-xs-11" for="">Preț: <br><input id="pret-input" type="number" value="${response[idx].pret}"></label>
      </div>
      <div class="col-xs-12 d-flex justify-center">
        <label class="col-xs-11" for="">Stoc: <br><input id="stoc-input" type="number" value="${response[idx].stoc}"></label>
      </div>
      <div class="col-xs-12 d-flex justify-around">
        <a class="btn btn-medium btn-gray  btn-radius" onclick="hideDetails()" href="#">Cancel</a>
        <a class="btn btn-medium btn-green  btn-radius" onclick="saveEntry('${idx}','${method}')" href="#">Save</a>
      </div>
    </div>
    `
  } else {
    method = "POST";

    detailsContainer.innerHTML = `
    <div id="popup-window" class="col-xs-11 col-md-6 ">
      <div class="col-xs-12 d-flex justify-center">
        <label class="col-xs-11" for="">Nume: <br><input id="nume-input" type="text" value=""></label>
      </div>
      <div class="col-xs-12 d-flex justify-center">
        <label class="col-xs-11" for="">Imagine: <br><input id="imagine-input" type="text" value=""></label>
      </div>
      <div class="col-xs-12 d-flex justify-center">
        <label class="col-xs-11" for="">Imagine Detalii: <br><input id="imagined-input" type="text" value=""></label>
      </div>
      
      <div class="col-xs-12 d-flex justify-center">
        <label class="col-xs-11" for="">Descriere: <textarea id="descriere-input" class="col-xs-12" name="name"></textarea></label>
      </div>
      <div class="col-xs-12 d-flex justify-center">
        <label class="col-xs-11" for="">Preț: <br><input id="pret-input" type="number" value=""></label>
      </div>
      <div class="col-xs-12 d-flex justify-center">
        <label class="col-xs-11" for="">Stoc: <br><input id="stoc-input" type="number" value=""></label>
      </div>
      <div class="col-xs-12 d-flex justify-around">
        <a class="btn btn-medium btn-gray  btn-radius" onclick="hideDetails()" href="#">Cancel</a>
        <a class="btn btn-medium btn-green  btn-radius" onclick="saveEntry(${undefined},'${method}')">Save</a>
      </div>
    </div>
    `
  }

  detailsContainer.addEventListener("click",function(){
    hideDetails();
  })

  let detailsPopup = document.querySelector("#popup-window");
  detailsPopup.addEventListener("click",function(){ //opreste bubblingul pe detailsContainer care inchide pagina
    event.stopPropagation();
  })
}

function hideDetails(){
  document.querySelector("#popup-container").style.display = "none";
}



function saveEntry(idx,method){
  let nume = document.querySelector("#nume-input");
  let imagine = document.querySelector("#imagine-input");
  let detaliu = document.querySelector("#imagined-input");
  let pret = document.querySelector("#pret-input");
  let stoc = document.querySelector("#stoc-input");
  let recipe = document.querySelector("#descriere-input");
  recipe = recipeTextToHTML(recipe.value)
  

  let newObject = {
    nume: nume.value,
    imagine: imagine.value,
    detaliu: detaliu.value,
    pret: pret.value,
    stoc: stoc.value,
    descriere: recipe
    
  }

  getListAjax(idx,method,JSON.stringify(newObject));

  hideDetails();
}

function deleteEntry(idx){
  if(confirm("Are you sure you want to delete this entry?")){
    window.deletedItem = response[idx].nume;
    getListAjax(idx,"DELETE");
  }
}

function recipeTextToHTML(recipe){
  recipe = recipe.split("\n");
  recipe = recipe.join("<br>");
  return recipe;
}

function recipeHTMLToText(recipe){
  recipe = recipe.split("<br>");
  recipe = recipe.join("\n");
  return recipe;
}
