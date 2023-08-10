const $ = (selector) => document.querySelector(selector);

const shoppingList = [];

const addItem = () => {
    let newItem = $("#newItemInput").value.toUpperCase();
    shoppingList.push(newItem);
    createList(shoppingList);
    $("#listForm").reset();
};

const createList = (list) => {
    list.forEach((item) => {
        let liContent = document.createTextNode(`${item}`);
        let liItem = document.createElement('li');
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add("btn");
        deleteBtn.innerText = "Delete"; 
        let updateBtn = document.createElement("button");
        updateBtn.classList.add("btn");
        updateBtn.innerText = "Edit";
        liItem.classList.add("list-item");
        liItem.appendChild(liContent);
        liItem.appendChild(deleteBtn);
        liItem.appendChild(updateBtn);
        $("#list").appendChild(liItem);
    });
};


$("#addButton").addEventListener("click", addItem);
