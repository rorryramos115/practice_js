const toggleDetails = document.getElementById('show_details');
const showDetails = document.getElementById('user_details');
let show = true

toggleDetails.addEventListener('click', () => {
    show = !show

    toggleDetails.innerText = show ? 'Show Student Details' : 'Hide Details';

    if(show) {
       showDetails.innerHTML = '';
    } else { 
         showDetails.innerHTML = `
            <div class="">
                <h1 class="text-2xl font-bold">Name : Rorry Ramos</h1>
                <h1 class="text-lg text-gray-700">Email : Rorryramos@gmail.com</h1>
                <h1 class="text-lg">Course : BSIT</h1>
                <h1 class="text-lg">Section : AB-01</h1>
            </div>
        `
    }
    


})