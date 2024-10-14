  // Variables to store cart items and total
  let cart = [];
  let cartTotal = 0;
  // Add event listeners to "Add to Cart" buttons
  let addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
          let book = this.parentElement;
          let title = book.getAttribute('data-title');
          let price = parseFloat(book.getAttribute('data-price'));
          addToCart(title, price);
      });
  });
  // Function to add items to the cart
  function addToCart(title, price) {
      cart.push({ title, price });
      cartTotal += price;
      updateCart();
  }
  // Function to update the cart display
  function updateCart() {
      let cartItemsList = document.getElementById('cart-items');
      let cartTotalDisplay = document.getElementById('cart-total');
      // Clear current items
      cartItemsList.innerHTML = '';
      // Add new items
      cart.forEach(item => {
          let li = document.createElement('li');
          li.textContent = `${item.title} - NG${item.price.toFixed(2)}`;
          cartItemsList.appendChild(li);
      });
      // Update total price
      cartTotalDisplay.textContent = cartTotal.toFixed(2);
  }
  // Handle checkout form submission
  let checkoutForm = document.getElementById('checkout-form');
  checkoutForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Get customer details
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let address = document.getElementById('address').value;
      let paymentMethod = document.getElementById('payment').value;
      // Create order summary
      let orderSummary = `
          Name: ${name}
          Email: ${email}
          Address: ${address}
          Payment Method: ${paymentMethod}
          Order Total: NG${cartTotal.toFixed(2)}
          Items: ${cart.map(item => item.title).join(', ')}
      `;
      // Log the order details (you can send this to a server for actual processing)
      console.log("Order placed:", orderSummary);
      // Simulate order submission (you'd send this data to a server in a real app)
      alert("Order placed successfully!");
      // Clear cart after successful order
      cart = [];
      cartTotal = 0;
      updateCart();
      checkoutForm.reset();
  });