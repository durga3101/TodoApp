/**
 * Created by nvankaya on 9/13/16.
 */

document.getElementById("addButton").addEventListener('click', function () {
    let item = document.getElementById("todoInput").value;

    let promiseTodo = new Promise(function (resolve, reject) {
        if (item.length > 0) {
            resolve(item);
        }
        else {
            reject(item);
        }
    });

    promiseTodo.then(function (item) {
        document.getElementById("todoList").appendChild(addToList(item));

        document.getElementById("todoInput").value = '';

    }).catch(function (error) {
        alert("enter data");
    });

});

var addToList = function (item) {
    let text = document.createTextNode(item);
    let todoItem = document.createElement("li");
    let toDoCheckbox = document.createElement("input");
    toDoCheckbox.setAttribute("type", "checkbox");
    todoItem.textContent = text;
    

    todoItem.appendChild(text);
    todoItem.appendChild(toDoCheckbox);

    toDoCheckbox.addEventListener('click', function () {

        var promiseDone = new Promise(function (resolve, reject) {
            if (todoItem.textContent.length > 0) {
                resolve(todoItem);
            }
            else {
                reject(todoItem);
            }
        });

        promiseDone.then(function () {

            document.getElementById("todoDone").appendChild(addToDone(text));

            todoItem.removeChild(toDoCheckbox);
            todoItem.removeChild(text);

        }).catch(function (error) {

        });
    });
    return todoItem;
};

function createElements() {
    let item = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    return {item, checkbox};
}
var addToDone = function (text) {
    let {doneItem, doneCheckbox}=createElements();

    doneItem.appendChild(text);
    doneItem.appendChild(doneCheckbox);

    doneCheckbox.addEventListener('click', function () {
        doneItem.removeChild(doneCheckbox);
        doneItem.removeChild(text);
    });

    return doneItem;
};