const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addTask(taskText) {
  const newTask = document.createElement('li');
  newTask.textContent = taskText;

  const deleteButton = createDeleteButton(newTask);
  const editButton = createEditButton(newTask, taskText);

  newTask.appendChild(editButton);
  newTask.appendChild(deleteButton);

  todoList.appendChild(newTask);
}

function createDeleteButton(taskElement) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '삭제';
  deleteButton.classList.add('delete-button');

  deleteButton.addEventListener('click', () => {
    todoList.removeChild(taskElement);
  });

  return deleteButton;
}

function createEditButton(taskElement, initialText) {
  const editButton = document.createElement('button');
  editButton.textContent = '수정';
  editButton.classList.add('edit-button');

  editButton.addEventListener('click', () => {
    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('value', initialText);

    const submitElement = document.createElement('button');
    submitElement.textContent = '완료';
    submitElement.classList.add('submit-button');

    taskElement.textContent = '';
    taskElement.appendChild(inputElement);
    taskElement.appendChild(submitElement);

    submitElement.addEventListener('click', () => {
      const todoEditValue = inputElement.value.trim();

      if (todoEditValue !== '') {
        taskElement.textContent = todoEditValue;
        taskElement.appendChild(createEditButton(taskElement, todoEditValue));
        taskElement.appendChild(createDeleteButton(taskElement));
      }
    });
  });

  return editButton;
}

function validateInput(value) {
  return value.trim() !== '';
}

addButton.addEventListener('click', () => {
  const taskText = todoInput.value.trim();

  if (!validateInput(taskText)) {
    alert('값을 입력해주세요!');
    return;
  }

  addTask(taskText);
  todoInput.value = '';
});
