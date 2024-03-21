import React from 'react'

interface CardProps {
    imageUrl: string;
    mainHeading: string;
    subHeading: string;
    onClick: () => void;
}

// function OffersCards({ imageUrl, mainHeading, subHeading, buttonText, onClick }) {
const OffersCards:React.FC<CardProps> = ({ imageUrl, mainHeading, subHeading, onClick }) => {
  return (
    <div className="w-4/5 mx-auto bg-white rounded-md overflow-hidden shadow-lg">
    {/* Image */}
    <img
      className="w-full h-48 object-cover object-center"
      src={imageUrl}
      alt="Card Image"
    />

    {/* Content */}
    <div className="p-6">
      {/* Main Heading */}
      <h2 className="text-xl font-semibold mb-2">{mainHeading}</h2>

      {/* Sub-heading */}
      <p className="text-gray-600 mb-4">{subHeading}</p>

      {/* Button */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue"
        onClick={onClick}
      >
        Redeem
      </button>
    </div>
  </div>
  )
}

export default OffersCards