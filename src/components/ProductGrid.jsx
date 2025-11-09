import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
    { id: 1, image: '/images/pickle-jar.jpg', alt: 'Thick Pickle Jar', gridClass: 'mobile-1', delay: 'delay-100' },
    { id: 2, image: '/images/ape-drink.jpg', alt: 'Ape Drink Can', gridClass: 'mobile-2', delay: 'delay-200' },
    { id: 3, image: '/images/energy-drink.jpg', alt: 'Energy Drink', gridClass: 'mobile-3', delay: 'delay-300' },
    { id: 4, image: '/images/burger.jpg', alt: 'Burger', gridClass: 'mobile-4', delay: 'delay-[400ms]' },
    { id: 5, image: '/images/watch.jpg', alt: 'Luxury Watch', gridClass: 'mobile-5', delay: 'delay-500' }
  ];

  return (
    <div className="mb-16">
      {/* Desktop & Tablet Grid - Asymmetric Layout */}
      <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4 px-2">
        {/* Card 1 - Pickle Jar */}
        <div className="md:col-span-2 lg:col-span-1 md:row-span-2">
          <ProductCard {...products[0]} height="h-[400px] lg:h-[450px]" />
        </div>
        
        {/* Card 2 - Ape Drink */}
        <div className="md:col-span-2 lg:col-span-1 md:row-span-1">
          <ProductCard {...products[1]} height="h-[195px] lg:h-[220px]" />
        </div>
        
        {/* Card 3 - Energy Drink (Large) */}
        <div className="md:col-span-4 lg:col-span-3 md:row-span-2">
          <ProductCard {...products[2]} height="h-[400px] lg:h-[450px]" />
        </div>
        
        {/* Card 4 - Burger */}
        <div className="md:col-span-2 lg:col-span-1 md:row-span-1">
          <ProductCard {...products[3]} height="h-[195px] lg:h-[220px]" />
        </div>
        
        {/* Card 5 - Watch */}
        <div className="md:col-span-2 lg:col-span-1 md:row-span-1">
          <ProductCard {...products[4]} height="h-[195px] lg:h-[220px]" />
        </div>
      </div>

      {/* Mobile Grid - Compact Masonry Style */}
      <div className="md:hidden grid grid-cols-2 gap-2 px-2">
        {/* Row 1 - Two small cards side by side */}
        <div className="col-span-1">
          <ProductCard {...products[0]} height="h-[180px]" />
        </div>
        <div className="col-span-1">
          <ProductCard {...products[1]} height="h-[180px]" />
        </div>
        
        {/* Row 2 - One large card spanning full width */}
        <div className="col-span-2">
          <ProductCard {...products[2]} height="h-[220px]" />
        </div>
        
        {/* Row 3 - Two small cards side by side */}
        <div className="col-span-1">
          <ProductCard {...products[3]} height="h-[180px]" />
        </div>
        <div className="col-span-1">
          <ProductCard {...products[4]} height="h-[180px]" />
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
