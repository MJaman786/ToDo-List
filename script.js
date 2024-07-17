let itemList = [];

// Function to add a new task
function addItem() {
    let text = document.getElementById('task');
    let time = document.getElementById('date');

    let task = text.value;
    let date = time.value;

    // Add new task to itemList array
    itemList.push({ task, date });

    // Clear input fields
    text.value = '';
    time.value = '';

    // Save updated itemList to localStorage
    saveToLocalStorage();

    // Update display
    display();
}

// Function to display tasks
function display() {
    let NumberOfTask = document.getElementById('noTask');
    NumberOfTask.innerHTML = '';

    // Loop through itemList and create HTML for each task
    for (var i = 0; i < itemList.length; i++) {
        let taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <div>
                <span class="task-name">${itemList[i].task}</span> - 
                <span class="task-date">${itemList[i].date}</span>
            </div>
            <button onclick="removeItem(${i});">Clear</button>
        `;
        NumberOfTask.appendChild(taskItem);
    }
}

// Function to remove a task
function removeItem(index) {
    // Remove task at specified index from itemList
    itemList.splice(index, 1);

    // Save updated itemList to localStorage
    saveToLocalStorage();

    // Update display
    display();
}

// Function to save itemList to localStorage
function saveToLocalStorage() {
    // Convert itemList to JSON string and save to localStorage
    localStorage.setItem('itemList', JSON.stringify(itemList));
}

// Function to load itemList from localStorage
function loadFromLocalStorage() {
    // Retrieve itemList from localStorage and parse JSON string
    const storedItemList = localStorage.getItem('itemList');
    if (storedItemList) {
        itemList = JSON.parse(storedItemList);
    }
    // Ensure to display tasks after loading from localStorage
    display();
}

// Load itemList from localStorage when the page loads
window.onload = loadFromLocalStorage;

