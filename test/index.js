const form = document.getElementById('quizForm');
const result = document.getElementById('result');
const userNameInput = document.getElementById('userName');
const focusStatus = document.getElementById('focusStatus');

// Focus and blur
userNameInput.addEventListener('focus', () => {
  focusStatus.innerText = 'Input is focused!';
});

userNameInput.addEventListener('blur', () => {
  focusStatus.innerText = 'Input lost focus.';
});

// Input tracking
userNameInput.addEventListener('input', () => {
  console.log('Typing:', userNameInput.value);
});

// Key tracking
userNameInput.addEventListener('keydown', (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const userName = userNameInput.value.trim();
  const selectedOption = document.querySelector('input[name="question"]:checked');

  if (!userName || !selectedOption) {
    result.innerText = 'Please enter your name and select an answer.';
    result.classList.add('text-red-500');
    return;
  }

  const isCorrect = selectedOption.value === '4';
  result.innerText = `${userName}, your answer is ${isCorrect ? 'Correct ✅' : 'Wrong ❌'}`;
  result.classList.remove('text-red-500');
  result.classList.add(isCorrect ? 'text-green-600' : 'text-red-500');
});

// Change event
document.querySelectorAll('input[name="question"]').forEach((radio) => {
  radio.addEventListener('change', () => {
    console.log('Selected option:', radio.value);
  });
});
