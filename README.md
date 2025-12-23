# Amazon Clone

A front-end clone of the Amazon shopping experience built to practice and showcase modern JavaScript, DOM manipulation, and UI architecture skills.

**Live demo:** https://sina-amazon-clone.vercel.app/

## Tech Stack

- **HTML** for page structure (home, checkout, orders, tracking)
- **CSS** for responsive layout, product grid, and Amazon-style UI components
- **Vanilla JavaScript** for all application logic (cart, checkout, orders, tracking) - no frameworks

## Unit Testing

- **Jasmine** for unit testing and code coverage verification
## Main Features

- **Product listing page** with dynamic rendering from a data source (no hard-coded markup)
- **Shopping cart** with add/remove/update quantity and real-time price and subtotal updates
- **Checkout flow** with order summary, item totals, and validation logic
- **Orders page** that displays past orders using stored data structures
- **Order tracking page** that visualizes order status progression

## Front-End Skills Demonstrated

- **DOM Manipulation:** Creating and updating UI elements dynamically based on JavaScript data models instead of static HTML. Uses createElement(), appendChild(), and text content updates to render products, cart items, and order histories.
- **State Management in Vanilla JS:** Keeping cart, orders, and tracking state in sync across different pages using shared modules and data files. No external state management library needed.
- **Modular JavaScript:** Splitting logic into separate scripts for pages (index.js, checkout.js, orders.js, tracking.js) and utilities for reusability. Each module has a single responsibility.
- **Working with Structured Data:** Loading product and order data from the data/ folder and transforming it into UI components based on user interactions.
- **Responsive Layout:** CSS Grid and Flexbox to create responsive designs that work on mobile, tablet, and desktop while maintaining visual fidelity to Amazon's design.
- **Event Handling:** Using event listeners for user interactions (clicks, form submissions) and propagating state changes through the application.
- **Code Quality:** Using Prettier for consistent formatting and maintaining readability as the project grows.

## Project Structure

```
amazon-clone/
├── index.html                 # Main storefront page with product grid
├── checkout.html              # Checkout page with cart details
├── orders.html                # Orders history page
├── tracking.html              # Order tracking UI
├── scripts/
│   ├── index.js               # Home page logic and product rendering
│   ├── checkout/
│   │   └── checkout.js        # Checkout page logic and validation
│   ├── orders/
│   │   └── orders.js          # Orders listing and display logic
│   ├── tracking/
│   │   └── tracking.js        # Order tracking visualization
│   └── utils/
│       ├── helpers.js         # Shared utility functions
│       └── cart.js            # Cart state and operations
├── data/
│   ├── products.js            # Product catalog data
│   └── orders.js              # Sample order data for testing
├── styles/
│   ├── index.css              # Home page styles
│   ├── checkout.css           # Checkout page styles
│   ├── general.css            # Shared component styles
│   └── orders.css             # Orders and tracking styles
├── tests/                     # Test files for refactoring verification
├── backend/                   # Backend layer (Vercel deployment)
└── README.md                  # This file
```

## How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/sina1verse/amazon-clone.git

# 2. Navigate into the project folder
cd amazon-clone

# 3. Start a local server and open index.html
# Option A: Use VS Code Live Server extension (right-click > Open with Live Server)
# Option B: Use Python's built-in server
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

## How It Works

### Cart System
The cart is managed through a JavaScript object that tracks items and quantities. When users click "Add to Cart," the item is added to the cart state and the UI updates to reflect the new total. Quantity updates trigger price recalculations.

### Checkout Flow
Users review their cart items on the checkout page, see itemized costs, and the application calculates subtotal, tax, and total. Orders are then saved to a data structure for retrieval on the orders page.

### Order Tracking
Each order has a status (placed, shipped, delivering, delivered) that is visualized on the tracking page using a progress indicator. This demonstrates conditional rendering and data-driven UI updates.

## Future Improvements

- [ ] Add realistic API-style data loading instead of static JSON files
- [ ] Implement persistent storage using browser localStorage
- [ ] Add more comprehensive unit tests with a test runner (Jasmine)
- [ ] Improve accessibility: keyboard navigation, ARIA attributes, semantic HTML
- [ ] Add a search and filter feature for products
- [ ] Implement user authentication mock (login/logout)
- [ ] Add payment processing UI (mock Stripe integration)
- [ ] Optimize images and implement lazy loading

## License

This project is open source and available for educational purposes.
