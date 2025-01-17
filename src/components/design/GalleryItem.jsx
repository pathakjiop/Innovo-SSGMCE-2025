import React from 'react';

const GalleryItem = ({ item, onClick }) => {
  return (
    <div 
      className={`${item.size} overflow-hidden border border-gray-700 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105`}
      onClick={onClick}
    >
      <img 
        src={item.src} 
        alt={item.alt} 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default GalleryItem;

