const jsonInput = document.getElementById('jsonInput');
const validateButton = document.getElementById('validateButton');
const formatButton = document.getElementById('formatButton');
const stringButton = document.getElementById('stringButton');
const copyButton = document.getElementById('copyButton');
const validationMessage = document.getElementById('validationMessage');

validateButton.addEventListener('click', () => {
  try {
    JSON.parse(jsonInput.value);
    validationMessage.textContent = 'Valid JSON!';
    validationMessage.style.color = 'green';
  } catch (error) {
    validationMessage.textContent = 'Invalid JSON!';
    validationMessage.style.color = 'red';
  }
});

formatButton.addEventListener('click', () => {
    try {
    const parsedJSON = JSON.parse(jsonInput.value);
    jsonInput.value = JSON.stringify(parsedJSON, null, 2);
  } catch (error) {
    validationMessage.textContent = 'Invalid JSON!';
    validationMessage.style.color = 'red';
  }
    });

stringButton.addEventListener('click', () => {
    try {
    const parsedJSON = JSON.parse(jsonInput.value);
    jsonInput.value = JSON.stringify(parsedJSON);
  } catch (error) {
    validationMessage.textContent = 'Invalid JSON!';
    validationMessage.style.color = 'red';
  }
});

copyButton.addEventListener('click', () => {
  jsonInput.select();
  document.execCommand('copy');
  copyButton.textContent = 'Copied';
  copyButton.classList.add('copied');
  setTimeout(() => {
    copyButton.textContent = 'Copy';
    copyButton.classList.remove('copied');
  }, 1000);
});