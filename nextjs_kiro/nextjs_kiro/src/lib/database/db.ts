import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "data", "ecommerce.db");
const db = new Database(dbPath);

// Enable foreign keys
db.pragma("foreign_keys = ON");

// Initialize database tables
export function initializeDatabase() {
  // Users table
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT DEFAULT 'customer',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Products table
  db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT,
      price REAL NOT NULL,
      category TEXT,
      images TEXT, -- JSON array of image URLs
      stock INTEGER DEFAULT 0,
      is_active BOOLEAN DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Addresses table
  db.exec(`
    CREATE TABLE IF NOT EXISTS addresses (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      street TEXT NOT NULL,
      city TEXT NOT NULL,
      state TEXT NOT NULL,
      zip_code TEXT NOT NULL,
      country TEXT NOT NULL,
      is_default BOOLEAN DEFAULT 0,
      FOREIGN KEY (user_id) REFERENCES users (id)
    )
  `);

  // Orders table
  db.exec(`
    CREATE TABLE IF NOT EXISTS orders (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      total_amount REAL NOT NULL,
      status TEXT DEFAULT 'pending',
      payment_status TEXT DEFAULT 'pending',
      shipping_address TEXT, -- JSON object
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users (id)
    )
  `);

  // Order items table
  db.exec(`
    CREATE TABLE IF NOT EXISTS order_items (
      id TEXT PRIMARY KEY,
      order_id TEXT NOT NULL,
      product_id TEXT NOT NULL,
      quantity INTEGER NOT NULL,
      price REAL NOT NULL,
      FOREIGN KEY (order_id) REFERENCES orders (id),
      FOREIGN KEY (product_id) REFERENCES products (id)
    )
  `);

  // Insert sample products
  const sampleProducts = [
    {
      id: "apple-red",
      name: "Red Apples",
      description: "Fresh, crispy red apples perfect for snacking",
      price: 3.99,
      category: "Apples",
      images: JSON.stringify(["/images/red-apples.jpg"]),
      stock: 50,
    },
    {
      id: "banana-yellow",
      name: "Yellow Bananas",
      description: "Sweet, ripe bananas packed with potassium",
      price: 2.49,
      category: "Bananas",
      images: JSON.stringify(["/images/bananas.jpg"]),
      stock: 75,
    },
    {
      id: "orange-navel",
      name: "Navel Oranges",
      description: "Juicy navel oranges, perfect for fresh juice",
      price: 4.99,
      category: "Oranges",
      images: JSON.stringify(["/images/oranges.jpg"]),
      stock: 40,
    },
    {
      id: "strawberry-fresh",
      name: "Fresh Strawberries",
      description: "Sweet, fresh strawberries perfect for desserts",
      price: 5.99,
      category: "Berries",
      images: JSON.stringify(["/images/strawberries.jpg"]),
      stock: 30,
    },
  ];

  const insertProduct = db.prepare(`
    INSERT OR IGNORE INTO products (id, name, description, price, category, images, stock)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  sampleProducts.forEach((product) => {
    insertProduct.run(
      product.id,
      product.name,
      product.description,
      product.price,
      product.category,
      product.images,
      product.stock
    );
  });

  console.log("Database initialized successfully");
}

// Initialize database on module load
initializeDatabase();

export default db;
