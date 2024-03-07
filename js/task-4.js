document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', event => {
    event.preventDefault(); // Запобігає перезавантаженню сторінки

    const formData = new FormData(event.currentTarget);
    const user = {};

    for (const [name, value] of formData) {
      if (!value.trim()) {
        alert('All form fields must be filled in');
        return;
      }
      user[name] = value.trim();
    }

    console.log(user);
    loginForm.reset(); // Очищає форму після відправлення
  });
});

