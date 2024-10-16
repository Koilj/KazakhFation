function showProducts(category, subcategory) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; // Очищаем предыдущие товары

    // Замените эти данные на реальные данные о товарах
    const productsData = {
        men: {
            belyak: [
                { image: 'belyak1.jpg', name: 'Belyak 1', price: '100$' },
                { image: 'belyak2.jpg', name: 'Belyak 2', price: '150$' },
                { image: 'belyakv3.png', name: 'Belyak 3', price: '120$' },
                { image: 'belyakv4.png', name: 'Belyak 4', price: '180$' }
            ],
            kungyrlau: [
                { image: 'kungyrlau1.png', name: 'Kungyrlau 1', price: '75$' },
                { image: 'kungyrlau2.png', name: 'Kungyrlau 2', price: '90$' },
                { image: 'kungyrlau3.png', name: 'Kungyrlau 3', price: '85$' },
                { image: 'kungyrlau4.png', name: 'Kungyrlau 4', price: '100$' }
            ],
            besshagar: [
                { image: 'besshagar1.png', name: 'Besshagar 1', price: '50$' },
                { image: 'besshagar2.png', name: 'Besshagar 2', price: '60$' },
                { image: 'besshagar3.png', name: 'Besshagar 3', price: '60$' },
                { image: 'besshagar4.png', name: 'Besshagar 4', price: '70$' }
            ]
        },
        women: {
            sholpy: [
                { image: 'sholpy1.jpg', name: 'Sholpy 1', price: '120$' },
                { image: 'sholpy2.png', name: 'Sholpy 2', price: '180$' },
                { image: 'sholpy3.png', name: 'Sholpy 3', price: '150$' },
                { image: 'sholpy4.png', name: 'Sholpy 4', price: '200$' }
            ],
            zhuzik: [
                { image: 'zhuzik1.png', name: 'Zhuzik 1', price: '85$' },
                { image: 'zhuzik2.png', name: 'Zhuzik 2', price: '100$' },
                { image: 'zhuzik3.png', name: 'Zhuzik 3', price: '95$' },
                { image: 'zhuzik4.png', name: 'Zhuzik 4', price: '110$' }
            ],
            saukele: [
                { image: 'sәukele1.png', name: 'Sәukele 1', price: '60$' },
                { image: 'sәukele2.png', name: 'Sәukele 2', price: '70$' },
                { image: 'sәukele3.png', name: 'Sәukele 3', price: '75$' },
                { image: 'sәukele4.png', name: 'Sәukele 4', price: '80$' }
            ]
        },
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
    // Применяем фильтр цены после загрузки товаров
    filterProductsByPrice(priceRange.value);
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

// Функция для фильтрации товаров по цене
function filterProductsByPrice(maxPrice) {
    const productsContainer = document.getElementById('products');
    const productItems = productsContainer.querySelectorAll('.product-item');

    productItems.forEach(item => {
        const productPriceElement = item.querySelector('.product-info p');
        const productPrice = parseFloat(productPriceElement.textContent.replace('$', ''));

        if (productPrice <= maxPrice) {
            item.style.display = 'inline-block'; // Показываем товар
        } else {
            item.style.display = 'none'; // Скрываем товар
        }
    });
}

let lastScrollPosition = 0;

// Получаем элементы для фильтра цены
const priceRange = document.getElementById('priceRange');
const maxPriceValue = document.getElementById('maxPriceValue');
const filterSidebar = document.getElementById('filterSidebar');

// Устанавливаем начальное значение фильтра
maxPriceValue.textContent = `$${priceRange.value}`;

// Обработчик изменения ползунка цены
priceRange.addEventListener('input', () => {
    const maxPrice = priceRange.value;
    maxPriceValue.textContent = `$${maxPrice}`;
    filterProductsByPrice(maxPrice); // Вызываем функцию фильтрации
});

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

    // Показываем/скрываем боковую панель при прокрутке
    if (window.pageYOffset > 100) {
        filterSidebar.classList.add('show');
    }
});