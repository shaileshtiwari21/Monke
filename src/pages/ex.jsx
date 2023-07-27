import React, { useState } from 'react';

const ImageGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleFooterImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
  ];

  return (
    <div>
      <div className="grid grid-cols-5 gap-4 mb-8">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`w-full h-20 cursor-pointer ${
              selectedImageIndex === index ? 'opacity-50' : 'opacity-100'
            }`}
            onClick={() => handleFooterImageClick(index)}
          />
        ))}
      </div>
      <div className="main-image-container">
        {selectedImageIndex !== null && (
          <img
            src={images[selectedImageIndex]}
            alt={`Image ${selectedImageIndex + 1}`}
            className="w-full"
          />
        )}
      </div>
    </div>
  );
};

export default ImageGallery;