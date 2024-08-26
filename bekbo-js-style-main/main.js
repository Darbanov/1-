document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.querySelector('.close');
    const totalPriceElem = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');

    let cart = [];

    document.querySelectorAll('.product-item button').forEach(button => {
        button.addEventListener('click', function() {
            const productItem = button.parentElement;
            const productName = productItem.querySelector('p').innerText;
            const productPrice = parseInt(productItem.querySelector('.price').dataset.price);

            const cartItem = document.createElement('li');
            cartItem.innerHTML = `<span>${productName}</span><span>${productPrice}</span>`;
            
            cartItems.appendChild(cartItem);
            cart.push({name: productName, price: productPrice});
            cartCount.innerText = cart.length;

            updateTotalPrice();
        });
    });

    document.querySelectorAll('.product-item .size').forEach(select => {
        select.addEventListener('change', function() {
            const productItem = select.parentElement;
            const priceElem = productItem.querySelector('.price');
            const newPrice = parseInt(select.value);
            priceElem.innerText = `${newPrice} сом`;
            priceElem.dataset.price = newPrice;
        });
    });

    document.getElementById('cart-svg').addEventListener('click', function() {
        cartModal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == cartModal) {
            cartModal.style.display = 'none';
        }
    });

    function updateTotalPrice() {
        let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
        totalPriceElem.innerText = totalPrice;
    }

    checkoutButton.addEventListener('click', function() {
        window.location.href = 'payment.html'; // Перенаправление на страницу ввода данных карты
    });

    document.querySelector('.category-nav button:nth-child(1)').addEventListener('click', function() {
        window.location.href = 'notebooks.html';
    });

    document.querySelector('.category-nav button:nth-child(2)').addEventListener('click', function() {
        window.location.href = 'phones.html';
    });

    document.querySelector('.category-nav button:nth-child(3)').addEventListener('click', function() {
        window.location.href = 'sisors.html';
    });

    document.querySelector('.category-nav button:nth-child(4)').addEventListener('click', function() {
        window.location.href = 'tablets.html';
    });

    document.querySelector('.category-nav button:nth-child(5)').addEventListener('click', function() {
        window.location.href = 'carob.html';
    });

    document.querySelector('.category-nav button:nth-child(6)').addEventListener('click', function() {
        window.location.href = 'fartuk.html';
    });

    document.querySelector('.category-nav button:nth-child(7)').addEventListener('click', function() {
        window.location.href = 'naper.html';
    });

    document.querySelector('.category-nav button:nth-child(8)').addEventListener('click', function() {
        window.location.href = 'bak.html';
    });

    document.querySelector('.category-nav button:nth-child(9)').addEventListener('click', function() {
        window.location.href = 'micro.html';
    });

    document.querySelector('.category-nav button:nth-child(10)').addEventListener('click', function() {
        window.location.href = 'all.html';
    });

    document.querySelector('.search-bar input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            let query = event.target.value.toLowerCase();
            if (query.includes('ноутбуки')) {
                window.location.href = 'notebooks.html';
            } else if (query.includes('планшеты')) {
                window.location.href = 'tablets.html';
            } else if (query.includes('телефон')) {
                window.location.href = 'phones.html';
            } else if (query.includes('наушники')) {
                window.location.href = 'sisors.html';
            } else if (query.includes('каробка для палатенц')) {
                window.location.href = 'carob.html';
            } else if (query.includes('фартук')) {
                window.location.href = 'fartuk.html';
            } else if (query.includes('напер')) {
                window.location.href = 'naper.html';
            } else if (query.includes('Полотенца вафельное')) {
                window.location.href = 'bak.html';
            } else if (query.includes('Полотенца микрофибра')) {
                window.location.href = 'micro.html';
            } else {
                alert('Каталог не найден');
            }
        }
    });

    document.querySelector('nav ul li:nth-child(2) a').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'returns.html';
    });

    document.querySelector('nav ul li:nth-child(3) a').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'wholesale.html';
    });

    document.querySelector('nav ul li:nth-child(4) a').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'blog.html';
    });

    document.querySelector('nav ul li:nth-child(5) a').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'contacts.html';
    });



    // Удалён код регистрации
});

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 50);
});

document.addEventListener('DOMContentLoaded', () => {
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach((item, index) => {
        if (index % 2 === 0) {
            item.classList.add('slide-in-left');
            item.style.animation = 'slideInLeft 0.5s forwards';
        } else {
            item.classList.add('slide-in-right');
            item.style.animation = 'slideInRight 0.5s forwards';
        }
        item.style.opacity = '1';
    });
});

const sizeButtons = document.querySelectorAll('.size-button');
const priceDisplay = document.getElementById('price-display');

sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'selected' class from all buttons
        sizeButtons.forEach(btn => btn.classList.remove('selected'));
        // Add 'selected' class to the clicked button
        button.classList.add('selected');
        // Update the price display
        const price = button.getAttribute('data-price');
        priceDisplay.textContent = `${price} сом`;
    });
});
