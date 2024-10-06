const nextButtons = document.querySelectorAll('.next-btn');
const formSteps = document.querySelectorAll('.form-step');
const errorMessage = document.getElementById('error-message');
const emailInput = document.getElementById('email');

let currentStep = 0;

// Показать начальный шаг
showStep(currentStep);

function showStep(stepIndex) {
    formSteps.forEach((step, index) => {
        step.classList.toggle('active', index === stepIndex);
        step.classList.toggle('hidden', index !== stepIndex);
    });
    errorMessage.classList.add('hidden'); // Скрыть сообщение об ошибке
}

nextButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Проверка электронной почты на первом шаге
        if (currentStep === 0) {
            const email = emailInput.value;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                showError('Адрес электронной почты должен содержать символ "@" и домен.');
                return;
            }
        }

        currentStep++;
        if (currentStep < formSteps.length) {
            showStep(currentStep);
        }
    });
});

// Обработка отправки формы
document.getElementById('registration-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = emailInput.value;
    const verificationCode = document.getElementById('verification-code').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Сбросить сообщение об ошибке
    errorMessage.classList.add('hidden');

    if (password !== confirmPassword) {
        showError('Пароли не совпадают. Пожалуйста, попробуйте еще раз.');
        return;
    }

    // Подготовка данных для отправки на сервер
    const registrationData = {
        email,
        verificationCode,
        password
    };

    // Отправка данных на сервер
    const response = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
    });

    if (response.ok) {
        alert('Регистрация успешна! Пожалуйста, проверьте свою почту для активации аккаунта.');
        window.location.href = 'login.html';
    } else {
        showError('Регистрация не удалась. Пожалуйста, попробуйте еще раз.');
    }
});

// Функция для отображения сообщений об ошибках
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
}
