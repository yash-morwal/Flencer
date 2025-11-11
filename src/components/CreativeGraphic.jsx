import React from 'react';

const CreativeGraphic = () => {
  return (
    <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
      {/* Decorative Elements (also make them responsive) */}
      <div className="absolute top-[15%] left-[15%] w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-green-500 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute top-[55%] left-[5%] w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-green-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-[15%] right-[15%] w-2 h-2 md:w-4 md:h-4 lg:w-5 lg:h-5 bg-green-600 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-[25%] right-[10%] text-lg md:text-xl lg:text-2xl text-green-500 opacity-50 transform rotate-12">+</div>
      <div className="absolute bottom-[25%] left-[10%] text-xl md:text-2xl lg:text-3xl text-green-400 opacity-40 transform -rotate-45">+</div>

      {/* Single Empty Card */}
      <div className="absolute top-1/2 left-1/2 w-64 h-48 bg-green-500/50 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-lg shadow-white/20 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white text-lg">
        {/* Empty Card */}
      </div>

      {/* Card 1: Ape Drink */}
      {/*
      <div className="absolute top-4 left-2 w-36 sm:w-48 md:w-56 lg:w-64 bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-lg shadow-white/20 p-2 md:p-3 animate-fade-in-up z-20 transform -rotate-3">
        <img src="/images/ape-drink.jpg" alt="Ape Drink Ad" className="w-full h-20 sm:h-28 md:h-36 lg:h-44 object-cover rounded-xl mb-2" />
        <h3 className="font-bold text-white text-xs sm:text-sm md:text-md">Jungle Boost</h3>
      </div>
      */}

      {/* Card 2: Burger */}
      {/*
      <div className="absolute bottom-4 right-2 w-40 sm:w-52 md:w-64 lg:w-80 bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-lg shadow-white/20 p-2 md:p-3 animate-fade-in-up z-10 transform rotate-3">
        <img src="/images/burger.jpg" alt="Burger Ad" className="w-full h-24 sm:h-32 md:h-48 lg:h-60 object-cover rounded-xl mb-2" />
        <h3 className="font-bold text-white text-sm sm:text-md md:text-lg">Urban Bite</h3>
      </div>
      */}
      
      {/* Card 3: Watch */}
      {/*
      <div className="absolute top-1/2 left-1/2 w-32 sm:w-36 md:w-40 lg:w-44 bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-lg shadow-white/20 p-2 md:p-3 animate-fade-in-up z-30 transform -translate-x-1/2 -translate-y-1/2 -rotate-1">
        <img src="/images/watch.jpg" alt="Watch Ad" className="w-full h-16 sm:h-20 md:h-24 lg:h-28 object-cover rounded-xl mb-2" />
        <h3 className="font-bold text-white text-xs sm:text-sm md:text-md">Timeless</h3>
      </div>
      */}
    </div>
  );
};

export default CreativeGraphic;
