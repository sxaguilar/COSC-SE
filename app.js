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
