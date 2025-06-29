document.addEventListener('DOMContentLoaded', () => {
  const randomNumber = () => Math.floor(Math.random() * 10) + 1;

  let target = randomNumber();
  let guesses = 0;

  const feedback = document.getElementById('feedback');
  const input = document.getElementById('guessField');
  const submit = document.getElementById('submitBtn');
  const reset = document.getElementById('resetBtn');

  submit.addEventListener('click', () => {
    const guess = parseInt(input.value, 10);
    guesses++;

    if (!guess || guess < 1 || guess > 10) {
      feedback.textContent = 'Please enter a number 1–10.';
      feedback.style.color = '#f00';
    } else if (guess === target) {
      alert(`🎉 Correct! You guessed it in ${guesses} tries.`);
      feedback.textContent = `You won in ${guesses} tries!`;
      feedback.style.color = 'blue';
      submit.disabled = true;
    } else if (guesses >= 2) {
      alert(`Game over! The number was ${target}.`);
      feedback.textContent = `Game over! It was ${target}.`;
      feedback.style.color = 'blue';
      submit.disabled = true;
    } else if (guess < target) {
      feedback.textContent = 'Too low! Try again.';
      feedback.style.color = 'blue';
    } else {
      feedback.textContent = 'Too high! Try again.';
      feedback.style.color = 'blue';
    }

    input.value = '';
    input.focus();
  });

  reset.addEventListener('click', () => {
    target = randomNumber();
    guesses = 0;
    feedback.textContent = 'New game started. Take a guess!';
    feedback.style.color = '#fff';
    submit.disabled = false;
    input.value = '';
    input.focus();
  });
});
