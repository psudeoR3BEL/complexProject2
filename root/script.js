document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const prioritySelect = document.getElementById('prioritySelect');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        const priority = prioritySelect.value;

        if (taskText === '') {
            return;
        }

        const li = document.createElement('li');
        const taskTextSpan = document.createElement('span');
        taskTextSpan.classList.add('task-text');
        taskTextSpan.textContent = taskText;
        taskTextSpan.addEventListener('click', function() {
            taskTextSpan.classList.toggle('completed');
        });

        li.appendChild(taskTextSpan);

        const priorityTag = document.createElement('span');
        priorityTag.classList.add('priority-tag', priority);
        priorityTag.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);
        li.appendChild(priorityTag);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            li.remove();
        });
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = '';
    }
});