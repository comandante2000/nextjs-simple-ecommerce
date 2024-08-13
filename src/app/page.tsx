"use client";

import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';
import SortSelect from '@/components/SortSelect';
import { Product } from '@/types/Product';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('price');

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('http://localhost:3000/api/products');
      const data: Product[] = await res.json();
      setProducts(data);
      console.log(data);
    }

    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sort === 'price' ? a.price - b.price : b.rating - a.rating
    );

  return (
    <div className="container mx-auto p-4">
      <SearchBar search={search} onSearchChange={setSearch} />
      <SortSelect sort={sort} onSortChange={setSort} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
