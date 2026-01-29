async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const res = await apiRequest('/auth/login', 'POST', { email, password });
  localStorage.setItem('token', res.token);
  alert('Успешный вход');
}
