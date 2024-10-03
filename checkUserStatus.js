// Проверка, зарегистрирован ли пользователь
function checkUserStatus() {
    // Получаем статус пользователя из localStorage (или любого другого хранилища)
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // Здесь можно использовать переменную, если вы не используете localStorage.

    const loginButton = document.getElementById('login-btn');

    // Если пользователь зарегистрирован, меняем текст
    if (isLoggedIn === 'true') {
        loginButton.textContent = 'Profile';
        loginButton.href = '/profile'; // Ссылка на профиль (замените на нужный путь)
    }
}

// Вызываем функцию при загрузке страницы
document.addEventListener('DOMContentLoaded', checkUserStatus);
