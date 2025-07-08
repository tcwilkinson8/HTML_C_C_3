document.addEventListener('DOMContentLoaded', () => {
    const cartToggle = document.getElementById('cart-toggle');
    const cartPanel = document.getElementById('cart-panel');
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
    let cart = [];
  
    function updateCartUI() {
      cartCount.textContent = cart.length;
      cartItems.innerHTML = '';
  
      if (cart.length === 0) {
        cartItems.innerHTML = '<li>No items yet!</li>';
        return;
      }
  
      cart.forEach(item => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.textContent = `• ${item}`;
        cartItems.appendChild(li);
      });
    }
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const itemName = button.dataset.name;
        cart.push(itemName);
        updateCartUI();
      });
    });
  
    cartToggle.addEventListener('click', () => {
      cartPanel.classList.toggle('active');
    });
  });
  