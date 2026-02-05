// ==================== DATA ====================
const menuItems = [
    {
        id: '1',
        name: 'Broasted Chicken',
        nameAr: 'دجاج بروستد',
        description: 'Golden crispy broasted chicken served with garlic sauce',
        descriptionAr: 'دجاج بروستد ذهبي مقرمش يقدم مع صلصة الثوم',
        price: 25.00,
        category: 'broasted',
        image: 'https://images.pexels.com/photos/1600714/pexels-photo-1600714.jpeg',
        popular: true
    },
    {
        id: '2',
        name: 'Family Broasted Meal',
        nameAr: 'وجبة بروستد عائلية',
        description: 'Full chicken with fries, coleslaw and drinks',
        descriptionAr: 'دجاجة كاملة مع بطاطس، كول سلو ومشروبات',
        price: 45.00,
        category: 'broasted',
        image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg',
        popular: true
    },
    {
        id: '3',
        name: 'Roasted Chicken',
        nameAr: 'دجاج مشوي',
        description: 'Tender roasted chicken with herbs and spices',
        descriptionAr: 'دجاج مشوي طري بالأعشاب والتوابل',
        price: 30.00,
        category: 'roasted',
        image: 'https://images.pexels.com/photos/2232433/pexels-photo-2232433.jpeg',
        popular: false
    },
    {
        id: '4',
        name: 'Hummus with Yogurt',
        nameAr: 'حمص باللبن',
        description: 'Creamy hummus topped with yogurt',
        descriptionAr: 'حمص كريمي مغطى باللبن',
        price: 8.00,
        category: 'appetizers',
        image: 'https://images.pexels.com/photos/29935507/pexels-photo-29935507.jpeg',
        popular: true
    },
    {
        id: '5',
        name: 'Sausages',
        nameAr: 'نقانق',
        description: 'Grilled sausages with spices',
        descriptionAr: 'نقانق مشوية بالتوابل',
        price: 12.00,
        category: 'appetizers',
        image: 'https://images.pexels.com/photos/4181567/pexels-photo-4181567.jpeg',
        popular: false
    },
    {
        id: '6',
        name: 'Falafel',
        nameAr: 'فلافل',
        description: 'Crispy falafel served with tahini sauce',
        descriptionAr: 'فلافل مقرمشة تقدم مع صلصة الطحينة',
        price: 10.00,
        category: 'appetizers',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
        popular: true
    },
    {
        id: '7',
        name: 'Broasted Wings',
        nameAr: 'أجنحة بروستد',
        description: 'Spicy broasted chicken wings',
        descriptionAr: 'أجنحة دجاج بروستد حارة',
        price: 18.00,
        category: 'broasted',
        image: 'https://images.pexels.com/photos/32177596/pexels-photo-32177596.jpeg',
        popular: false
    },
    {
        id: '8',
        name: 'Grilled Chicken Platter',
        nameAr: 'صحن دجاج مشوي',
        description: 'Grilled chicken with rice and salad',
        descriptionAr: 'دجاج مشوي مع أرز وسلطة',
        price: 28.00,
        category: 'roasted',
        image: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg',
        popular: true
    }
];

const reviews = [
    {
        id: '1',
        name: 'أحمد محمد',
        rating: 5,
        comment: 'الطعم ممتاز والنظافة عالية، أسعار مناسبة جداً',
        commentEn: 'Excellent taste and high cleanliness, very reasonable prices',
        date: '2 weeks ago'
    },
    {
        id: '2',
        name: 'فاطمة علي',
        rating: 4,
        comment: 'دجاج بروستد لذيذ وخدمة سريعة',
        commentEn: 'Delicious broasted chicken and fast service',
        date: '1 month ago'
    },
    {
        id: '3',
        name: 'خالد سعيد',
        rating: 5,
        comment: 'أفضل بروستد في المنطقة بدون منافس',
        commentEn: 'Best broasted in the area without competition',
        date: '3 weeks ago'
    },
    {
        id: '4',
        name: 'سارة حسن',
        rating: 4,
        comment: 'مطعم نظيف وطعام طازج، ننصح به',
        commentEn: 'Clean restaurant and fresh food, highly recommended',
        date: '1 week ago'
    }
];

const galleryImages = [
    'https://images.pexels.com/photos/262945/pexels-photo-262945.jpeg',
    'https://images.unsplash.com/photo-1550367363-ea12860cc124',
    'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
    'https://images.unsplash.com/photo-1502998070258-dc1338445ac2',
    'https://images.pexels.com/photos/3023479/pexels-photo-3023479.jpeg'
];

const popularTimes = [
    { hour: '9 AM', busy: 20 },
    { hour: '12 PM', busy: 60 },
    { hour: '3 PM', busy: 40 },
    { hour: '6 PM', busy: 85 },
    { hour: '9 PM', busy: 95 },
    { hour: '12 AM', busy: 30 }
];

// ==================== STATE ====================
let currentLanguage = 'en';
let cart = [];
let currentCategory = 'all';

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Set current year
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }

    // Initialize menu
    renderMenu();

    // Initialize reviews
    renderReviews();

    // Initialize gallery
    renderGallery();

    // Initialize popular times
    renderPopularTimes();

    // Event Listeners
    setupEventListeners();
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Language toggle
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);

    // Mobile menu
    document.getElementById('mobileMenuToggle').addEventListener('click', toggleMobileMenu);

    // Cart
    document.getElementById('cartToggle').addEventListener('click', openCart);
    document.getElementById('cartClose').addEventListener('click', closeCart);
    document.getElementById('cartOverlay').addEventListener('click', closeCart);
    document.getElementById('checkoutBtn').addEventListener('click', handleCheckout);

    // Category filter
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentCategory = e.target.dataset.category;
            updateCategoryFilter();
            renderMenu();
        });
    });

    // Contact form
    document.getElementById('contactForm').addEventListener('submit', handleContactSubmit);

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                closeMobileMenu();
            }
        });
    });
}

// ==================== LANGUAGE ====================
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    updateLanguage();
}

function updateLanguage() {
    const html = document.documentElement;
    html.setAttribute('lang', currentLanguage);
    html.setAttribute('dir', currentLanguage === 'ar' ? 'rtl' : 'ltr');

    // Update all translatable elements
    document.querySelectorAll('[data-en]').forEach(el => {
        const text = currentLanguage === 'ar' ? el.dataset.ar : el.dataset.en;
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = text;
        } else {
            el.textContent = text;
        }
    });

    // Re-render dynamic content
    renderMenu();
    renderReviews();
}

// ==================== MOBILE MENU ====================
function toggleMobileMenu() {
    const navMobile = document.getElementById('navMobile');
    navMobile.classList.toggle('active');
}

function closeMobileMenu() {
    document.getElementById('navMobile').classList.remove('active');
}

// ==================== MENU ====================
function renderMenu() {
    const menuGrid = document.getElementById('menuGrid');
    const filteredItems = currentCategory === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === currentCategory);

    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="menu-item">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${currentLanguage === 'ar' ? item.nameAr : item.name}">
                ${item.popular ? `
                    <div class="popular-badge">
                        <i class="fas fa-star"></i>
                        ${currentLanguage === 'ar' ? 'مميز' : 'Popular'}
                    </div>
                ` : ''}
            </div>
            <div class="menu-item-content">
                <h3 class="menu-item-title">${currentLanguage === 'ar' ? item.nameAr : item.name}</h3>
                <p class="menu-item-description">${currentLanguage === 'ar' ? item.descriptionAr : item.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">${item.price.toFixed(2)} ${currentLanguage === 'ar' ? 'ر.س' : 'SAR'}</span>
                    <button class="add-to-cart-btn" onclick="addToCart('${item.id}')">
                        <i class="fas fa-shopping-cart"></i>
                        ${currentLanguage === 'ar' ? 'إضافة' : 'Add'}
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function updateCategoryFilter() {
    document.querySelectorAll('.category-btn').forEach(btn => {
        if (btn.dataset.category === currentCategory) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ==================== CART ====================
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    const existingItem = cart.find(i => i.id === itemId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showToast(currentLanguage === 'ar' ? 'تمت الإضافة إلى السلة' : 'Added to cart', 'success');
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartUI();
    showToast(currentLanguage === 'ar' ? 'تم الحذف من السلة' : 'Removed from cart', 'success');
}

function updateQuantity(itemId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(itemId);
        return;
    }

    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartUI() {
    const cartBadge = document.getElementById('cartBadge');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    const totalAmount = document.getElementById('totalAmount');

    // Update badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';

    // Update cart content
    if (cart.length === 0) {
        cartEmpty.style.display = 'flex';
        cartItems.innerHTML = '';
        cartFooter.style.display = 'none';
    } else {
        cartEmpty.style.display = 'none';
        cartFooter.style.display = 'block';
        
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${currentLanguage === 'ar' ? item.nameAr : item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${currentLanguage === 'ar' ? item.nameAr : item.name}</div>
                    <div class="cart-item-price">${item.price.toFixed(2)} ${currentLanguage === 'ar' ? 'ر.س' : 'SAR'}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');

        // Update total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalAmount.textContent = `${total.toFixed(2)} ${currentLanguage === 'ar' ? 'ر.س' : 'SAR'}`;
    }
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('active');
    document.getElementById('cartOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function handleCheckout() {
    if (cart.length === 0) {
        showToast(currentLanguage === 'ar' ? 'السلة فارغة' : 'Cart is empty', 'error');
        return;
    }

    showToast(currentLanguage === 'ar' ? 'تم إرسال طلبك بنجاح!' : 'Order placed successfully!', 'success');
    cart = [];
    saveCart();
    updateCartUI();
    closeCart();
}

// ==================== REVIEWS ====================
function renderReviews() {
    const reviewsGrid = document.getElementById('reviewsGrid');
    reviewsGrid.innerHTML = reviews.map(review => `
        <div class="review-card">
            <div class="review-stars">
                ${Array(5).fill(0).map((_, i) => `
                    <i class="fas fa-star${i < review.rating ? '' : ' fa-star-half-alt'}"></i>
                `).join('')}
            </div>
            <p class="review-comment">${currentLanguage === 'ar' ? review.comment : review.commentEn}</p>
            <div class="review-footer">
                <span class="review-author">${review.name}</span>
                <span class="review-date">${review.date}</span>
            </div>
        </div>
    `).join('');
}

// ==================== GALLERY ====================
function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = galleryImages.map((image, index) => `
        <div class="gallery-item">
            <img src="${image}" alt="Gallery ${index + 1}">
        </div>
    `).join('');
}

// ==================== POPULAR TIMES ====================
function renderPopularTimes() {
    const timesGrid = document.getElementById('timesGrid');
    timesGrid.innerHTML = popularTimes.map(time => {
        let barClass = 'low';
        if (time.busy > 70) barClass = 'high';
        else if (time.busy > 40) barClass = 'medium';

        return `
            <div class="time-item">
                <div class="time-header">
                    <span>${time.hour}</span>
                    <span>${time.busy}% ${currentLanguage === 'ar' ? 'مزدحم' : 'busy'}</span>
                </div>
                <div class="time-bar-container">
                    <div class="time-bar ${barClass}" style="width: ${time.busy}%"></div>
                </div>
            </div>
        `;
    }).join('');
}

// ==================== CONTACT FORM ====================
function handleContactSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', Object.fromEntries(formData));
    
    showToast(currentLanguage === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Message sent successfully!', 'success');
    e.target.reset();
}

// ==================== TOAST ====================
function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span class="toast-message">${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;