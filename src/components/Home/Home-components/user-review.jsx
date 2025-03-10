import React, { useState } from 'react';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function UserReview() {
  const reviews = [
    { name: 'Venkatesh', text: 'Excellent app with a fantastic UI! Even though the app is still in progressive mode, I must say it is getting better every day. It has an amazing user interface.' },
    { name: 'Sarthak', text: 'Bluestock app provides a user-friendly interface. The clean design and intuitive navigation enhance the overall experience.' },
    { name: 'Sakshi', text: 'Bluestock for chart learning & technical analysis has exceeded my expectations. The UI is well-designed, making it a breeze to navigate and learn charts.' },
    { name: 'Amit', text: 'A must-have app for traders! The insights and analytics provided are top-notch. Highly recommended for beginners and experts alike.' },
    { name: 'Priya', text: 'I love how intuitive and easy to use Bluestock is. It has helped me improve my trading strategies significantly.' },
    { name: 'Rahul', text: 'Bluestock’s market updates and technical analysis tools are outstanding. It’s my go-to app for staying ahead in trading.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 3 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
    <div className="flex flex-col items-center justify-center w-full max-w-5xl p-4 relative">
      <div className="w-full max-w-3xl mb-4">
        <h2 className="text-black font-bold text-2xl text-left">What do our users say?</h2>
        <div className="absolute top-0 right-0 flex space-x-2 mt-2">
          <button onClick={prevSlide} className="p-2 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white">
            <FaChevronLeft />
          </button>
          <button onClick={nextSlide} className="p-2 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white">
            <FaChevronRight />
          </button>
        </div>
      </div>
        <div className="flex overflow-hidden space-x-4 w-full max-w-3xl">
    {reviews.slice(currentIndex, currentIndex + 3).map((review, index) => (
        <div key={index} className="bg-white shadow-lg border border-gray-300 p-6 rounded-lg text-center flex-1 relative">
        <h3 className="text-black font-semibold text-lg flex justify-between items-center">
            {review.name}
            <FaQuoteRight className="text-blue-600 text-xl ml-auto" />
        </h3>
        <p className="text-gray-500 mt-2 text-sm md:text-base">{review.text}</p>
        </div>
    ))}
    </div>

    </div></div>
  );
}

export default UserReview;
