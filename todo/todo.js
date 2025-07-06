const submitButton = document.getElementById('submit_btn');
const taskInput = document.getElementById('task_input');
const taskList = document.getElementById('task_list');
const taskCount = document.getElementById('task_count');

let totalTasks = 0;

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const tastText = taskInput.value.trim();

   const li = document.createElement('li');
     li.className = 'flex justify-between items-center mb-2 bg-white p-2 rounded';

   li.innerHTML = `
   <span>${tastText}</span>
   <span class="delete-btn">❌</span>
   `;

   li.querySelector('span').addEventListener('click', () => {
    li.querySelector('span').classList.toggle('done')
   });

   li.querySelector('.delete-btn').addEventListener('click', (e) => {
    e.preventDefault()
    taskList.removeChild(li);
    totalTasks --;
    taskCount.innerText = totalTasks;
   });

   taskList.appendChild(li);
   totalTasks++;
   taskCount.innerText = totalTasks;
   taskInput.value = '';

})