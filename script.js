const $ = (selector) => document.querySelector(selector);

const shoppingList = [];

const addItem = () => {
    let newItem = $("#newItemInput").value.toUpperCase();
    shoppingList.push(newItem);
    createList(shoppingList);
    $("#listForm").reset();
};

const createList = (list) => {
    $("#list").innerHTML = ""
    list.forEach((item) => {
        let liContent = document.createTextNode(`${item}`);
        let liItem = document.createElement('li');
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add("btn");
        deleteBtn.addEventListener("click", ()=>deleteItem(item))
        deleteBtn.innerText = "Delete"; 
        let updateBtn = document.createElement("button");
        updateBtn.classList.add("btn");
        updateBtn.innerText = "Edit";
        updateBtn.addEventListener("click",()=>updateItem(item))
        liItem.classList.add("list-item");
        liItem.appendChild(liContent);
        liItem.appendChild(deleteBtn);
        liItem.appendChild(updateBtn);
        $("#list").appendChild(liItem);
    });
};
//hago la función de eliminar item
const deleteItem = (item) =>{
    const itemIndex = shoppingList.indexOf(item)
    shoppingList.splice(itemIndex,1)
    createList(shoppingList)
    //puedo usar el filter tmb
}
//hago la función de editar item
const updateItem = (item)=>{
    let newValue = prompt("Cambio").toLocaleUpperCase()
    let itemIndex = shoppingList.indexOf(item)
    shoppingList[itemIndex] = newValue
    createList(shoppingList)
}
//hago función para permitir que al tocar enter agregue el item
const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
        addItem();
    }
};
//creo fución para cambiar de modo claro a  modo oscuro
const changeMode = () =>{
    if($("#body").getAttribute("data-theme") === "light"){
        $("#body").setAttribute("data-theme", "dark")
    }else{
        $("#body").setAttribute("data-theme", "light")
    }
}
$("#addButton").addEventListener("click", addItem);
$("#newItemInput").addEventListener("keydown", handleEnterKeyPress);
$("#modeBtn").addEventListener("click",changeMode)