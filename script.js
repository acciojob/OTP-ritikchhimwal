/*// Select all input elements with the class "code"
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

  input.addEventListener('focus', () => {
    // Clear the value of the input when focused
    input.value = '';
  });
});
*/

const inputs = document.querySelectorAll('.code');

    inputs.forEach((input, index) => {
      input.addEventListener('input', () => {
        if (input.value && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });

      input.addEventListener('keydown', (event) => {
        if (event.key === "Backspace") {
          if (!input.value && index > 0) {
            inputs[index - 1].focus();
          } else {
            input.value = ''; // Clear the input if it has a value
          }
        }
      });

      input.addEventListener('focus', () => {
        inputs.forEach(inp => inp.classList.remove('focused'));
        input.classList.add('focused'); // Add focused class on focus
      });

      input.addEventListener('blur', () => {
        input.classList.remove('focused'); // Remove focused class on blur
      });
    });