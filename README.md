# Zavisoft - E-Commerce Store

A modern, responsive e-commerce web application built with React, TypeScript, and Tailwind CSS. Features a full shopping cart system, product browsing, dynamic categories, and smooth animations.

🔗 **Live Demo:** [https://zavisoft1.netlify.app/](https://zavisoft1.netlify.app/)

---

## 📋 Overview

fully functional e-commerce platform that allows users to browse products, view detailed product information, add items to their cart, and manage their shopping experience. The application integrates with a REST API to fetch real-time product data and categories, providing a dynamic shopping experience.

### Key Features

- **Product Catalog** - Browse through a wide selection of products with filtering by categories
- **Product Details** - View detailed information including multiple images, sizes, colors, and reviews
- **Shopping Cart** - Complete cart management with add, remove, update quantity, and clear functionality
- **Dynamic Categories** - Interactive category carousel with smooth transitions
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop devices
- **Related Products** - "You may also like" carousel with pagination controls
- **Smooth Animations** - Fade and scale transitions for enhanced user experience
- **State Management** - Context API for global cart state across all pages
- **Type Safety** - Full TypeScript implementation for robust code

---

## 🛠️ Tech Stack

### Frontend Framework
- **React** `19.2.0` - UI library for building component-based interfaces
- **TypeScript** `5.9.3` - Static typing for enhanced developer experience
- **Vite** `7.3.1` - Next-generation frontend build tool

### Routing & State
- **React Router** `7.13.0` - Client-side routing with dynamic routes
- **Context API** - Global state management for shopping cart

### Styling
- **Tailwind CSS** `4.2.0` - Utility-first CSS framework
- **@tailwindcss/vite** `4.2.0` - Vite plugin for Tailwind CSS

### HTTP & Icons
- **Axios** `1.13.5` - Promise-based HTTP client for API requests
- **Lucide React** `0.575.0` - Beautiful, customizable icon library
- **React Icons** `5.5.0` - Additional icon library

### Code Quality
- **ESLint** `9.39.1` - Linting tool for code consistency
- **TypeScript ESLint** `8.48.0` - TypeScript-specific linting rules

---

## 🚀 Setup Instructions

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Zavisoft
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

---

## 📁 Project Structure

```
Zavisoft/
├── src/
│   ├── assets/           # Static assets (images, SVGs)
│   │   └── assets.ts     # Asset exports and static data
│   ├── Components/       # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── CategorySection.tsx
│   │   ├── Footer.tsx
│   │   ├── Loading.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductSection.tsx
│   │   ├── Review.tsx
│   │   └── ReviewCard.tsx
│   ├── context/          # Context API providers
│   │   └── CartContext.tsx
│   ├── hook/             # Custom React hooks
│   │   └── useProducts.ts
│   ├── lib/              # Utility libraries
│   │   └── axios.ts      # Axios instance configuration
│   ├── page/             # Page components
│   │   ├── Cart.tsx
│   │   ├── Home.tsx
│   │   └── ProductDetails.tsx
│   ├── Router/           # Routing configuration
│   │   ├── Layout.tsx
│   │   └── Router.tsx
│   ├── service/          # API service layer
│   │   └── product.service.ts
│   ├── types/            # TypeScript type definitions
│   │   ├── ProductType.ts
│   │   └── ReviewCardPropos.ts
│   ├── App.tsx           # Root application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Public static files
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md             # Project documentation
```

---

## 🎨 Features in Detail

### 1. **Shopping Cart**
- Add products with selected size and color options
- Dynamic cart badge showing total items
- Quantity controls (increase/decrease with minimum of 1)
- Remove individual items or clear entire cart
- Real-time price calculations (subtotal, delivery fee, total)
- Persistent cart state across all pages using Context API

### 2. **Product Browsing**
- Grid layout responsive to screen size (1/2/4 columns)
- Product cards with images, titles, prices, and category badges
- Smooth hover effects and transitions
- Direct navigation to product details

### 3. **Product Details Page**
- Multiple product images with selection
- Size and color picker with visual feedback
- Quantity selector
- Add to cart with visual confirmation
- Related products carousel
- Customer reviews section
- Automatic scroll to top on page load

### 4. **Category Section**
- Dynamic API-driven categories
- Carousel showing 2 categories at a time
- Smooth fade/scale animations
- Previous/Next navigation with visual hover states

### 5. **"You May Also Like" Carousel**
- Full-width responsive section
- Shows 1 product (mobile), 2 (tablet), 4 (desktop)
- Pagination controls with disabled states at boundaries
- Smooth transitions between product sets
- Auto-resets on screen size changes

---

## 🌐 API Integration

**Base URL:** `https://api.escuelajs.co/api/v1`

### Endpoints Used:
- `GET /products` - Fetch all products
- `GET /products/:id` - Fetch single product by ID
- `GET /categories` - Fetch all categories

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column)
- **Tablet**: 640px - 1024px (2 columns)
- **Desktop**: > 1024px (4 columns)

---

## 🔧 Configuration Files

- **vite.config.ts** - Vite build configuration with React plugin
- **tsconfig.json** - TypeScript compiler options
- **tsconfig.app.json** - App-specific TypeScript config
- **tsconfig.node.json** - Node.js TypeScript config
- **eslint.config.js** - ESLint rules and settings

---

## 📌 Notes

### Current Implementation
- ✅ Fully functional shopping cart with Context API
- ✅ Responsive design across all devices
- ✅ API integration for products and categories
- ✅ Type-safe codebase with TypeScript
- ✅ Modular component architecture
- ✅ Custom hooks for reusable logic
- ✅ Smooth animations and transitions
- ✅ Error handling for API calls



### Known Considerations
- Cart data is stored in React state (not persisted to backend/localStorage)
- Some carousel logic is duplicated between components (refactoring recommended)
- Delivery fee is hardcoded ($6.99) - should be configurable
- Product stock/availability not tracked
- No input validation on quantity selectors beyond minimum of 1

---

## 👨‍💻 Development

### Code Style
- Follow React best practices and functional components
- Use TypeScript for type safety
- Implement proper separation of concerns
- Keep components small and focused
- Use custom hooks for shared logic

### Folder Conventions
- **Components** - Reusable UI components (PascalCase)
- **page** - Page-level components (PascalCase)
- **service** - API service functions (camelCase)
- **types** - TypeScript interfaces and types
- **context** - React Context providers
- **hook** - Custom React hooks (use prefix)

---

## 📄 License

This project is private and proprietary.

---

## 🙏 Acknowledgments

- [Fake Store API](https://api.escuelajs.co) for product data
- [Lucide Icons](https://lucide.dev) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com) for styling utilities
- [React](https://react.dev) for the UI framework

---

## 📧 Contact

For questions or support, please contact the development team.


---

