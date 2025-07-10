let correctNumber = Math.floor(Math.random() * 10) + 1;

let count = 0;

const btn = document.getElementById('submit_btn');

btn.addEventListener('click', () => {
    const guestInput = document.getElementById('input_number');
    const output = document.getElementById('output');

    const userGuess = parseInt(guestInput.value); 
    output.innerHTML = '';

    count++; 

    if (userGuess === correctNumber) {
        output.innerHTML = `
            <div class='flex flex-col'>
                <h1 class='font-bold'>Total Attempts: ${count}</h1>
                <p class="text-green-600 font-bold">🎉 Correct! You guessed the number!</p>

                <button id='play-again' class='py-2 bg-blue-600 text-white font-semibold w-full'>
                  Play Again
                </button>
            </div>
        `;

        btn.className = 'bg-gray-400 py-3 text-center rounded-lg w-full text-white font-bold'
        guestInput.disabled = true;
        btn.disabled = true;


        // reset game
        const playAgainBtn = document.getElementById('play-again');
        playAgainBtn.addEventListener('click', () => {
            correctNumber = Math.floor(Math.random() * 10) + 1; 
            count = 0; 
            output.innerHTML = '';
            btn.className = 'py-3 text-center bg-green-600 rounded-lg w-full text-white font-bold'
            guestInput.disabled = false;
            btn.disabled = false;
            guestInput.value = '';
        });

    } else {
        guestInput.value = ''
        output.innerHTML = `
            <div class='text-red-600'>
                ❌ Wrong guess! Try again.
            </div>
        `;
    }


});

