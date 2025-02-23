document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const prioritySelect = document.getElementById('prioritySelect');

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }    
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        const priority = prioritySelect.value;

        if (taskText !== '') {
            const li = document.createElement('li');
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            taskSpan.addEventListener('click', toggleComplete);

            // Apply priority class
            taskSpan.classList.add(`priority-${priority}`);

            li.appendChild(taskSpan);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', deleteTask);
            li.appendChild(deleteBtn);

            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function deleteTask() {
        this.parentElement.remove();
    }

    function toggleComplete() {
        this.classList.toggle('completed');
    }
});