import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

const PropertyGallery: React.FC<PropertyGalleryProps> = ({ images, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Stop propagation to prevent closing the lightbox when clicking on the image
  const handleLightboxContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="md:col-span-2 aspect-[16/9] overflow-hidden rounded-lg cursor-pointer">
          <motion.img
            src={images[0]}
            alt={`${title} - Main View`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onClick={() => openLightbox(0)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        {images.slice(1, 5).map((image, index) => (
          <div 
            key={index + 1} 
            className="aspect-square overflow-hidden rounded-lg cursor-pointer relative group"
          >
            <motion.img
              src={image}
              alt={`${title} - View ${index + 2}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onClick={() => openLightbox(index + 1)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            {index === 3 && images.length > 5 && (
              <div 
                className="absolute inset-0 bg-secondary-900/60 flex items-center justify-center cursor-pointer"
                onClick={() => openLightbox(4)}
              >
                <span className="text-white text-xl font-medium">+{images.length - 5} more</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-secondary-950/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative w-full max-w-6xl max-h-full" onClick={handleLightboxContentClick}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src={images[currentImageIndex]}
                  alt={`${title} - Gallery View ${currentImageIndex + 1}`}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />

                <button
                  className="absolute top-4 right-4 bg-secondary-800/80 hover:bg-secondary-700 text-white p-2 rounded-full transition-colors duration-300"
                  onClick={closeLightbox}
                  aria-label="Close gallery"
                >
                  <X size={24} />
                </button>

                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-secondary-800/80 hover:bg-secondary-700 text-white p-3 rounded-full transition-colors duration-300"
                  onClick={handlePrev}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-secondary-800/80 hover:bg-secondary-700 text-white p-3 rounded-full transition-colors duration-300"
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </motion.div>

              <div className="text-center text-white mt-4">
                <p className="font-medium">{`${currentImageIndex + 1} / ${images.length}`}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PropertyGallery;