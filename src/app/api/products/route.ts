import { NextResponse } from 'next/server';

// Example product data to be returned by the API make at leasr 10 products
const products = [
  { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 29.99, rating: 4.5 },
  { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 19.99, rating: 4.0 },
  { id: 3, name: 'Product 3', description: 'Description for Product 3', price: 39.99, rating: 4.8 },
  { id: 4, name: 'Product 4', description: 'Description for Product 4', price: 49.99, rating: 4.2 },
  { id: 5, name: 'Product 5', description: 'Description for Product 5', price: 59.99, rating: 4.7 },
  { id: 6, name: 'Product 6', description: 'Description for Product 6', price: 69.99, rating: 4.3 },
  { id: 7, name: 'Product 7', description: 'Description for Product 7', price: 79.99, rating: 4.6 },
  { id: 8, name: 'Product 8', description: 'Description for Product 8', price: 89.99, rating: 4.1 },
  { id: 9, name: 'Product 9', description: 'Description for Product 9', price: 99.99, rating: 4.9 },
  { id: 10, name: 'Product 10', description: 'Description for Product 10', price: 109.99, rating: 4.4 }

  // Add more products as needed
];

export async function GET() {
  return NextResponse.json(products);
}