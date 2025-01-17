import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageModal = ({ image, onClose, onNavigate }) => {
  return (
    <div className="fixed inset-0 bg-n-8 bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl w-full">
        <img 
          src={image.src} 
          alt={image.alt} 
          className="w-full h-auto max-h-[80vh] object-contain"
        />
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-n-1 hover:text-color-1 transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <button 
          onClick={() => onNavigate('prev')}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-n-1 hover:text-color-2 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={36} />
        </button>
        <button 
          onClick={() => onNavigate('next')}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-n-1 hover:text-color-2 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={36} />
        </button>
        <button
          onClick={onClose}
          className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-color-1 text-n-1 px-4 py-2 rounded-full hover:bg-color-2 transition-colors text-sm sm:text-base"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ImageModal;

