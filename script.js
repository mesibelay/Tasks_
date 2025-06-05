const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = taskText;

  const actions = document.createElement('div');
  actions.className = 'task-actions';

  const viewBtn = document.createElement('button');
  viewBtn.className = 'view-btn';
  viewBtn.textContent = 'View';
  viewBtn.onclick = () => alert(`Task: ${taskText}`);

  const completeBtn = document.createElement('button');
  completeBtn.className = 'complete-btn';
  completeBtn.textContent = 'Complete';
  completeBtn.onclick = () => {
    li.classList.toggle('completed');
    if (li.classList.contains('completed')) {
      alert("✅ Task marked as completed!");
    } else {
      alert("Task marked as incomplete.");
    }
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(viewBtn);
  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);
  taskInput.value = '';
});
