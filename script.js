const $ = (selector) => document.querySelector(selector);

const shoppingList = [];

const createListItem = (item) => {
  const liItem = document.createElement('li');
  liItem.classList.add("list-item");
  
  const liContent = document.createTextNode(item);
  liItem.appendChild(liContent);
  
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add("btn");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", () => deleteItem(item));
  liItem.appendChild(deleteBtn);
  
  const updateBtn = document.createElement("button");
  updateBtn.classList.add("btn");
  updateBtn.innerText = "Edit";
  updateBtn.addEventListener("click", () => updateItem(item));
  liItem.appendChild(updateBtn);
  
  return liItem;
};

const addItem = () => {
  const newItem = $("#newItemInput").value.trim().toUpperCase();
  if (newItem) {
    shoppingList.push(newItem);
    createList(shoppingList);
    $("#listForm").reset();
  }
};

const createList = (list) => {
  const listContainer = $("#list");
  listContainer.innerHTML = "";
  
  list.forEach((item) => {
    const liItem = createListItem(item);
    listContainer.appendChild(liItem);
  });
};

const deleteItem = (item) => {
  const itemIndex = shoppingList.indexOf(item);
  if (itemIndex !== -1) {
    shoppingList.splice(itemIndex, 1);
    createList(shoppingList);
  }
};

const updateItem = (item) => {
  const newValue = prompt("Cambio")?.trim().toUpperCase();
  if (newValue) {
    const itemIndex = shoppingList.indexOf(item);
    if (itemIndex !== -1) {
      shoppingList[itemIndex] = newValue;
      createList(shoppingList);
    }
  }
};

const handleEnterKeyPress = (event) => {
  if (event.key === "Enter") {
    event.preventDefault()
    addItem();
  }
};

const changeMode = () => {
  const body = $("#body");
  const currentTheme = body.getAttribute("data-theme");
  body.setAttribute("data-theme", currentTheme === "light" ? "dark" : "light");
  const modeIcon = $("#modeIcon");
  modeIcon.innerText = currentTheme === "light" ? "☀️" : "🌑"; // Cambiar el emoji del logo
};

$("#addButton").addEventListener("click", addItem);
$("#newItemInput").addEventListener("keydown", handleEnterKeyPress);
$("#modeBtn").addEventListener("click", changeMode);
