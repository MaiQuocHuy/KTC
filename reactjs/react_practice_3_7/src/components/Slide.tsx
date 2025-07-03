import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slide = () => {
  // implement logic to change image when click left and right or click images below
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1742853288141-b95880a1c5ea?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1750500612707-8cdf69be6947?q=80&w=1187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1743385779534-f53c018c21f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1750852205683-5be275439ef9?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1744018195961-ccccbca598f8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const handlePrevious = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };
  const handleNext = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        {/* Change to image random */}
        <img src={images[currentImage]} alt="slide" />
        {/* add icon left and right to change image */}
        <div className="flex items-center gap-4">
          <button
            className="text-lg absolute -left-16 top-1/2 -translate-y-1/2 cursor-pointer hover:text-gray-400 bg-gray-500 py-3 px-2"
            onClick={handlePrevious}
          >
            <FaArrowLeft className="text-white" />
          </button>

          <button
            className="text-lg absolute -right-16 top-1/2 -translate-y-1/2 cursor-pointer hover:text-gray-400 bg-gray-500 py-3 px-2"
            onClick={handleNext}
          >
            <FaArrowRight className="text-white" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-20 h-20 cursor-pointer"
            onClick={() => setCurrentImage(index)}
          >
            <img src={image} alt="slide" />
          </div>
        ))}
      </div>
    </div>
  );
  {
    /* </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1743385779534-f53c018c21f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="slide"
          />
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1750852205683-5be275439ef9?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="slide"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1744018195961-ccccbca598f8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="slide"
          />
        </div>
      </div> */
  }
};

export default Slide;
