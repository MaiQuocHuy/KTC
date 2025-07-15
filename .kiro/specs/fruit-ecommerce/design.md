# Design Document - Fruit E-commerce Website

## Overview

The fruit e-commerce website will be built as a modern web application using Next.js with TypeScript, providing a fast, SEO-friendly, and user-friendly shopping experience. The application will feature a responsive design using Tailwind CSS, client-side state management for cart functionality, and integration with payment processing services.

## Architecture

### Technology Stack

- **Frontend Framework**: Next.js 15.3.5 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for responsive design
- **State Management**: React Context API for cart state
- **Database**: JSON files for initial development (can be upgraded to PostgreSQL/MongoDB later)
- **Payment Processing**: Stripe integration for secure payments
- **Image Storage**: Local storage with Next.js Image optimization
- **Deployment**: Vercel (recommended for Next.js)

### Application Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   ├── products/
│   │   ├── page.tsx               # Product catalog
│   │   └── [id]/page.tsx          # Product details
│   ├── cart/page.tsx              # Shopping cart
│   ├── checkout/page.tsx          # Checkout process
│   ├── orders/page.tsx            # Order history
│   └── admin/
│       ├── page.tsx               # Admin dashboard
│       └── products/page.tsx      # Product management
├── components/
│   ├── ui/                        # Reusable UI components
│   ├── ProductCard.tsx            # Product display component
│   ├── CartItem.tsx               # Cart item component
│   ├── SearchBar.tsx              # Search functionality
│   └── FilterPanel.tsx            # Product filtering
├── lib/
│   ├── data/                      # Data access layer
│   ├── types.ts                   # TypeScript interfaces
│   ├── utils.ts                   # Utility functions
│   └── cart-context.tsx           # Cart state management
└── public/
    └── images/                    # Product images
```

## Components and Interfaces

### Core Data Types

```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  nutritionalFacts: string;
  origin: string;
  inStock: boolean;
  stockQuantity: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerInfo: CustomerInfo;
  status: "pending" | "processing" | "shipped" | "delivered";
  createdAt: Date;
}

interface CustomerInfo {
  email: string;
  firstName: string;
  lastName: string;
  shippingAddress: Address;
  billingAddress: Address;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}
```

### Key Components

#### ProductCard Component

- Displays product image, name, price, and add to cart button
- Handles out of stock states with disabled button and visual indicator
- Shows "out of stock" message when inventory is unavailable
- Responsive design for different screen sizes
- Links to detailed product view on click

#### ProductDetailView Component

- Displays comprehensive product information including nutritional facts and origin
- Shows high-quality product images with zoom functionality
- Includes add to cart functionality with quantity selection
- Handles stock availability display and restrictions

#### CartContext Provider

- Manages global cart state using React Context
- Provides functions for adding, removing, and updating cart items
- Persists cart data in localStorage for session continuity
- Updates cart counter in real-time across all components
- Handles empty cart states with appropriate messaging

#### SearchBar Component

- Real-time search functionality with debounced input
- Searches across product names and descriptions
- Shows "no results found" message when no matches exist
- Provides clear search functionality to reset filters
- Integrates seamlessly with product filtering system

#### FilterPanel Component

- Category-based filtering (Citrus, Berries, Tropical, Stone Fruits)
- Price range filtering with min/max inputs or slider
- Multiple filter combination support
- Clear all filters functionality
- Real-time filter application with immediate results

#### OrderHistory Component

- Displays customer's previous orders in chronological order
- Shows order details including items, quantities, prices, and delivery status
- Provides reorder functionality to add previous items to current cart
- Handles empty order history with informative messaging
- Links to individual order detail views

#### AdminPanel Components

- **AdminDashboard**: Overview of inventory, orders, and system status
- **ProductManagement**: Add, edit, and delete product functionality
- **InventoryControl**: Stock level management and out-of-stock indicators
- **OrderManagement**: View and update order statuses

## Data Models

### Product Management

- Products stored in JSON format initially
- Each product includes all required fields from the Product interface
- Images stored in public/images directory with optimized formats
- Product categories: Citrus, Berries, Tropical, Stone Fruits, etc.

### Cart Management

- Cart state managed through React Context
- Cart data persisted in browser localStorage
- Cart calculations handled client-side for performance

### Order Processing

- Orders stored locally initially (can be upgraded to database)
- Order confirmation emails sent via email service integration
- Order status tracking system

## Error Handling

### Client-Side Error Handling

- Form validation with user-friendly error messages
- Network error handling with retry mechanisms
- Loading states for all async operations
- Graceful fallbacks for missing images or data

### Payment Error Handling

- Stripe error handling for payment failures
- Clear error messages for payment issues
- Retry mechanisms for failed transactions
- Secure handling of payment data

### Data Validation

- TypeScript interfaces for compile-time type checking
- Runtime validation for user inputs
- Sanitization of search queries and form data

## Testing Strategy

### Unit Testing

- Component testing using React Testing Library
- Utility function testing with Jest
- Cart context and state management testing
- Form validation testing

### Integration Testing

- End-to-end user flows testing
- Payment integration testing (using Stripe test mode)
- Search and filtering functionality testing
- Cart operations testing

### Performance Testing

- Image loading optimization testing
- Search performance with large product catalogs
- Cart operations performance testing
- Mobile responsiveness testing

## Security Considerations

### Payment Security

- Stripe integration for PCI compliance
- No storage of payment card data
- Secure HTTPS connections for all transactions

### Data Protection

- Input sanitization to prevent XSS attacks
- CSRF protection for form submissions
- Secure handling of customer data
- Environment variables for sensitive configuration

## Performance Optimization

### Image Optimization

- Next.js Image component for automatic optimization
- WebP format support with fallbacks
- Lazy loading for product images
- Responsive image sizing

### Code Optimization

- Dynamic imports for code splitting
- Optimized bundle sizes
- Efficient re-rendering with React.memo
- Debounced search to reduce API calls

### Caching Strategy

- Static generation for product pages where possible
- Browser caching for images and static assets
- Service worker for offline functionality (future enhancement)

## Responsive Design

### Mobile-First Approach

- Tailwind CSS responsive utilities
- Touch-friendly interface elements
- Optimized mobile checkout flow
- Responsive product grid layouts

### Accessibility

- ARIA labels for screen readers
- Keyboard navigation support
- High contrast color schemes
- Alt text for all product images

## Future Enhancements

### Phase 2 Features

- User authentication and accounts
- Product reviews and ratings
- Wishlist functionality
- Advanced inventory management

### Phase 3 Features

- Multi-vendor support
- Subscription-based fruit boxes
- Mobile app development
- Advanced analytics dashboard
