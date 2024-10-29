import React from 'react';
import CategorySlider from './CategorySlider';

const Category = () => {

  const categories = [
    { name: 'Men', icon: '/1.png' },
    { name: 'Women', icon: '/2.png' },
    { name: 'Children', icon: '/3.png' },
    { name: 'Cosmetics', icon: '/4.png' },
    { name: 'Accessories', icon: '/5.png' },
    { name: 'Home', icon: '/6.png' },
    { name: 'Footwear', icon: '/7.png' },
    { name: 'Sports', icon: '/8.png' },
  ];

  return (
    <section id="Category">
      <div className='mt-5 mb-4 flex justify-center text-center px-3 md:px-5 lg:px-5 lg:mx-5'>
        <div className='flex space-x-4 w-full max-w-7xl'>
          <div className='flex-1 bg-gray-100 rounded-md px-3 py-3'>
            <p className='text-2xl font-bold text-gray-700'>95%</p>
            <p>Happy Customer</p>
          </div>

          <div className='flex-1 bg-gray-100 rounded-md px-3 py-3'>
            <p className='text-2xl font-bold text-gray-700'>1 Million+</p>
            <p>Yearly Sale</p>
          </div>

          <div className='flex-1 bg-gray-100 rounded-md px-3 py-3'>
            <p className='text-2xl font-bold text-gray-700'>20K+</p>
            <p>Customer Rating</p>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className='px-5'>
        <div className='my-5 text-gray-700 mt-5 pt-1'>
          <p className='text-3xl font-bold mx-5 mb-4 pt-4'>Category</p>
          {categories.length > 0 ? (
            <CategorySlider categories={categories} />
          ) : (
            <p className='text-center'>No categories available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Category;
