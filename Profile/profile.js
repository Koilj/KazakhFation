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
    event.preventDefault();
    const productName = document.getElementById('product-name').value;
    const productDescription = document.getElementById('product-description').value;
    const price = document.getElementById('price').value;
    const phoneNumber = document.getElementById('photos').value;

    localStorage.setItem('productName', productName);
    localStorage.setItem('productDescription', productDescription);
    localStorage.setItem('price', price);
    localStorage.setItem('phoneNumber', phoneNumber);

    document.querySelector('.settings-form').reset();
    alert("Данные успешно сохранены!");
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
    const savedProductName = localStorage.getItem('productName');
    const savedProductDescription = localStorage.getItem('productDescription');
    const savedPrice = localStorage.getItem('price');
    const savedPhoneNumber = localStorage.getItem('phoneNumber');

    if (savedUserName) {
        document.getElementById('name').value = savedUserName;
        document.getElementById('username').innerText = savedUserName;
    }
    if (savedUserEmail) {
        document.getElementById('email').value = savedUserEmail;
        document.getElementById('userEmail').innerText = savedUserEmail;
    }
    if (savedUserAvatar) document.getElementById('userAvatar').src = savedUserAvatar;
    if (savedProductName) document.getElementById('shop-name').value = savedProductName;
    if (savedProductDescription) document.getElementById('shop-description').value = savedProductDescription;
    if (savedPrice) document.getElementById('shop-website').value = savedPrice;
    if (savedPhoneNumber) document.getElementById('phone-number').value = savedPhoneNumber;
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
