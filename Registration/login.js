document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Здесь вы можете добавить логику для отправки данных на сервер
    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
        alert('Login successful!');
        // Здесь вы можете перенаправить пользователя на главную страницу или другую страницу
        window.location.href = 'homepage.html'; // Замените на вашу главную страницу
    } else {
        alert('Login failed. Please check your credentials.');
    }
});

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
}
