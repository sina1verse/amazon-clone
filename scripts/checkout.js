import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

async function loadPage() {
  await loadProductsFetch();

  const value = await new Promise((resolve) => {
    loadCart(() => {
      resolve("value3");
    });
  });

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();
