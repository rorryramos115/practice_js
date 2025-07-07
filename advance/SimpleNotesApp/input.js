const form = document.getElementById('noteForm');
const notesList = document.getElementById('notesList');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const charCount = document.getElementById('charCount');

let editingNote = null;

// Character counter
contentInput.addEventListener('input', () => {
  charCount.textContent = `${contentInput.value.length} / 200 characters`;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (!title || !content) {
    alert("Both title and content are required.");
    return;
  }

  if (editingNote) {
    // If editing, update existing note
    const h3 = editingNote.querySelector('h3');
    const p = editingNote.querySelector('p');
    h3.textContent = title;
    p.textContent = content;
    editingNote = null;
  } else {
    createNote(title, content);
  }

  form.reset();
  charCount.textContent = '0 / 200 characters';
});

function createNote(title, content) {
  const noteDiv = document.createElement('div');
  noteDiv.className = 'bg-white p-4 rounded shadow';

  const h3 = document.createElement('h3');
  h3.className = 'text-lg font-semibold';
  h3.textContent = title;

  const p = document.createElement('p');
  p.className = 'text-gray-700 mt-1';
  p.textContent = content;

  const btnGroup = document.createElement('div');
  btnGroup.className = 'mt-4 space-x-2';

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600';
  editBtn.addEventListener('click', () => {
    titleInput.value = h3.textContent;
    contentInput.value = p.textContent;
    charCount.textContent = `${p.textContent.length} / 200 characters`;
    editingNote = noteDiv;
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600';
  deleteBtn.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.remove(); // remove noteDiv
  });

  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);

  noteDiv.appendChild(h3);
  noteDiv.appendChild(p);
  noteDiv.appendChild(btnGroup);

  notesList.appendChild(noteDiv);
}
