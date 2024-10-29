import React from 'react';

const CategorySlider = () => {

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
    <div className='mx-5'>
      <div style={{ display: 'flex', overflowX: 'auto', padding: '10px', background: 'white' }}>
        {categories.map((category, index) => (
          <div 
            key={index} 
            style={{
              height: '95px',
              width: '100px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginRight: '20px',
              textAlign: 'center',
              flexShrink: 0,
            }}
          >
            <img
              src={category.icon}
              alt={category.name}
              width="60"
              height="60"
              style={{
                borderRadius: '30px',
                background: '#94A3B8',
                objectFit: 'cover',
                maxWidth: '100%',
              }}
            />
            <span style={{ marginTop: '5px', color: '#333', fontWeight: 'bold', fontSize: '14px' }}>
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
