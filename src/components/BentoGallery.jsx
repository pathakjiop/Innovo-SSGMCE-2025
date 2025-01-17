import React, { useState } from 'react';
import GalleryItem from './design/GalleryItem';
import ImageModal from './design/ImageModal';
import { hackathonimg } from '../assets';
import { curve, curve1, curve2 } from '../assets';
import photo1 from '../assets/innovo-gallary/photo1.jpeg';
import photo2 from '../assets/innovo-gallary/photo2.jpeg';
import photo3 from '../assets/innovo-gallary/photo3.jpeg';
import photo4 from '../assets/innovo-gallary/photo4.jpeg';
import photo5 from '../assets/innovo-gallary/photo5.jpeg';

const galleryItems = [
    { id: 1, src: photo1, alt: 'Innovo Image 1', size: 'md:col-span-2 md:row-span-2' },
    { id: 2, src: photo2, alt: 'Innovo Image 2', size: 'md:col-span-1 md:row-span-2' },
    { id: 3, src: photo3, alt: 'Innovo Image 3', size: 'md:col-span-1 md:row-span-1' },
    { id: 4, src: photo4, alt: 'Innovo Image 4', size: 'md:col-span-1 md:row-span-1' },
    { id: 5, src: photo5, alt: 'Innovo Image 5', size: 'md:col-span-1 md:row-span-1' },
  ];
  
  const BentoGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const openModal = (id) => setSelectedImage(id);
    const closeModal = () => setSelectedImage(null);
  
    const navigateImage = (direction) => {
      if (selectedImage === null) return;
      const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
      const newIndex = direction === 'prev' 
        ? (currentIndex - 1 + galleryItems.length) % galleryItems.length 
        : (currentIndex + 1) % galleryItems.length;
      setSelectedImage(galleryItems[newIndex].id);
    };
  
    return (
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="lg:text-6xl text-center text-5xl mb-5">
                    <span className="inline-block relative mb-10">
                      Innovo Gallary{" "}
                      <img
                        src={curve}
                        className="absolute top-full left-0 w-full xl:-mt-2"
                        width={624}
                        height={28}
                        alt="Curve"
                      />
                    </span>
                  </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-md">
            {galleryItems.map(item => (
              <GalleryItem 
                key={item.id} 
                item={{...item, size: `${item.size} col-span-1`}} 
                onClick={() => openModal(item.id)} 
              />
            ))}
          </div>
          {selectedImage !== null && (
            <ImageModal 
              image={galleryItems.find(item => item.id === selectedImage)}
              onClose={closeModal}
              onNavigate={navigateImage}
            />
          )}
        </div>
      </section>
    );
  };
  
  export default BentoGallery;
