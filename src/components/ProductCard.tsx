"use client";

import React from 'react';
import { Product } from '@/types/Product';
import { useDispatch } from 'react-redux';
import { addItem } from '@/features/cart/cartSlice';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="border p-4 rounded shadow-sm">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.description.substring(0, 100)}...</p>
      <p className="text-green-600 font-semibold mt-2">${product.price.toFixed(2)}</p>
      <div className="text-yellow-500">
        {Array.from({ length: product.rating }, (_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-2 bg-blue-500 text-white p-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
