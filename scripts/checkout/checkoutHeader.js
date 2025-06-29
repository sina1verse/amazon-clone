import { cart } from "../../data/cart.js";

export function renderCheckoutHeader() {
  let totalItems = 0;

  cart.forEach((cartItem) =>{  
    totalItems += cartItem.quantity;
  });

  const checkoutHeaderHTML = `
  <div class="checkout-header-left-section">
          <a href="amazon.html">
            <img class="amazon-logo" src="images/amazon-logo.png">
            <img class="amazon-mobile-logo" src="images/amazon-mobile-logo.png">
          </a>
        </div>

        <div class="checkout-header-middle-section">
          Checkout (<a class="return-to-home-link"
            href="amazon.html">${totalItems}</a>)
        </div>

        <div class="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png">
        </div>
  `;

  document.querySelector('.js-header-content').innerHTML = checkoutHeaderHTML;
}

