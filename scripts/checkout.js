import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import {cart, removeFromCart, calculateCartQuantity, saveToStorage} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';

renderOrderSummary();
renderPaymentSummary();





 


