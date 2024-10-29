import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const reviews = [
  { id: 1, image: '/C1.png', name: 'John Doe', rating: 4.1, review: 'Lorem ipsum dolor sit amet.' },
  { id: 2, image: '/C2.png', name: 'Jane Smith', rating: 3.6, review: 'Lorem ipsum dolor sit amet.' },
  { id: 3, image: '/C3.png', name: 'Alex Brown', rating: 5.0, review: 'Lorem ipsum dolor sit amet.' },
  { id: 4, image: '/C3.png', name: 'Chris Green', rating: 4.3, review: 'Lorem ipsum dolor sit amet.' },
  { id: 5, image: '/C1.png', name: 'Emily White', rating: 3.9, review: 'Lorem ipsum dolor sit amet.' },
  { id: 6, image: '/C2.png', name: 'Michael Black', rating: 4.5, review: 'Lorem ipsum dolor sit amet.' },
  { id: 7, image: '/C2.png', name: 'Sara Blue', rating: 4.7, review: 'Lorem ipsum dolor sit amet.' },
  { id: 8, image: '/C1.png', name: 'Daniel Gold', rating: 3.8, review: 'Lorem ipsum dolor sit amet.' },
  { id: 9, image: '/C3.png', name: 'Laura Silver', rating: 4.2, review: 'Lorem ipsum dolor sit amet.' },
];

const Review = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus obcaecati in aut, corporis qui sequi doloremque hic dolore iure officia!';


const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (i < rating) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
  }
  return stars;
};

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  return (
<section id='Reviews'>
<div className='px-5 border-b-2 border-gray-300'>


<div className='my-5 text-gray-700 mt-5 pt-1' style={{borderColor:'red'}}>

<p className='text-3xl font-bold  mx-5 mb-5 pb-4 pt-2'>Customers Review</p>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentReviews.map((review) => (
            <div key={review.id} className="border-2 p-4 rounded-lg flex flex-col space-y-3">
              <div className="flex items-center space-x-4">
                <img src={review.image} alt={review.name} className="w-16 h-16 rounded-sm" />
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">{review.name}</p>
                  <div className="flex items-center">
                    {renderStars(review.rating)}
                    <span className="text-gray-600 ml-2">{review.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{Review}</p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8 pt-1 pb-5">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              className={`h-3 w-3 rounded-full ${index + 1 === currentPage ? 'bg-teal-500' : 'bg-gray-300'}`}
            ></button>
          ))}
        </div>

      </div>
</div>
</section>
  );
};

export default Reviews;


