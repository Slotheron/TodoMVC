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
function addListElement() {
    itemId++;
    let currentId = itemId;
    let text = document.getElementById("add");
    let parent = document.getElementById('list');
    let child = document.createElement('li');
    let input = document.createElement('input');
    input.type = 'checkbox';
    let label = document.createElement('label');
    label.text = text.value;
    label.value = text.value;
    label.textContent = text.value;
    let button = document.createElement('button');
    button.setAttribute('id', 'buttonItem' + currentId);
    button.textContent = 'X'
    child.appendChild(input);
    child.appendChild(label);
    child.appendChild(button);
    child.setAttribute('id', 'listItem' + currentId);
    parent.appendChild(child);
    document.getElementById('buttonItem' + currentId).addEventListener('click', function () {
        removeListElement('listItem' + currentId);
    });
    listCount++;
    text.value = "";
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
            countLabel.textContent = listCount;
        }
        else {
            let labelDiv = document.createElement('div')
            labelDiv.setAttribute('id', 'divLabel');
            let countLabel = document.createElement('label');
            countLabel.setAttribute('id', 'countLabelId');
            countLabel.textContent = listCount;
            labelDiv.appendChild(countLabel);
            let parent = document.getElementById('mainHeader');
            parent.appendChild(labelDiv);
        }
    }
}