document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', toggleCompleted);
            li.appendChild(checkbox);

            const span = document.createElement('span');
            span.textContent = taskText;
            span.style.flexGrow = '1';
            li.appendChild(span);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', deleteTask);
            li.appendChild(deleteBtn);

            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function toggleCompleted(event) {
        const listItem = event.target.parentElement;
        listItem.classList.toggle('completed');
    }

    function deleteTask(event) {
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
    }
});