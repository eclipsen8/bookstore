const cart = JSON.parse(localStorage.getItem('cart') || '[]');
const ul = document.getElementById('cart');

cart.forEach(id => {
  const li = document.createElement('li');
  li.textContent = `Book ID: ${id}`;
  ul.appendChild(li);
});
