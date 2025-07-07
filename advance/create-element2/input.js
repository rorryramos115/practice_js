const buttonClick = document.getElementById('submit_btn');
const output = document.getElementById('output');

buttonClick.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    const commentContainer = document.createElement('div');
    commentContainer.className = 'flex flex-col gap-2 mb-4 bg-white p-4 rounded shadow';

    // Create elements
    const commentText = document.createElement('h1');
    commentText.textContent = `${name}: ${comment}`;
    commentText.className = 'text-lg font-semibold';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'py-2 bg-yellow-500 rounded-lg text-white font-bold';

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'py-2 bg-red-600 rounded-lg text-white font-bold';

    // Append elements
    commentContainer.appendChild(commentText);
    commentContainer.appendChild(editBtn);
    commentContainer.appendChild(removeBtn);
    output.appendChild(commentContainer);

    // Remove logic
    removeBtn.addEventListener('click', () => {
        commentContainer.remove();
    });

    // Edit logic
    editBtn.addEventListener('click', () => {
        if (editBtn.textContent === 'Edit') {
            const input = document.createElement('input');
            input.value = commentText.textContent;
            input.className = 'py-2 px-2 border rounded';
            commentContainer.insertBefore(input, commentText);
            commentText.style.display = 'none';
            editBtn.textContent = 'Save';
        } else {
            const input = commentContainer.querySelector('input');
            commentText.textContent = input.value;
            commentText.style.display = 'block';
            input.remove();
            editBtn.textContent = 'Edit';
        }
    });
});
