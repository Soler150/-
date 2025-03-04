// Открытие модального окна с меню
const menuBtn = document.querySelector('.btn-menu');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

menuBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Плавная прокрутка
const links = document.querySelectorAll('nav a');
for (const link of links) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);

  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
  });
}

// Анимация кнопок при наведении
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
  });

  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
  });
});

const cart = [];
const cartItems = document.getElementById('cart-items');
const totalPriceEl = document.getElementById('total-price');
let totalPrice = 0;

// Функция для обновления корзины
function updateCart() {
  cartItems.innerHTML = '';
  totalPrice = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price} рублей`;
    
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Удалить';
    removeBtn.addEventListener('click', () => removeFromCart(index));

    li.appendChild(removeBtn);
    cartItems.appendChild(li);
    totalPrice += item.price;
  });

  totalPriceEl.textContent = totalPrice;
}

// Добавление продукта в корзину
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-name');
    const productPrice = parseFloat(button.getAttribute('data-price'));

    cart.push({ name: productName, price: productPrice });
    updateCart();
  });
});

// Удаление продукта из корзины
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Оформление заказа
document.getElementById('checkout').addEventListener('click', () => {
  if (cart.length > 0) {
    alert(`Ваш заказ на сумму ${totalPrice} рублей оформлен!`);
    cart.length = 0;
    updateCart();
  } else {
    alert('Корзина пуста!');
  }
});


const cart = [];
const cartItems = document.getElementById('cart-items');
const totalPriceEl = document.getElementById('total-price');
const cartBtn = document.getElementById('cart-btn');
const cartCount = document.getElementById('cart-count');
let totalPrice = 0;

// Открытие/закрытие корзины
cartBtn.addEventListener('click', () => {
  const cartSection = document.getElementById('cart');
  if (cartSection.style.display === 'none') {
    cartSection.style.display = 'block';
  } else {
    cartSection.style.display = 'none';
  }
});

// Функция для обновления корзины
function updateCart() {
  cartItems.innerHTML = '';
  totalPrice = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price} рублей`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Удалить';
    removeBtn.addEventListener('click', () => removeFromCart(index));

    li.appendChild(removeBtn);
    cartItems.appendChild(li);
    totalPrice += item.price;
  });

  totalPriceEl.textContent = totalPrice;
  cartCount.textContent = cart.length; // Обновление счетчика корзины
}

// Добавление продукта в корзину
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-name');
    const productPrice = parseFloat(button.getAttribute('data-price'));

    cart.push({ name: productName, price: productPrice });
    updateCart();
  });
});

// Удаление продукта из корзины
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Оформление заказа
document.getElementById('checkout').addEventListener('click', () => {
  if (cart.length > 0) {
    alert(`Ваш заказ на сумму ${totalPrice} рублей оформлен!`);
    cart.length = 0;
    updateCart();
  } else {
    alert('Корзина пуста!');
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            alert(`Вы выбрали: ${item.querySelector('h3').textContent}`);
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    };

    document.getElementById('next').addEventListener('click', nextSlide);
    document.getElementById('prev').addEventListener('click', prevSlide);

    // Автоматическая смена слайдов каждые 5 секунд
    setInterval(nextSlide, 5000);
});


// Модальные окна
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');

// Кнопки
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const closeLogin = document.querySelector('.close-login');
const closeRegister = document.querySelector('.close-register');

// Открытие модальных окон
loginBtn.addEventListener('click', () => loginModal.style.display = 'block');
registerBtn.addEventListener('click', () => registerModal.style.display = 'block');

// Закрытие модальных окон
closeLogin.addEventListener('click', () => loginModal.style.display = 'none');
closeRegister.addEventListener('click', () => registerModal.style.display = 'none');

// Закрытие при клике вне окна
window.addEventListener('click', (event) => {
  if (event.target === loginModal) loginModal.style.display = 'none';
  if (event.target === registerModal) registerModal.style.display = 'none';
});

// Регистрация пользователей
const users = [];

document.getElementById('register-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  const userExists = users.some(user => user.email === email);

  if (userExists) {
    alert('Пользователь с таким email уже зарегистрирован.');
  } else {
    users.push({ email, password });
    alert('Регистрация успешна!');
    registerModal.style.display = 'none';
  }
});

// Авторизация пользователей
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    alert('Вход успешен!');
    loginModal.style.display = 'none';
    // Допустим, можем показать имя пользователя
    loginBtn.textContent = `Вы вошли как ${email}`;
  } else {
    alert('Неправильный email или пароль.');
  }
});

// Регистрация пользователей
document.getElementById('register-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  fetch('auth.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      action: 'register',
      email: email,
      password: password
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === 'success') {
      alert('Регистрация успешна!');
      registerModal.style.display = 'none';
    } else {
      alert(data.message);
    }
  });
});

// Авторизация пользователей
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  fetch('auth.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      action: 'login',
      email: email,
      password: password
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === 'success') {
      alert('Вход успешен!');
      loginModal.style.display = 'none';
      loginBtn.textContent = `Вы вошли как ${email}`;
    } else {
      alert(data.message);
    }
  });
});
