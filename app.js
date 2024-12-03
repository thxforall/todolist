const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
  const todoValue = todoInput.value.trim();

  if (todoValue === '') {
    alert('You need input');
    return;
  }

  const newTodo = document.createElement('li');
  newTodo.textContent = todoValue;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'DELETE';

  deleteBtn.style.backgroundColor = '#e74c3c';
  deleteBtn.style.color = 'white';
  deleteBtn.style.padding = '5px';
  deleteBtn.style.borderRadius = '8px';
  deleteBtn.style.cursor = 'pointer';

  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(newTodo);
  });

  newTodo.appendChild(deleteBtn);
  todoList.appendChild(newTodo);
  todoInput.value = '';
});
