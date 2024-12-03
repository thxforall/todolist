// 컴포넌트화 모듈화 X 기존 방식
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', () => {
  const taskText = todoInput.value.trim();

  if (taskText === '') {
    alert('값을 입력해주세요!');
    return;
  }

  const newTask = document.createElement('li');
  newTask.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '삭제';

  deleteButton.classList.add('delete-button');

  deleteButton.addEventListener('click', () => {
    todoList.removeChild(newTask);
  });

  // 수정 버튼
  const editButton = document.createElement('button');
  editButton.textContent = '수정';
  editButton.classList.add('edit-button');

  // 수정 버튼 이벤트
  editButton.addEventListener('click', () => {
    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('value', taskText);

    // 수정 완료 버튼
    const submitElement = document.createElement('button');
    submitElement.textContent = '완료';
    submitElement.classList.add('submit-button');

    // 기존 text 숨기기
    newTask.textContent = '';
    newTask.appendChild(inputElement);
    newTask.appendChild(submitElement);

    // 수정 완료 버튼 이벤트
    submitElement.addEventListener('click', () => {
      const todoEditValue = inputElement.value;
      newTask.textContent = todoEditValue;

      newTask.appendChild(editButton);
      newTask.appendChild(deleteButton);
    });
  });

  newTask.appendChild(editButton);
  newTask.appendChild(deleteButton);

  todoList.appendChild(newTask);

  todoInput.value = '';
});
