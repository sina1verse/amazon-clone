import {cart, removeFromCart, calculateCartQuantity, saveToStorage} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';

function updateCheckoutQuantityHTML(){
document.querySelector(
  '.js-return-to-home-link-quantity').innerHTML = calculateCartQuantity();
};

updateCheckoutQuantityHTML();

let cartSummaryHTML ='';


//HTML acummulator
cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  })

  cartSummaryHTML +=`
    <div class="cart-item-container 
    js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: Tuesday, June 21
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${(formatCurrency(matchingProduct.priceCents))}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
            </span>
            <span class="link-primary js-update-link js-update-link-${matchingProduct.id}" data-product-id ="${matchingProduct.id}">
              Update
            </span>
            <span class="update-editing-container js-update-editing-container-${matchingProduct.id}">
              <input class="quantity-input js-quantity-input-${matchingProduct.id}">
              <span class="link-primary js-save-link-${matchingProduct.id}">
                Save
              </span>
            </span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          <div class="delivery-option">
            <input type="radio" checked
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Tuesday, June 21
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Wednesday, June 15
              </div>
              <div class="delivery-option-price">
                $4.99 - Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Monday, June 13
              </div>
              <div class="delivery-option-price">
                $9.99 - Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
});


//printing the HTML
document.querySelector('.js-order-summary')
  .innerHTML = cartSummaryHTML;


//delete button
document.querySelectorAll('.js-delete-link')
  .forEach((link)=> {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.remove();
      updateCheckoutQuantityHTML();
    });
  });

//accessing update link
document.querySelectorAll('.js-update-link').forEach((updateLink)=> {
  const productId = updateLink.dataset.productId;
  //using update link
  updateLink.addEventListener('click', ()=> {
    document.querySelector(`
      .js-update-editing-container-${productId}`).style.display = "initial";

    document.querySelector(`.js-update-link-${productId}`).classList.add('is-editing-quantity');

    document.querySelector(`.js-quantity-label-${productId}`).classList.add('is-editing-quantity');
    //using save link
    const saveLink = document.querySelector(`.js-save-link-${productId}`);
    const quantityInput = document.querySelector(`.js-quantity-input-${productId}`);

    saveLink.addEventListener('click', ()=> {
      document.querySelector(`
      .js-update-editing-container-${productId}`).style.display = "none";
      
      document.querySelector(`.js-update-link-${productId}`).classList.remove('is-editing-quantity');

      document.querySelector(`.js-quantity-label-${productId}`).classList.remove('is-editing-quantity');

      document.querySelector(`.js-quantity-label-${productId}`).innerHTML = Number(quantityInput.value);
      
      //updating cart
      cart.forEach((cartItem)=> {
        if (cartItem.productId === productId){
          cartItem.quantity = Number(quantityInput.value);
        }
      });
      
      saveToStorage(cart);
      calculateCartQuantity();
      updateCheckoutQuantityHTML();
      
    });
  });
});

//cart
 //     quantityInput.value
//js-quantity-label-${matchingProduct.id}"
