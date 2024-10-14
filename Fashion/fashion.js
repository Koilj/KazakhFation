function showProducts(category, subcategory) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; // Очищаем предыдущие товары

    // Замените эти данные на реальные данные о товарах
    const productsData = {
        men: {
            shapan: [
                { image: 'red shapan.jpg', name: 'Shapan 1', price: '100$' },
                { image: 'men clothes.jpg', name: 'Shapan 2', price: '150$' },
                { image: 'menshapan3.jpg', name: 'Shapan 3', price: '120$' },
                { image: 'menshapan4.jpg', name: 'Shapan 4', price: '180$' }
            ],
            vest: [
                { image: 'men-vest1.jpg', name: 'Vest 1', price: '75$' },
                { image: 'men-vest2.jpg', name: 'Vest 2', price: '90$' },
                { image: 'men-vest3.jpg', name: 'Vest 3', price: '85$' },
                { image: 'men-vest4.jpg', name: 'Vest 4', price: '100$' }
            ],
            headdress: [
                { image: 'men-headdress1.jpg', name: 'Headdress 1', price: '50$' },
                { image: 'men-headdress2.jpg', name: 'Headdress 2', price: '60$' },
                { image: 'men-headdress3.jpg', name: 'Headdress 3', price: '60$' },
                { image: 'men-headdress4.jpg', name: 'Headdress 4', price: '70$' }
            ]
        },
        women: {
            shapan: [
                { image: 'womenshapan1.jpeg', name: 'Shapan 1', price: '120$' },
                { image: 'womenshapan2.png', name: 'Shapan 2', price: '180$' },
                { image: 'womenshapan3.jpeg', name: 'Shapan 3', price: '150$' },
                { image: 'womenshapan4.jpeg', name: 'Shapan 4', price: '200$' }
            ],
            headdress: [
                { image: 'womenvest1.jpeg', name: 'Vest 1', price: '85$' },
                { image: 'womenvest2.jpeg', name: 'Vest 2', price: '100$' },
                { image: 'womenvest3.jpeg', name: 'Vest 3', price: '95$' },
                { image: 'womenvest4.jpeg', name: 'Vest 4', price: '110$' }
            ],
            vest: [
                { image: 'womenjil1.png', name: 'Headdress 1', price: '60$' },
                { image: 'womenjil2.png', name: 'Headdress 2', price: '70$' },
                { image: 'womenjil3.png', name: 'Headdress 3', price: '75$' },
                { image: 'womenjil4.png', name: 'Headdress 4', price: '80$' }
            ]
        },
        kids: {
            shapan: [
                { image: 'kidsshapan1.png', name: 'Shapan 1', price: '50$' },
                { image: 'kids-shapan2.jpg', name: 'Shapan 2', price: '70$' },
                { image: 'kids-shapan3.jpg', name: 'Shapan 3', price: '60$' },
                { image: 'kids-shapan4.jpg', name: 'Shapan 4', price: '80$' }
            ],
            headdress: [
                { image: 'kidsvest1.png', name: 'Vest 1', price: '40$' },
                { image: 'kidsvest2.png', name: 'Vest 2', price: '50$' },
                { image: 'kids-vest3.jpg', name: 'Vest 3', price: '45$' },
                { image: 'kids-vest4.jpg', name: 'Vest 4', price: '55$' }
            ],
            vest: [
                { image: 'kids-headdress1.jpg', name: 'Headdress 1', price: '30$' },
                { image: 'kids-headdress2.jpg', name: 'Headdress 2', price: '40$' },
                { image: 'kids-headdress3.jpg', name: 'Headdress 3', price: '35$' },
                { image: 'kids-headdress4.jpg', name: 'Headdress 4', price: '45$' }
            ]
        }
    };

    const selectedProducts = productsData[category][subcategory];

    // Создаем карточки товаров
    selectedProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productName = document.createElement('h4');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;

        productInfo.appendChild(productName);
        productInfo.appendChild(productPrice);

        productItem.appendChild(productImage);
        productItem.appendChild(productInfo);

        // Добавляем корзину
        const cartIcon = document.createElement('div');
        cartIcon.classList.add('cart-icon');

        // Используем изображение корзины
        const cartImg = document.createElement('img');
        cartImg.src = 'carticon.png'; // Замените 'cart-icon.png' на путь к вашему изображению
        cartImg.alt = 'Add to cart';

        cartIcon.appendChild(cartImg);

        // Добавляем счетчик для корзины
        const cartCount = document.createElement('div');
        cartCount.classList.add('cart-count');
        cartCount.textContent = '0'; // Изначальное значение 0

        productItem.appendChild(cartIcon);
        productItem.appendChild(cartCount);

        productsContainer.appendChild(productItem);

        // Обработка клика по корзине
        cartIcon.addEventListener('click', () => {
            let count = parseInt(cartCount.textContent); // Получаем текущее значение
            count++; // Увеличиваем значение
            cartCount.textContent = count; // Обновляем текст
        });
    });

    // Анимация появления товаров
    const productItems = productsContainer.querySelectorAll('.product-item');
    productItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, index * 150); // Ускорили задержку
    });

    // Прокрутка к товарам
    const productDisplay = document.getElementById('product-display');
    // Ждем, пока все товары появятся перед прокруткой
    setTimeout(() => {
        productDisplay.scrollIntoView({ behavior: 'smooth' }); // Плавная прокрутка
    }, 300); // Уменьшили задержку
    // Включаем обработку прокрутки
    enableScrollAnimation();
}

// Функция для управления анимацией категорий
function toggleCategoryAnimation(isScrollingDown) {
    const cards = document.querySelectorAll('.category-card');
    const categoryGrid = document.querySelector('.category-grid');

    if (isScrollingDown) {
        // Прокрутка вниз: поднимаем категории
        cards.forEach(card => {
            card.classList.add('category-up');
            card.classList.remove('category-down'); // Удаляем класс для возвращения вниз
        });
        categoryGrid.classList.add('categories-up');
    } else {
        // Прокрутка вверх: опускаем категории
        cards.forEach(card => {
            card.classList.remove('category-up'); // Удаляем класс для подъема
            card.classList.add('category-down'); // Добавляем класс для возвращения вниз
        });
        categoryGrid.classList.remove('categories-up');
    }
}

// Флаг для отслеживания включения обработчика прокрутки
let scrollAnimationEnabled = false;

// Включение обработчика прокрутки
function enableScrollAnimation() {
    scrollAnimationEnabled = true;
}

// Отключение обработчика прокрутки
function disableScrollAnimation() {
    scrollAnimationEnabled = false;
}

let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
    if (scrollAnimationEnabled) {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollPosition > lastScrollPosition) {
            // Прокрутка вниз
            toggleCategoryAnimation(true); // Включаем анимацию
        } else {
            // Прокрутка вверх
            toggleCategoryAnimation(false); // Включаем анимацию
        }

        lastScrollPosition = currentScrollPosition;
    }
});