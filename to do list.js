const checklist = document.querySelector('.checklist');

function addTask(heading, description) {
    const task = document.createElement('li');
    task.classList.add('task');
    task.innerHTML = `
        <h2>${heading}</h2>
        <p>${description}</p>
    `;
    checklist.appendChild(task);
}

addTask('Task 1', 'Description of task 1');
addTask('Task 2', 'Description of task 2');
addTask('Task 3', 'Description of task 3');
