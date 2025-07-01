function toggleModal() {
    const modalCard = document.getElementById('modal');
    modalCard.classList.toggle('hidden');
}

const form = document.getElementById('formData');
const tableBody = document.getElementById('tableBody');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log('hello', form)

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (!data.task) {
        alert('Task cannot be empty!');
        return;
    }

    const trRow = document.createElement('tr');
    trRow.className = 'odd:bg-white even:bg-gray-50 border-b border-gray-200';

    trRow.innerHTML = `
        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">${data.task}</td>
        <td class="px-6 py-4">
            <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
            <button class="font-medium text-red-600 hover:underline" onclick="deleteRow(this)">Delete</button>
        </td>
    `;

    tableBody.appendChild(trRow);

    form.reset();
    toggleModal();
});

// ✅ Delete function
function deleteRow(el) {
    if (confirm('Are you sure you want to delete this task?')) {
        el.parentElement.parentElement.remove();
    }
}
