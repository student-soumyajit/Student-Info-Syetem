const connectDB = require("./src/config/db");
const productModel = require("./src/models/productModel");

const importData = async () => {
  try {
    await connectDB();
    await productModel.deleteMany();

    const products = [
      {
        name: "Wireless Noise-Cancelling Headphones",
        description:
          "Immersive sound experience with advanced active noise cancellation.",
        price: 299.99,
        category: "Electronics",
        stock: 15,
        imageUrl:
          "https://m.media-amazon.com/images/I/61z3yHvOy0L._AC_SY355_.jpg",
        ratings: 4.8,
        numReviews: 24,
      },
      {
        name: "Minimalist Modern Chair",
        description:
          "A stylish and comfortable addition to any contemporary living room.",
        price: 150.0,
        category: "Furniture",
        stock: 30,
        imageUrl:
          "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.2,
        numReviews: 12,
      },
      {
        name: "Professional DSLR Camera",
        description:
          "Capture stunning moments with high-resolution clarity and speed.",
        price: 1199.99,
        category: "Electronics",
        stock: 8,
        imageUrl:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.9,
        numReviews: 50,
      },
      {
        name: "Classic White Sneakers",
        description:
          "Versatile and comfortable, a staple for any casual outfit.",
        price: 85.0,
        category: "Clothing",
        stock: 50,
        imageUrl:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.5,
        numReviews: 89,
      },
      {
        name: "Smart Fitness Watch",
        description:
          "Track your workouts and stay connected with a sleek smartwatch.",
        price: 199.99,
        category: "Electronics",
        stock: 22,
        imageUrl:
          "https://images.unsplash.com/photo-1546868871-7041f2a55e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.6,
        numReviews: 34,
      },
      {
        name: "Ergonomic Laptop Stand",
        description: "Improve comfort and posture during long work sessions.",
        price: 49.99,
        category: "Accessories",
        stock: 40,
        imageUrl:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.3,
        numReviews: 18,
      },
      {
        name: "Wireless Bluetooth Headphones",
        description: "Premium wireless headphones with ANC.",
        price: 299.99,
        category: "Electronics",
        stock: 20,
        imageUrl:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.8,
        numReviews: 120,
      },
      {
        name: "Gaming Laptop",
        description: "High performance gaming laptop.",
        price: 1299.99,
        category: "Electronics",
        stock: 8,
        imageUrl:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.7,
        numReviews: 87,
      },
      {
        name: "Mechanical Keyboard",
        description: "RGB mechanical keyboard.",
        price: 89.99,
        category: "Electronics",
        stock: 35,
        imageUrl:
          "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?crop=entropy&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.6,
        numReviews: 53,
      },
      {
        name: "Wireless Mouse",
        description: "Ergonomic wireless mouse.",
        price: 39.99,
        category: "Accessories",
        stock: 40,
        imageUrl:
          "https://images.unsplash.com/photo-1527814050087-3793815479db?crop=entropy&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.4,
        numReviews: 60,
      },
      {
        name: "Smart Watch",
        description: "Fitness tracking smartwatch.",
        price: 249.99,
        category: "Electronics",
        stock: 18,
        imageUrl:
          "https://images.unsplash.com/photo-1546868871-7041f2a55e12?crop=entropy&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.7,
        numReviews: 101,
      },
      {
        name: "DSLR Camera",
        description: "Professional DSLR camera.",
        price: 1199.99,
        category: "Electronics",
        stock: 6,
        imageUrl:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.9,
        numReviews: 140,
      },
      {
        name: "Office Chair",
        description: "Comfortable ergonomic chair.",
        price: 199.99,
        category: "Furniture",
        stock: 25,
        imageUrl:
          "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?crop=entropy&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.5,
        numReviews: 40,
      },
      {
        name: "White Sneakers",
        description: "Comfortable casual sneakers.",
        price: 79.99,
        category: "Clothing",
        stock: 50,
        imageUrl:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.6,
        numReviews: 150,
      },
      {
        name: "Laptop Stand",
        description: "Adjustable aluminum laptop stand.",
        price: 49.99,
        category: "Accessories",
        stock: 30,
        imageUrl:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.3,
        numReviews: 39,
      },
      {
        name: "Coffee Mug",
        description: "Ceramic coffee mug.",
        price: 14.99,
        category: "Home",
        stock: 60,
        imageUrl:
          "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?crop=entropy&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.4,
        numReviews: 20,
      },

      // Duplicate the structure below and change details

      {
        name: "Bluetooth Speaker",
        description: "Portable Bluetooth speaker.",
        price: 69.99,
        category: "Electronics",
        stock: 22,
        imageUrl:
          "https://images.unsplash.com/photo-1507878866276-a947ef722fee?crop=entropy&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.5,
        numReviews: 55,
      },
      {
        name: "Running Shoes",
        description: "Lightweight running shoes.",
        price: 99.99,
        category: "Clothing",
        stock: 28,
        imageUrl:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.6,
        numReviews: 73,
      },
      {
        name: "Backpack",
        description: "Waterproof travel backpack.",
        price: 59.99,
        category: "Accessories",
        stock: 31,
        imageUrl:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.5,
        numReviews: 67,
      },
      {
        name: "Reading Lamp",
        description: "LED desk lamp.",
        price: 34.99,
        category: "Home",
        stock: 26,
        imageUrl:
          "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?crop=entropy&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.3,
        numReviews: 21,
      },
      {
        name: "Sunglasses",
        description: "UV protected sunglasses.",
        price: 44.99,
        category: "Accessories",
        stock: 34,
        imageUrl:
          "https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.4,
        numReviews: 38,
      },
    ];

    await productModel.insertMany(products);
    console.log("✅ Products inserted successfully!");
    process.exit();
  } catch (error) {
    console.error(`❌ Error with data import: ${error.message}`);
    process.exit(1);
  }
};

importData();
