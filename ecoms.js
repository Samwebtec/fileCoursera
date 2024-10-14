// Initialize an empty array to store cart items
let cart = [];

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    // Clear current cart display
    cartItems.innerHTML = '';

    // Initialize total price
    let total = 0;

    // Add each product in the cart to the cart display
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - NG${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        
        // Update total price
        total += item.price;
    });

    // Update the total price in the cart
    cartTotal.textContent = total.toFixed(2);
}

// Function to add a product to the cart
function addToCart(productName, productPrice) {
    // Add the product to the cart array
    cart.push({ name: productName, price: productPrice });

    // Update the cart display
    updateCart();
}

// Attach event listeners to all "Add to Cart" buttons
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', function() {
        const productElement = button.parentElement;
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('Price: $', ''));

        // Add the product to the cart
        addToCart(productName, productPrice);
    });
});
