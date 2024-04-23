//To-Do List array to store the list of To-Do List items
let toDoListArray = [];

const form = document.querySelector(".form");
const input = document.querySelector(".form__input");
const ul = document.querySelector(".toDoList");

form.addEventListener("submit", (e)=>{
    //prevent a default behaviour- page reloading
    e.preventDefault();
    
    //give item a unique id
    let itemId = String(Date.now());

    //Get the input value
    let toDoItem = input.value;

    //pass the itemId and toDoItem parameter into the functions
    addItemToDOM(itemId, toDoItem);
    addItemToArray(itemId, toDoItem);
    //clear the input box;
    input.value = ""
});

ul.addEventListener("click", (e)=>{
    let id =e.target.getAttribute("data-id");
    if(!id) return; //user clicked in something else
    //pass the id into the function
    removeItemFromDOM(id);
    removeItemFromArray(id);
})
// This function creates a new list item (<li>) element, assigns it a data-id attribute with the provided itemId, sets the inner text of the list item to the provided toDoItem, and appends the list item to the unordered list (ul).
const addItemToDOM=(itemId, toDoItem)=>{
   //create an li
   const li =document.createElement("li");
   li.setAttribute("data-id", itemId);
   //add toDo Item to li;
   li.innerText = toDoItem;
   //add li to dom
   ul.appendChild(li);
}

//This function adds a new object to the toDoListArray array, where each object represents a To-Do item with its associated itemId and toDoItem text.
const addItemToArray=(itemId, toDoItem)=>{
   toDoListArray.push({ itemId, toDoItem});
   console.log(toDoListArray);
}

//This function finds the list item element with the specified data-id attribute (id) and removes it from the unordered list (ul).
const removeItemFromDOM=(id)=>{
   //get the list item by id
   var li = document.querySelector('[data-id="' + id +'"]');
   ul.removeChild(li);
}
//This function filters the toDoListArray to exclude the object with the matching itemId, effectively removing the corresponding To-Do item from the array.
const removeItemFromArray=(id)=>{
  toDoListArray = toDoListArray.filter((item)=> item.itemId !==id);
  console.log(toDoListArray)
}
