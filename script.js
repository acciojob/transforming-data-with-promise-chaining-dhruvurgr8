const btn = document.querySelector('#btn');
const userInput = document.querySelector('#ip');
const output = document.querySelector('#output');

btn.addEventListener('click', () => {
  output.textContent = "Calculating...";

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const inputNumber = parseFloat(userInput.value);
      if (!isNaN(inputNumber)) {
        resolve(inputNumber);
      } else {
        throw new Error("Invalid input. Please enter a valid number.");
      }
    }, 2000);
  });

  promise
    .then((number) => {
      output.textContent = `Result: ${number}`;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(number);
        }, 2000);
      });
    })
    .then((number) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = number * 2;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((number) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = number - 3;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((number) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = number / 2;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((number) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = number + 10;
          output.textContent = `Final Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .catch((error) => {
      output.textContent = `Error: ${error.message}`;
    });
});
