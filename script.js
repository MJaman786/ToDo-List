let itemList = [];
function addItem(){
    let text = document.getElementById('task');
    let time = document.getElementById('date');

    let task = text.value;
    let date = time.value;
    
    itemList.push({task, date});
    
    text.value = '';
    time.value = '';

    display();
}

function display(){
    let NumberOfTask = document.getElementById('noTask');
    NumberOfTask.innerHTML = ' ';

    for (var i = 0; i < itemList.length; i++) {
        let taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        // taskItem.innerText = itemList[i].task + ' - ' + itemList[i].date;
        taskItem.innerHTML = `
            <div>
                <span class="task-name">${itemList[i].task}</span> - 
                <span class="task-date">${itemList[i].date}</span>
            </div>
            <button onclick="removeItem(${i});">Clear</button>
        `
        NumberOfTask.appendChild(taskItem); // Correctly append each task item
    }
    
}

function removeItem(index) {
    itemList.splice(index, 1); // Remove the item at the given index
    display(); // Refresh the list display
}

