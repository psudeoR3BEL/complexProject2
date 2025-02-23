document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            deleteTask(event.target.parentElement);
        }    
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                ${taskText}
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }
});