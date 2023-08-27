// Create a new list item when clicking on the "Add" button
function addListItem() {
    var li = document.createElement(li);
    var inputValue = document.getElementById("newTask").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        var list = document.getElementById("toDoList");
        li.classList.add("newItem");

        if(++list.childElementCount % 2 == 0){
            li.classList.add("even");
        } else {
            li.classList.add("odd");
        }
        
        list.appendChild(li);
    }
    document.getElementById("newTask").value = "";
}
/* Submitted by Maria Eloisa H. Garcia */

