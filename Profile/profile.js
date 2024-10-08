function saveSettings(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value; // Consider hashing
    const paymentMethod = document.getElementById('payment-method').value;

    // Save data to localStorage
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password); // Not secure in real apps
    localStorage.setItem('userPaymentMethod', paymentMethod);

    // Update information on the page
    document.getElementById('username').innerText = name;
    document.getElementById('userEmail').innerText = email;

    // Clear form fields
    document.querySelector('.settings-form').reset();
    alert("Данные успешно сохранены!");
}

function saveSellerDetails(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from fields
    const fullName = document.getElementById('full-name').value;
    const idNumber = document.getElementById('id-number').value; // Изменено здесь
    const passport = document.getElementById('id-photo').files[0]; // Изменено здесь
    const bankDetails = document.getElementById('bank-details').value;
    const phoneNumber = document.getElementById('phone-number').value;

    // Save data to localStorage
    localStorage.setItem('sellerFullName', fullName);
    localStorage.setItem('sellerIDNumber', idNumber); // Изменено здесь
    localStorage.setItem('sellerBankDetails', bankDetails);
    localStorage.setItem('sellerPhoneNumber', phoneNumber);

    // For file (passport), save as base64 string
    if (passport) {
        const reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem('sellerPassport', e.target.result);
            alert("Данные успешно сохранены!");
        };
        reader.readAsDataURL(passport);
    } else {
        alert("Данные успешно сохранены!");
    }

    // Clear form fields
    document.querySelector('.seller-form').reset();
}

function changeAvatar(event) {
    event.stopPropagation(); // Prevent event bubbling

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const avatarImage = document.getElementById('userAvatar');
                avatarImage.src = e.target.result;

                // Save the new avatar in localStorage
                localStorage.setItem('userAvatar', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    fileInput.click(); // Prompt for file selection
}

// Load saved data on page load
window.onload = () => {
    const savedUserName = localStorage.getItem('userName');
    const savedUserEmail = localStorage.getItem('userEmail');
    const savedUserAvatar = localStorage.getItem('userAvatar');
    const savedSellerFullName = localStorage.getItem('sellerFullName');
    const savedSellerUIN = localStorage.getItem('sellerUIN');
    const savedSellerTaxNumber = localStorage.getItem('sellerTaxNumber');
    const savedSellerAddress = localStorage.getItem('sellerAddress');
    const savedSellerBankDetails = localStorage.getItem('sellerBankDetails');
    const savedSellerPhoneNumber = localStorage.getItem('sellerPhoneNumber');
    const savedSellerPassport = localStorage.getItem('sellerPassport');

    if (savedUserName) {
        document.getElementById('name').value = savedUserName;
        document.getElementById('username').innerText = savedUserName;
    }
    if (savedUserEmail) {
        document.getElementById('email').value = savedUserEmail;
        document.getElementById('userEmail').innerText = savedUserEmail;
    }
    if (savedUserAvatar) document.getElementById('userAvatar').src = savedUserAvatar;

    // Populate seller fields
    if (savedSellerFullName) document.getElementById('full-name').value = savedSellerFullName;
    if (savedSellerUIN) document.getElementById('uin').value = savedSellerUIN;
    if (savedSellerTaxNumber) document.getElementById('tax-number').value = savedSellerTaxNumber;
    if (savedSellerAddress) document.getElementById('address').value = savedSellerAddress;
    if (savedSellerBankDetails) document.getElementById('bank-details').value = savedSellerBankDetails;
    if (savedSellerPhoneNumber) document.getElementById('phone-number').value = savedSellerPhoneNumber;

    // Optional: If you want to show the uploaded passport file link
    if (savedSellerPassport) {
        console.log("Загруженный паспорт:", savedSellerPassport); // For debug purposes
    }
};

function toggleSettings() {
    const settingsSection = document.querySelector('.settings-section');
    settingsSection.style.display = settingsSection.style.display === 'none' || settingsSection.style.display === ''
        ? 'block'
        : 'none';
}

function toggleSeller() {
    const sellerSection = document.querySelector('#seller');
    sellerSection.style.display = sellerSection.style.display === 'none' || sellerSection.style.display === ''
        ? 'block'
        : 'none';
}
