document.addEventListener("keydown", enter);

function enter(e) {
    if (e.keyCode == '13') {
        if (validate()) {
            addListElement();
        }
    }
}

let listCount = 0;
let itemId = 0;
let itemsLeft = ' items left';
let itemLeft = ' item left';

function template(){
    let currentId = itemId;
    let text = document.getElementById("add");
    let parent = document.getElementById('list');
    let child = document.createElement('li');
    let input = document.createElement('input');
    input.setAttribute('id', 'checkBox' + currentId);
    input.type = 'checkbox';
    let checkBoxLabel = document.createElement('label');
    checkBoxLabel.setAttribute('class', 'checkBoxLabel');
    checkBoxLabel.setAttribute('for', 'checkBox' + currentId);
    let label = document.createElement('label');
    label.setAttribute('class', 'listItemLabel')
    label.text = text.value;
    label.value = text.value;
    label.textContent = text.value;
    let button = document.createElement('button');
    button.setAttribute('id', 'buttonItem' + currentId);
    child.appendChild(input);
    child.appendChild(checkBoxLabel);
    child.appendChild(label);
    child.appendChild(button);
    child.setAttribute('id', 'listItem' + currentId);
    child.setAttribute('class', 'listItem');
    parent.appendChild(child);
    document.getElementById('buttonItem' + currentId).addEventListener('click', function () {
        removeListElement('listItem' + currentId);
    });
    listCount++;
    text.value = "";
}

function addListElement() {
    itemId++;
    template();
    updateCount();
}
function removeListElement(listItemId) {
    let parent = document.getElementById('list');
    let element = document.getElementById(listItemId);
    parent.removeChild(element);
    listCount--;
    updateCount();
}

function validate() {
    let text = document.getElementById("add");
    if (text.value == "" || text.value == null || text.value == " ") {
        return false;
    }
    else {
        return true;
    }
}

function updateCount() {
    if (listCount == 0) {
        let labelDiv = document.getElementById('divLabel');
        let parent = document.getElementById('mainHeader');
        parent.removeChild(labelDiv);
    }
    else {
        if (document.getElementById('countLabelId')) {
            let countLabel = document.getElementById('countLabelId');
            countLabel.textContent = listCount + itemsLeft;
        }
        else {
            let labelDiv = document.createElement('div')
            labelDiv.setAttribute('id', 'divLabel');
            let countLabel = document.createElement('label');
            countLabel.setAttribute('id', 'countLabelId');
            countLabel.textContent = listCount + itemLeft;
            labelDiv.appendChild(countLabel);
            let parent = document.getElementById('mainHeader');
            parent.appendChild(labelDiv);
        }
    }
}