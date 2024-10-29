// Select all input elements with the class "code"
const inputs = document.querySelectorAll('.code');

// Loop through each input to add event listeners
inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    // If a digit is typed, move to the next input if available
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === "Backspace") {
      // If backspace is pressed and the input is empty, move focus to the previous input
      if (!input.value && index > 0) {
        inputs[index - 1].focus();
      }
    }
  });

  inputs.focus();
  });
});
