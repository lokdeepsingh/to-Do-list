const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskList');
function addTask() {
    const text = input.value.trim();
    if (!text) return;
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="task-content">
            <input type="checkbox" onclick="this.closest('li').classList.toggle('done')">
            <span>${text}</span>
        </div>
        <span class="del-text" onclick="this.parentElement.remove()">Delete</span>
    `;
    list.appendChild(li);
    input.value = '';}
addBtn.onclick = addTask;
input.onkeydown = (e) => { if (e.key === 'Enter') addTask(); };