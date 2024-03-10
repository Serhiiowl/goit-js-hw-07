function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';

  let size = 30; 

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10; 
  }
}

function destroyBoxes() {
  document.getElementById('boxes').innerHTML = '';
}

document.querySelector('[data-create]').addEventListener('click', () => {
  const amount = parseInt(document.querySelector('#controls input[type="number"]').value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);

document.addEventListener('DOMContentLoaded', (event) => {
  const input = document.querySelector('#controls input[type="number"]');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');

  // Встановлення стилів для поля вводу
  input.style.border = '1px solid #808080';
  input.style.borderRadius = '8px';
   input.style.width = '144px';
  // Встановлення стилів для кнопки 'Create'
  createButton.style.backgroundColor = '#4e75ff';
  createButton.style.color = 'white';
  createButton.style.width = '120px';
  createButton.style.marginLeft = '16px';
  createButton.style.marginRight = '16px';
  createButton.style.borderRadius = '8px';
  // Встановлення стилів для кнопки 'Destroy'
  destroyButton.style.backgroundColor = '#FF4E4E';
  destroyButton.style.color = 'white';
  destroyButton.style.width = '120px';
  destroyButton.style.borderRadius = '8px';

  // Додавання hover ефекту для кнопки 'Create'
  createButton.addEventListener('mouseover', () => {
    createButton.style.backgroundColor = '#6c8cff';
  });
  createButton.addEventListener('mouseout', () => {
    createButton.style.backgroundColor = '#4e75ff';
  });


  // Додавання hover ефекту для кнопки 'Destroy'
  destroyButton.addEventListener('mouseover', () => {
    destroyButton.style.backgroundColor = '#ff7070';
  });
  destroyButton.addEventListener('mouseout', () => {
    destroyButton.style.backgroundColor = '#FF4E4E';
  });

  // Зміна рамки поля вводу при наведенні
  input.addEventListener('mouseover', () => {
    input.style.border = '1px solid #000000';
  });
  input.addEventListener('mouseout', () => {
    input.style.border = '1px solid #808080';
  });

});


  



