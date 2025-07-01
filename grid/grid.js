// grid.js
import { students } from "../data.js";

const gridCardContainer = document.getElementById('gridCards');

students.map(student => {
    const card = document.createElement('div');
    card.className = 'bg-gray-800 rounded-lg p-8 border border-gray-700 text-white';
    card.innerHTML = `
        <h2 class="text-xl font-bold mb-2">ID: ${student.id}</h2>
       <p class="mb-1">Name: ${student.name}</p>
       <p>Course: ${student.course}</p>
    `

    gridCardContainer.appendChild(card)
})