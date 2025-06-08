# Angular Material Dashboard Project

This project is a responsive dashboard application built with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8 and Angular Material. It demonstrates a modern UI with a sidebar, header, product cards, charts, and a data table, all powered by live data from a public API.

## Features

- **Responsive Layout:** Uses Angular Material's Sidenav and Toolbar for a modern dashboard layout that adapts to desktop and mobile screens.
- **Sidebar Navigation:** Quick links to Dashboard (Products), Charts, and Table views.
- **Header:** Top navigation bar with menu toggle, cart icon (with live count), and user icon.
- **Product Cards:** Displays products in a grid with images, price, and add-to-cart functionality. Quantity controls and "Out of Stock" messaging are included.
- **Shopping Cart:** Cart state is managed globally using a service and shows the total count in the header.
- **Charts:** 
  - **Bar Chart:** Visualizes product prices for the first 7 products.
  - **Pie Chart:** Shows the distribution of products by category.
- **Product Table:** Tabular view of products with sorting, pagination, and category display.
- **Animations:** Smooth transitions and animations for cards, sidebar, and header.
- **API Integration:** Fetches products and categories from [EscuelaJS API](https://api.escuelajs.co/api/v1/products).

## Project Structure

```
src/
  app/                 # Root app component and routing
  cards/               # Product cards grid component
  charts/              # Charts (bar and pie) component
  header/              # Top navigation/header component
  sidebar/             # Sidebar navigation component
  table/               # Product table component
  cart.service.ts      # Shopping cart service (global state)
  product.service.ts   # Product/category API service
  styles.css           # Global styles
```

## Getting Started

### Development Server

Run the following command to start the dev server:

```bash
ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/). The app will reload automatically if you change any source files.

### Build

To build the project for production:

```bash
ng build
```

### Running Unit Tests

To execute unit tests via [Karma](https://karma-runner.github.io):

```bash
ng test
```

## Implementation Details

- **Angular Standalone Components:** All major UI blocks are implemented as standalone components for modularity.
- **Material Modules:** Uses Angular Material for UI elements (cards, toolbar, sidenav, table, icons, etc.).
- **ng2-charts & Chart.js:** For rendering charts.
- **RxJS:** Used in services for state management (cart count).
- **Animations:** Angular's animation API is used for smooth UI transitions.
- **API Services:** `ProductService` handles all HTTP requests to fetch products and categories.

## Further Help

For more Angular CLI commands and help, run:

```bash
ng help
```

Or visit the [Angular CLI Documentation](https://angular.dev/tools/cli).

---

**Author:** [Karanam Chandra Sumanth]  
**License:** MIT 
