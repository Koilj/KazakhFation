function registerUser() {
    // Логика регистрации пользователя

    // После успешной регистрации устанавливаем статус в localStorage
    localStorage.setItem('isLoggedIn', 'true');

    // Перезагрузка страницы или перенаправление на другую страницу
    location.reload(); // Или используйте window.location.href = '/main'; чтобы перейти на главную
}
