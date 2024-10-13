// Функция для показа категории продуктов и новинок
function showProducts(category) {
    // Скрыть все категории продуктов
    const categories = document.querySelectorAll('.product-category');
    categories.forEach(cat => {
        cat.style.display = 'none';
    });

    // Скрыть все новинки
    const newItems = document.querySelectorAll('.carousel-item');
    newItems.forEach(item => {
        item.style.display = 'none';
    });

    // Показать выбранную категорию продуктов
    const selectedCategory = document.getElementById(category);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }

    // Показать новинки для выбранной категории
    filterNewArrivals(category);

    // Показать заголовок "New Arrivals"
    const newArrivalsTitle = document.querySelector('.new-arrivals-title');
    if (newArrivalsTitle) {
        newArrivalsTitle.style.display = 'block'; // Показать заголовок
    }

    // Показать заголовок "Products"
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.classList.remove('hidden'); // Убираем класс hidden
    }
}

// Обработчик листания карусели
const carousel = document.querySelector('.carousel');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let currentIndex = 0;
const itemWidth = 220; // ширина каждого элемента включая margin
const visibleItems = 3; // Количество видимых элементов

// Функция для обновления карусели
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Переключение вправо
rightBtn.addEventListener('click', () => {
    currentIndex += 1;
    if (currentIndex >= carousel.children.length - visibleItems + 1) {
        currentIndex = 0; // Перезапускаем карусель
    }
    updateCarousel();
});

// Переключение влево
leftBtn.addEventListener('click', () => {
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = carousel.children.length - visibleItems; // Устанавливаем на последний элемент
    }
    updateCarousel();
});

// Фильтрация новинок по категории
const categories = document.querySelectorAll('.category-card');
const carouselItems = document.querySelectorAll('.carousel-item');

// Функция для фильтрации новинок по выбранной категории
function filterNewArrivals(category) {
    carouselItems.forEach(item => {
        if (item.getAttribute('data-category') === category) {
            item.style.display = 'block'; // Показать товар
        } else {
            item.style.display = 'none';  // Скрыть товар
        }
    });
}

// Привязка функции фильтрации к клику по категории
categories.forEach(categoryCard => {
    categoryCard.addEventListener('click', () => {
        const selectedCategory = categoryCard.innerText.toLowerCase();
        filterNewArrivals(selectedCategory);
        showProducts(selectedCategory);
    });
});

// Скрыть все новинки изначально
filterNewArrivals('');

// Скрыть заголовок "New Arrivals" изначально
const newArrivalsTitle = document.querySelector('.new-arrivals-title');
if (newArrivalsTitle) {
    newArrivalsTitle.style.display = 'none'; // Скрыть заголовок изначально
}

// Функция для фильтрации продуктов
function filterProducts(category) {
    const categorySelect = document.getElementById(category + '-types');
    const selectedType = categorySelect.value;
    const products = document.getElementById(category).querySelectorAll('.product');

    // Фильтруем продукты
    products.forEach(product => {
        if (selectedType === 'all' || product.getAttribute('data-type') === selectedType) {
            product.style.display = 'block'; // Показываем продукт
        } else {
            product.style.display = 'none'; // Скрываем продукт
        }
    });
}