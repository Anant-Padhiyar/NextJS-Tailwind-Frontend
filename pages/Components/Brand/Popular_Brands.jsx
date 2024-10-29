import React from 'react'
import BrandsSlider from './BrandsSlider';
const Popular_Brands = () => {
    const Brands = [
        { icon: '/B4.png' },
        { icon: '/B5.png' },
        { icon: '/B6.png' },
        { icon: '/B7.png' },
        { icon: '/B8.png' },
        {icon:'/B1.png'},
        { icon: '/B2.png' },
        { icon: '/B3.png' }
      ];

      
  return (
<>

<div className='px-5 border-b-2 border-gray-300'>


<div className='my-5 text-gray-700 mt-5 pt-1' style={{borderColor:'red'}}>

<p className='text-3xl font-bold  mx-5 mb-4 pt-4'>Popular Brands</p>

<div className='pt-5'>

<BrandsSlider Brands={Brands} />
    
</div>

</div>

</div>

</>
  )
}

export default Popular_Brands