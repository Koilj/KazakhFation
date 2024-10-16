function showProducts(category, subcategory) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; // Очищаем предыдущие товары

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

        const cartIcon = document.createElement('div');
        cartIcon.classList.add('cart-icon');

        const cartImg = document.createElement('img');
        cartImg.src = 'carticon.png'; // Замените на правильный путь
        cartImg.alt = 'Add to cart';
        cartIcon.appendChild(cartImg);

        const cartCount = document.createElement('div');
        cartCount.classList.add('cart-count');
        cartCount.textContent = '0'; // Начальное значение

        productItem.appendChild(cartIcon);
        productItem.appendChild(cartCount);
        productsContainer.appendChild(productItem);

        cartIcon.addEventListener('click', () => {
            let count = parseInt(cartCount.textContent);
            count++;
            cartCount.textContent = count;
        });
    });

    const productItems = productsContainer.querySelectorAll('.product-item');
    productItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, index * 150);
    });

    const productDisplay = document.getElementById('product-display');
    setTimeout(() => {
        productDisplay.scrollIntoView({ behavior: 'smooth' });
    }, 300);

    enableScrollAnimation();
    filterProductsByPrice(priceRange.value);
}

function toggleCategoryAnimation(isScrollingDown) {
    const cards = document.querySelectorAll('.category-card');
    const categoryGrid = document.querySelector('.category-grid');

    if (isScrollingDown) {
        cards.forEach(card => {
            card.classList.add('category-up');
            card.classList.remove('category-down');
        });
        categoryGrid.classList.add('categories-up');
    } else {
        cards.forEach(card => {
            card.classList.remove('category-up');
            card.classList.add('category-down');
        });
        categoryGrid.classList.remove('categories-up');
    }
}

let scrollAnimationEnabled = false;

function enableScrollAnimation() {
    scrollAnimationEnabled = true;
}

function disableScrollAnimation() {
    scrollAnimationEnabled = false;
}

function filterProductsByPrice(maxPrice) {
    const productsContainer = document.getElementById('products');
    const productItems = productsContainer.querySelectorAll('.product-item');

    productItems.forEach(item => {
        const productPriceElement = item.querySelector('.product-info p');
        const productPrice = parseFloat(productPriceElement.textContent.replace('$', ''));

        if (productPrice <= maxPrice) {
            item.style.display = 'inline-block';
        } else {
            item.style.display = 'none';
        }
    });
}

let lastScrollPosition = 0;

const priceRange = document.getElementById('priceRange');
const maxPriceValue = document.getElementById('maxPriceValue');
const filterSidebar = document.getElementById('filterSidebar');

maxPriceValue.textContent = `$${priceRange.value}`;

priceRange.addEventListener('input', () => {
    const maxPrice = priceRange.value;
    maxPriceValue.textContent = `$${maxPrice}`;
    filterProductsByPrice(maxPrice);
});

window.addEventListener('scroll', () => {
    if (scrollAnimationEnabled) {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollPosition > lastScrollPosition) {
            toggleCategoryAnimation(true);
        } else {
            toggleCategoryAnimation(false);
        }

        lastScrollPosition = currentScrollPosition;
    }

    if (window.pageYOffset > 100) {
        filterSidebar.classList.add('show');
    }
});


