
const products = [
    { id: 1, title: 'Смартфон Samsung Galaxy S23 Ultra', price: 1299.99, image: 'https://picsum.photos/300/200?random=2', description: 'Флагманський смартфон з потужним процесором, неймовірною камерою та великим дисплеєм.', category: 'Електроніка' },
    { id: 2, title: 'Навушники бездротові Sony WH-1000XM5', price: 499.99, image: 'https://picsum.photos/300/200?random=3', description: 'Найкращі в своєму класі навушники з шумозаглушенням та чудовим звуком.', category: 'Електроніка' },
    { id: 3, title: 'Ноутбук Apple MacBook Air M2', price: 999.99, image: 'https://picsum.photos/300/200?random=4', description: 'Легкий та потужний ноутбук з процесором Apple M2 для ефективної роботи.', category: 'Електроніка' },
    { id: 4, title: 'Дитячий конструктор LEGO Technic Bugatti Chiron', price: 349.99, image: 'https://picsum.photos/300/200?random=5', description: 'Складна та захоплююча модель легендарного автомобіля Bugatti Chiron.', category: 'Іграшки' },
    { id: 5, title: 'Футболка чоловіча бавовняна однотонна', price: 149.99, image: 'https://picsum.photos/300/200?random=6', description: 'Зручна та стильна футболка з натуральної бавовни для повсякденного носіння.', category: 'Одяг' },
    { id: 6, title: 'Лялька Barbie Dreamhouse', price: 279.99, image: 'https://picsum.photos/300/200?random=7', description: 'Великий та яскравий будиночок для ляльок Barbie з безліччю аксесуарів.', category: 'Іграшки' },
    { id: 7, title: 'Кросівки жіночі Nike Air Max 90', price: 399.50, image: 'https://picsum.photos/300/200?random=8', description: 'Культові кросівки Nike з амортизацією Air Max для комфорту протягом усього дня.', category: 'Одяг' },
    { id: 8, title: 'Планшет Samsung Galaxy Tab S8 Ultra', price: 1199.00, image: 'https://picsum.photos/300/200?random=9', description: 'Преміальний планшет з великим екраном, стилусом S Pen та високою продуктивністю.', category: 'Електроніка' },
    { id: 9, title: 'Джинси чоловічі класичні прямого крою', price: 299.75, image: 'https://picsum.photos/300/200?random=10', description: 'Універсальні джинси класичного крою, які підійдуть до будь-якого стилю.', category: 'Одяг' },
    { id: 10, title: 'Смарт-годинник Apple Watch Series 8', price: 549.00, image: 'https://picsum.photos/300/200?random=11', description: 'Сучасний смарт-годинник з безліччю функцій для фітнесу та повсякденного використання.', category: 'Електроніка' },
    { id: 11, title: 'Світшот жіночий теплий з капюшоном', price: 219.99, image: 'https://picsum.photos/300/200?random=12', description: 'Затишний та стильний світшот для прохолодної погоди.', category: 'Одяг' },
    { id: 12, title: 'Телевізор Samsung Smart TV 55" 4K UHD', price: 799.20, image: 'https://picsum.photos/300/200?random=13', description: 'Насолоджуйтесь переглядом улюблених фільмів та серіалів у високій якості 4K.', category: 'Електроніка' },
    { id: 13, title: 'Настільна гра "Монополія"', price: 349.50, image: 'https://picsum.photos/300/200?random=14', description: 'Класична економічна гра для веселої компанії.', category: 'Іграшки' },
    { id: 14, title: 'Пилосос робот Xiaomi Robot Vacuum Mop 2 Pro', price: 449.00, image: 'https://picsum.photos/300/200?random=15', description: 'Автоматичний пилосос для сухого та вологого прибирання вашого дому.', category: 'Електроніка' },
    { id: 15, title: 'Пальто жіноче зимове з капюшоном', price: 659.99, image: 'https://picsum.photos/300/200?random=16', description: 'Тепле та елегантне пальто для зимових холодів.', category: 'Одяг' },
    { id: 16, title: 'Мяка іграшка Ведмедик Тедді', price: 179.50, image: 'https://picsum.photos/300/200?random=17', description: 'Класична м\'яка іграшка, яка стане чудовим подарунком для дитини.', category: 'Іграшки' },
    { id: 17, title: 'Електронна книга Amazon Kindle Paperwhite (11th generation)', price: 269.80, image: 'https://picsum.photos/300/200?random=18', description: 'Компактна електронна книга з підсвічуванням екрана для комфортного читання.', category: 'Електроніка' },
    { id: 18, title: 'Блендер стаціонарний Philips HR2102/00', price: 199.30, image: 'https://picsum.photos/300/200?random=19', description: 'Простий та надійний блендер для приготування смузі та коктейлів.', category: 'Електроніка' },
    { id: 19, title: 'Ігровий набір "Залізниця"', price: 499.00, image: 'https://picsum.photos/300/200?random=20', description: 'Захоплюючий ігровий набір із рейками, потягом та станціями.', category: 'Іграшки' },
    { id: 20, title: 'Пральна машина автоматична LG F2J3WN3W', price: 679.75, image: 'https://picsum.photos/300/200?random=21', description: 'Функціональна пральна машина з різними режимами прання.', category: 'Електроніка' },
    { id: 21, title: 'Іграшка-трансформер Optimus Prime', price: 299.00, image: 'https://picsum.photos/300/200?random=22', description: 'Культовий трансформер Optimus Prime з фільму "Трансформери".', category: 'Іграшки' },
    { id: 22, title: 'Штани спортивні чоловічі', price: 189.99, image: 'https://picsum.photos/300/200?random=23', description: 'Зручні спортивні штани для занять спортом та відпочинку.', category: 'Одяг' },
    { id: 23, title: 'Набір для творчості "Малювання по номерах"', price: 149.50, image: 'https://picsum.photos/300/200?random=24', description: 'Набір для створення власної картини за допомогою нумерованих контурів.', category: 'Іграшки' },
    { id: 24, title: 'Кеди жіночі Converse Chuck Taylor All Star', price: 329.25, image: 'https://picsum.photos/300/200?random=25', description: 'Класичні кеди Converse, які ніколи не виходять з моди.', category: 'Одяг' },
    { id: 25, title: 'Мультиварка Redmond RMC-M90', price: 379.00, image: 'https://picsum.photos/300/200?random=26', description: 'Багатофункціональна мультиварка з різними програмами приготування.', category: 'Електроніка' },
    { id: 26, title: 'Рюкзак міський універсальний', price: 249.99, image: 'https://picsum.photos/300/200?random=27', description: 'Практичний та стильний рюкзак для міста та подорожей.', category: 'Одяг' }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const renderProducts = (filteredProducts = products) => {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <div class="quantity-container">
                <label for="quantity-${product.id}">Кількість :</label>
                <input type="number" id="quantity-${product.id}" min="1" value="1">
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        container.appendChild(card);
    });
};

const showToast = (message) => {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
};

const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const quantity = parseInt(quantityInput.value);

    if (quantity < 1) {
        showToast('Будь ласка, оберіть правильну кількість.');
        return;
    }

    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    showToast(`${quantity} x ${product.title} було додано до вашого кошика!`);
};

const updateTotalPrice = (total) => {
    const totalElement = document.getElementById('totalPrice');
    totalElement.innerHTML = `<h3>Всього: $${total.toFixed(2)}</h3>`;
};

const renderCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartContainer');
    cartContainer.innerHTML = '';

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Ваш кошик порожній.</p>';
        updateTotalPrice(0); 
        return;
    }

    let total = 0;
    cartItems.forEach(item => {
        const itemTotal = Number((item.price * item.quantity).toFixed(2));
        total += itemTotal;
        cartContainer.innerHTML += `
            <div class="cart-item">
                <h3>${item.title}</h3>
                <p>Ціна: ${item.price} $</p>
                <p>Кількість: <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)"></p>
                <p>Сума: ${itemTotal} $</p>
                <button onclick="removeFromCart(${item.id})">Видалити</button>
            </div>
        `;
    });

    updateTotalPrice(total); 
};

const updateQuantity = (id, quantity) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cartItems.find(item => item.id === id);
    if (item) {
        item.quantity = parseInt(quantity);
        localStorage.setItem('cart', JSON.stringify(cartItems)); 
        renderCart(); 
        updateCharts(); 
    }
};

const removeFromCart = (productId) => {
    cart = cart.filter(item => item.id !== productId);

    const product = products.find(p => p.id === productId);
    if (product) {
        product.quantity = 1; 
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    renderCart();
    updateCharts(); 
};

const getCartDataForChart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    return cartItems.map(item => ({
        title: item.title,
        quantity: item.quantity
    }));
};

const renderPieChart = () => {
    const cartData = getCartDataForChart();
    const titles = cartData.map(item => item.title);
    const quantities = cartData.map(item => item.quantity);

    // Очистити попередній графік, якщо він існує
    if (window.pieChart) {
        window.pieChart.destroy();
    }

    const ctx = document.getElementById('popularityPieChart').getContext('2d');
    window.pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: titles,
            datasets: [{
                data: quantities,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(199, 89, 111, 0.6)',
                    'rgba(83, 144, 217, 0.6)',
                    'rgba(230, 126, 34, 0.6)',
                    'rgba(46, 204, 113, 0.6)',
                    'rgba(52, 73, 94, 0.6)',
                    'rgba(142, 68, 173, 0.6)',
                    'rgba(241, 196, 15, 0.6)',
                    'rgba(26, 188, 156, 0.6)',
                    'rgba(231, 76, 60, 0.6)',
                    'rgba(155, 89, 182, 0.6)',
                    'rgba(41, 128, 185, 0.6)',
                    'rgba(243, 156, 18, 0.6)',
                    'rgba(39, 174, 96, 0.6)',
                    'rgba(189, 195, 199, 0.6)',
                    'rgba(127, 140, 141, 0.6)',
                    'rgba(236, 240, 241, 0.6)',
                    'rgba(192, 57, 43, 0.6)',
                    'rgba(39, 174, 96, 0.6)',
                    'rgba(230, 126, 34, 0.6)',
                    'rgba(155, 89, 182, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(199, 89, 111, 1)',
                    'rgba(83, 144, 217, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Популярність товарів у кошику (кількість)'
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
};

const renderBarChart = () => {
    const cartData = getCartDataForChart();
    const titles = cartData.map(item => item.title);
    const quantities = cartData.map(item => item.quantity);

    if (window.barChart) {
        window.barChart.destroy();
    }

    const ctx = document.getElementById('popularityBarChart').getContext('2d');
    window.barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: titles,
            datasets: [{
                label: 'Кількість',
                data: quantities,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Порівняння кількості товарів у кошику'
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Кількість'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Найменування товару'
                    }
                }
            }
        }
    });
};

const renderLineChart = () => {
    const cartData = getCartDataForChart();
    const titles = cartData.map(item => item.title);
    const quantities = cartData.map(item => item.quantity);

    if (window.lineChart) {
        window.lineChart.destroy();
    }

    const ctx = document.getElementById('popularityLineChart').getContext('2d');
    window.lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: titles,
            datasets: [{
                label: 'Кількість',
                data: quantities,
                backgroundColor: 'rgba(153, 102, 255, 0.3)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Тренд популярності товарів'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Кількість'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Найменування товару'
                    }
                }
            }
        }
    });
};

const updateCharts = () => {
    renderPieChart();
    renderBarChart();
    renderLineChart();
};

const initChartButtons = () => {
    if (!document.getElementById('pieChartBtn')) return; 
    
    // Кнопки перемикання графіків
    document.getElementById('pieChartBtn').addEventListener('click', () => {
        switchChartView('pieChartContainer');
    });
    
    document.getElementById('barChartBtn').addEventListener('click', () => {
        switchChartView('barChartContainer');
    });
    
    document.getElementById('lineChartBtn').addEventListener('click', () => {
        switchChartView('lineChartContainer');
    });
    
    updateCharts();
};

const switchChartView = (activeContainerId) => {
    document.querySelectorAll('.chart-container').forEach(container => {
        container.classList.remove('active');
    });
    
    document.querySelectorAll('.chart-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(activeContainerId).classList.add('active');
    
    // Активуємо відповідну кнопку
    let btnId;
    if (activeContainerId === 'pieChartContainer') {
        btnId = 'pieChartBtn';
    } else if (activeContainerId === 'barChartContainer') {
        btnId = 'barChartBtn';
    } else if (activeContainerId === 'lineChartContainer') {
        btnId = 'lineChartBtn';
    }
    
    document.getElementById(btnId).classList.add('active');
};

window.addEventListener('load', () => {
    if (document.getElementById('productsContainer')) {
        renderProducts();
    }
    if (document.getElementById('cartContainer')) {
        renderCart();
        initChartButtons();
    }
});

window.onload = () => {
    renderCart(); 
    renderCharts(); 
};

document.getElementById('toggleFilterBtn').addEventListener('click', () => {
    document.getElementById('filterContainer').classList.add('open');
});

document.getElementById('closeFilterBtn').addEventListener('click', () => {
    document.getElementById('filterContainer').classList.remove('open');
});

document.getElementById('resetFiltersBtn').addEventListener('click', () => {
    document.getElementById('sortByName').value = '';
    document.getElementById('sortByPrice').value = '';
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    document.getElementById('keywordSearch').value = '';
    document.querySelectorAll('.categoryFilter').forEach(cb => cb.checked = false);
    renderProducts(); 
});

const applyFilters = () => {
    let filteredProducts = [...products];

    // Сортування
    const sortByName = document.getElementById('sortByName').value;
    if (sortByName) {
        filteredProducts.sort((a, b) => sortByName === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));
    }

    const sortByPrice = document.getElementById('sortByPrice').value;
    if (sortByPrice) {
        filteredProducts.sort((a, b) => sortByPrice === 'lowToHigh' ? a.price - b.price : b.price - a.price);
    }

    const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;
    filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);

    const keyword = document.getElementById('keywordSearch').value.toLowerCase();
    if (keyword) {
        filteredProducts = filteredProducts.filter(product => product.title.toLowerCase().includes(keyword) || product.description.toLowerCase().includes(keyword));
    }

    // Фільтр за категоріями
    const selectedCategories = Array.from(document.querySelectorAll('.categoryFilter:checked')).map(cb => cb.value);
    if (selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter(product => selectedCategories.includes(product.category));
    }

    renderProducts(filteredProducts);
};

document.querySelectorAll('#sortByName, #sortByPrice, #minPrice, #maxPrice, #keywordSearch, .categoryFilter').forEach(el => {
    el.addEventListener('change', applyFilters);
});

document.addEventListener("DOMContentLoaded", () => {
    const newsList = document.getElementById("newsList");
    const newsDetails = document.getElementById("newsDetails");

    // Приклад новин
    const news = [
        { id: 1, title: "Новина 1", content: "Деталі важливої новини 1", date: "2025-04-07 10:00", important: true },
        { id: 2, title: "Новина 2", content: "Деталі звичайної новини 2", date: "2025-04-07 09:30", important: false },
        { id: 3, title: "Новина 3", content: "Деталі важливої новини 3", date: "2025-04-07 08:45", important: true },
    ];

    function renderNewsList() {
        newsList.innerHTML = "";
        news.sort((a, b) => new Date(b.date) - new Date(a.date)); 
        news.forEach(item => {
            const newsItem = document.createElement("div");
            newsItem.className = `news-item ${item.important ? "important" : ""}`;
            newsItem.textContent = `${item.date} - ${item.title}`;
            newsItem.addEventListener("click", () => showNewsDetails(item));
            newsList.appendChild(newsItem);
        });
    }

    function showNewsDetails(item) {
        newsDetails.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
        newsDetails.style.display = "block";

        if (window.innerWidth <= 768) {
            newsList.style.display = "none";
        }
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            newsList.style.display = "block";
            newsDetails.style.display = "none";
        }
    });

    renderNewsList();
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;

        if (scrollPosition > viewportHeight * 2 / 3) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

