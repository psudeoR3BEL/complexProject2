document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

    taskList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            toggleComplete(event.target);
        } else if (event.target.classList.contains('delete-btn')) {
            deleteTask(event.target.parentElement);
        }
    });

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            listItem.appendChild(deleteBtn);
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    }

    function toggleComplete(taskItem) {
        taskItem.classList.toggle('completed');
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }
});