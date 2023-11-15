document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.querySelector(".task-list");
    const messageForm = document.getElementById("message-form");
    const messageInput = document.getElementById("message-input");
    const messageList = document.querySelector(".messages");

    // Handle task submission
    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const taskText = taskInput.value;
        if (taskText.trim() !== "") {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    });

    // Handle message submission
    messageForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const messageText = messageInput.value;
        if (messageText.trim() !== "") {
            const messageItem = document.createElement("li");
            messageItem.textContent = messageText;
            messageList.appendChild(messageItem);
            messageInput.value = "";
        }
    });
});
function createTask() {
    var taskInput = document.getElementById('task-input');
    var taskTitleInput = document.getElementById('task-title-input');
    
    var taskText = taskInput.value.trim();
    var taskTitle = taskTitleInput.value.trim();

    if (taskText !== '' && taskTitle !== '') {
        var taskList = document.getElementById('task-list');
        var newTask = document.createElement('li');
        newTask.textContent = `${taskTitle}: ${taskText}`;
        newTask.innerHTML = '<h3>${taskTitle}</h3><p>${taskText}</p>'
        
        // Marks as completed but not working
        newTask.addEventListener('click', function() {
            if (!newTask.classList.contains('completed')) {
                newTask.classList.add('completed');
            } else {
                newTask.classList.remove('completed');
            }
        });
        
        taskList.appendChild(newTask);
        taskInput.value = '';
        taskTitleInput.value = '';
    }
}


function createTask() {
    var taskTitleInput = document.getElementById('task-title-input');
    var taskInput = document.getElementById('task-input');
    
    var taskTitle = taskTitleInput.value.trim();
    var taskText = taskInput.value.trim();

    if (taskTitle !== '' && taskText !== '') {
        var taskCards = document.querySelector('.task-cards');
        var newTaskCard = document.createElement('div');
        newTaskCard.classList.add('task-card');
        newTaskCard.innerHTML = `<h3>${taskTitle}</h3><p>${taskText}</p>`;
        
        // Add event listener to mark task as completed when clicked
        newTaskCard.addEventListener('click', function() {
            if (!newTaskCard.classList.contains('completed')) {
                newTaskCard.classList.add('completed');
            } else {
                newTaskCard.classList.remove('completed');
            }
        });
        
        taskCards.appendChild(newTaskCard);
        taskTitleInput.value = '';
        taskInput.value = '';
    }
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }