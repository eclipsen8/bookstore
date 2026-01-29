async function loadBooks() {
  const books = await apiRequest('/books');
  const container = document.getElementById('books');
  container.innerHTML = '';

  books.forEach(book => {
    container.innerHTML += `
      <div class="card">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>${book.price} ₸</p>
        <a href="book.html?id=${book._id}">Подробнее</a>
        <button onclick="addToCart('${book._id}')">В корзину</button>
      </div>
    `;
  });
}

function addToCart(bookId) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(bookId);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Добавлено в корзину');
}

loadBooks();
