//  use case of input events with appendChild

const form = document.getElementById('formData');
const output = document.getElementById('display');

form.addEventListener('input', () => {

    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

    const createdAlement = document.createElement('div');

    createdAlement.innerHTML = `
       <h1 class="text-3xl font-bold mt-8">Created Element Append</h1>
    `;

    output.innerHTML = `
        <div>
            <h1 class="text-3xl font-bold mb-3">${formObject.name || ''}</h1>
            <div class="p-2.5 bg-green-400">
                <h3 class="text-xl font-semibold">Personal Details</h3>
            </div>

            <div class="grid grid-cols-2 gap-5">
                <div class="flex items-center justify-between">
                    <h1 class="text-lg font-semibold">Name</h1>
                    <span class="text-lg font-semibold">:</span>
                </div>
                <div><span class="text-lg font-semibold">${formObject.name || ''}</span></div>
            </div>

            <div class="grid grid-cols-2 gap-5">
                <div class="flex items-center justify-between">
                    <h1 class="text-lg font-semibold">Birth Place</h1>
                    <span class="text-lg font-semibold">:</span>
                </div>
                <div><span class="text-lg font-semibold">${formObject.placebirth || ''}</span></div>
            </div>

            <div class="grid grid-cols-2 gap-5">
                <div class="flex items-center justify-between">
                    <h1 class="text-lg font-semibold">Status</h1>
                    <span class="text-lg font-semibold">:</span>
                </div>
                <div><span class="text-lg font-semibold">${formObject.status || ''}</span></div>
            </div>
        </div>
    `;

    output.appendChild(createdAlement)
});
