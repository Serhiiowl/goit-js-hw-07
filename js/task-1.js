
const categories = document.querySelectorAll('ul#categories li.item');
categories.forEach(category =>
{
  const title = category.querySelector('h2').textContent;
  const items = category.querySelectorAll('ul li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${items}`);
});
