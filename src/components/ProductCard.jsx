import React from 'react';

const ProductCard = ({ image, alt, height, delay }) => {
  return (
    <div className={`
      ${height}
      rounded-xl md:rounded-2xl
      overflow-hidden 
      relative
      group
      transition-all duration-500 ease-out
      hover:-translate-y-2 hover:scale-[1.02] 
      hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]
      animate-scaleIn
      ${delay}
      bg-gradient-to-br from-gray-900 to-black
    `}>
      {/* Image with overlay effect */}
      <div className="w-full h-full overflow-hidden relative">
        <img 
          src={image} 
          alt={alt}
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
          loading="lazy"
        />
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Product label - appears on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <p className="paragraph-font text-white text-sm md:text-base font-semibold drop-shadow-lg">
            {alt}
          </p>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default ProductCard;
