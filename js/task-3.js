document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#name-input');
  const output = document.querySelector('#name-output');

  input.addEventListener('input', () => {
    const trimmedInput = input.value.trim();
    output.textContent = trimmedInput ? trimmedInput : 'Anonymous';
  });
});
document.addEventListener('DOMContentLoaded', (event) => {
  const nameInput = document.getElementById('name-input');
  nameInput.style.width = '360px';
  nameInput.style.height = '40px';
  nameInput.style.borderRadius = '8px';
  nameInput.style.paddingLeft = '16px';
  nameInput.style.fontSize = '16px';
});