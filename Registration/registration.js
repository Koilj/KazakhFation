const nextButtons = document.querySelectorAll('.next-btn');
const formSteps = document.querySelectorAll('.form-step');
const togglePasswordButtons = document.querySelectorAll('.toggle-password');
const errorMessage = document.getElementById('error-message');
const emailInput = document.getElementById('email');

let currentStep = 0;

// Show the initial step
showStep(currentStep);

function showStep(stepIndex) {
    formSteps.forEach((step, index) => {
        step.classList.toggle('active', index === stepIndex);
        step.classList.toggle('hidden', index !== stepIndex); // Toggle hidden class
    });
    // Reset the error message when moving to a new step
    errorMessage.classList.add('hidden');
}

nextButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Validate email for step 1
        if (currentStep === 0) {
            const email = emailInput.value;
            if (!email.includes('@')) {
                alert('Please enter a valid email address containing "@"');
                return; // Prevent proceeding to the next step
            }
        }

        if (currentStep < formSteps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });
});

// Password visibility toggle
togglePasswordButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const passwordInput = e.target.previousElementSibling;
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        button.textContent = type === 'password' ? 'Show' : 'Hide'; // Toggle button text
    });
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = emailInput.value;
    const verificationCode = document.getElementById('verification-code').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // You can add your registration logic here, like sending data to a server
    console.log('Email:', email);
    console.log('Verification Code:', verificationCode);
    console.log('Password:', password);

    // Add password confirmation logic
    if (password !== confirmPassword) {
        errorMessage.classList.remove('hidden'); // Show error message
        return;
    }


    alert('Registration successful!'); // Feedback for the user
});
