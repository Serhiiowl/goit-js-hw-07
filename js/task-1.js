
const categories = document.querySelectorAll('ul#categories li.item');
categories.forEach(category =>
{
  const title = category.querySelector('h2').textContent;
  const items = category.querySelectorAll('ul li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${items}`);
});
document.addEventListener('DOMContentLoaded', (event) => {
  const listItems = document.querySelectorAll('#categories li:not(.item)');

  listItems.forEach(li => {
    li.style.border = '1px solid #808080';
    li.style.width = '360px';
    li.style.height = '40px';
    li.style.marginBottom = '8px';
    li.style.borderRadius = '8px';
     li.style.fontSize = '16px';
    li.style.letterSpacing = '4%';
    li.style.fontFamily = 'Montserrat, sans-serif';
    li.style.paddingLeft = '20px';
    li.style.paddingTop = '8px';
  });
});
document.body.style.backgroundColor = '#ffffff'; // Встановлюємо білий колір фону для тіла сторінки

  const itemElements = document.querySelectorAll('.item');
itemElements.forEach(item => {
  item.style.backgroundColor = '#f6f6fe';
  item.style.padding = '16px';
  item.style.marginBottom = '24px';
  item.style.width = '392px';
})