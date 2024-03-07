function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.addEventListener('DOMContentLoaded', () => {
  const changeColorButton = document.querySelector('button.change-color');
  const colorSpan = document.querySelector('span.color');

  changeColorButton.addEventListener('click', () => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    colorSpan.textContent = color;
  });
});

