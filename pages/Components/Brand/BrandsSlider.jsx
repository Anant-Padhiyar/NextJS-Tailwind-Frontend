import React from 'react';

const BrandsSlider = ({ Brands = [] }) => { // Default to an empty array if Brands is undefined
  return (
    <div className='mx-5'>
      <div style={{ display: 'flex', overflowX: 'auto', padding: '10px', background: 'white' }}>
        {Brands.length === 0 ? ( // Check if the Brands array is empty
          <div>No brands available</div> // Fallback UI
        ) : (
          Brands.map((Brand, index) => (
            <div 
              key={index} 
              style={{
                height: '125px',
                width: '100px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: '20px',
                textAlign: 'center',
                flexShrink: 0, // Prevents the item from shrinking
              }}
            >
              <img
                src={Brand.icon} // Using the icon property
                alt={Brand.name} // Fixed: Correctly reference Brand.name
                width="200"
                height="200"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BrandsSlider;
