document.addEventListener('DOMContentLoaded', function(){
    const new_task = document.getElementById('new_task');
    const submit = document.getElementById('submit');
    const taskList = document.querySelector('.taskList');
    const todos = [];

    function updateList() {
        taskList.innerHTML = '';
        todos.forEach((todo, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${todo}</span>
                <button class='edit'>Edit</button>
                <button class='delete'>Delete</button>
            `;

            const editButton = listItem.querySelector('.edit');
            const deleteButton = listItem.querySelector('.delete');
            const taskText = listItem.querySelector('span');

            editButton.addEventListener('click', function() {
                const newTaskText = prompt('Edit the task:', taskText.textContent);
                if (newTaskText !== null && newTaskText.trim() !== '') {
                    todos[index] = newTaskText;
                    updateList();
                }
            });

            deleteButton.addEventListener('click', function() {
                todos.splice(index, 1);
                updateList();
            });

            taskList.appendChild(listItem);
        });
    }

    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const trimmed_task = new_task.value.trim();

        if (trimmed_task !== '') {
            todos.push(trimmed_task);
            updateList();
            new_task.value = '';
        }
    });
});
