function todoList() {
    var item = document.getElementById("todoInput").value;

    if (item.length > 0) {
        var text = document.createTextNode(item);

        var newItem = document.createElement("li");
        var toDoCheckbox = document.createElement("input");
        toDoCheckbox.setAttribute("type", "checkbox");
        toDoCheckbox.textContent = text;

        newItem.appendChild(text);
        newItem.appendChild(toDoCheckbox);
        document.getElementById("todoList").appendChild(newItem);

        toDoCheckbox.addEventListener('click', function () {
            var doneItem = document.createElement("li");
            var doneCheckbox = document.createElement("input");
            doneCheckbox.setAttribute("type", "checkbox");

            doneItem.appendChild(text);
            doneItem.appendChild(doneCheckbox);

            document.getElementById("todoDone").appendChild(doneItem);

            newItem.removeChild(toDoCheckbox);

            doneCheckbox.addEventListener('click', function () {
                doneItem.removeChild(doneCheckbox);
                doneItem.removeChild(text);
            });
            document.getElementById("todoInput").value = '';
        });
    }
    else
        {
            alert("Enter some task");
        }

}
