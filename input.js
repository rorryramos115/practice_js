const buttonClick = document.getElementById('submit_btn');
const output = document.getElementById('output');

buttonClick.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;


    const commentContainer = document.createElement('div');
     commentContainer.className = 'flex flex-col gap-2 mb-4 bg-white p-4 rounded shadow';
    commentContainer.innerHTML = `
        <h1 class="text-lg font-semibold">${name}: ${comment}</h1>
        <button class='remove_btn py-2 bg-red-600 rounded-lg w-full text-white font-bold'>
            Remove
        </button>
    `;

    output.appendChild(commentContainer);

    const removeComment = commentContainer.querySelector('.remove_btn');
    removeComment.addEventListener('click', () => {
        commentContainer.remove()
    })

})