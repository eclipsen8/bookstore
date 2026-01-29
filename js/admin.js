async function addBook() {
  const token = localStorage.getItem('token');

  const book = {
    title: title.value,
    author: author.value,
    price: price.value
  };

  await apiRequest('/books', 'POST', book, token);
  alert('Книга добавлена');
}
