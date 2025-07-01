const form = document.getElementById('testForm');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log('Form Data:', data); // Log the data before sending

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log('API Response:', result);

        alert('Form submitted successfully!');
        form.reset(); // Optional: Reset the form

    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong!');
    }
});
