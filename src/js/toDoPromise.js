
document.getElementById("addButton").addEventListener('click',function () {
    var item = document.getElementById("todoInput").value;

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
    let{text, newItem, checkbox} =createElements(item);

    newItem.appendChild(text);
    newItem.appendChild(checkbox);

    checkbox.addEventListener('click', function () {

        var promiseDone = new Promise(function (resolve, reject) {
            if (newItem.textContent.length > 0) {
                resolve(newItem);
            }
            else {
                reject(newItem);
            }
        });

        promiseDone.then(function () {

            document.getElementById("todoDone").appendChild(addToDone(text));

            newItem.removeChild(checkbox);
            newItem.removeChild(text);

        }).catch(function (error) {

        });
    });
    return newItem;
};
function createElements(item) {
    let newItem = document.createElement("li");
    let text = document.createTextNode(item);
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.textContent = text;
    return {text, newItem, checkbox};
}

var addToDone = function (text) {
    let doneItem = document.createElement("li");
    let doneCheckbox = document.createElement("input");
    doneCheckbox.setAttribute("type", "checkbox");
    
    doneItem.appendChild(text);
    doneItem.appendChild(doneCheckbox);

    doneCheckbox.addEventListener('click', function () {
        doneItem.removeChild(doneCheckbox);
        doneItem.removeChild(text);
    });

    return doneItem;
};