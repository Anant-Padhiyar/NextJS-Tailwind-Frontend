import React from 'react'

const Services = () => {
  return (
<>
<section id='Services'>
<div className="px-0 text-gray-800"> 
  <div className="mt-5 mb-4 flex justify-center text-center px-3 md:px-5 lg:px-5 lg:mx-5">
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 w-full max-w-7xl">
      
      <div className="flex items-center rounded-md px-3 py-3 w-full md:w-auto bg-white ">
        <div className="mr-3">
          <img src="/truck.png" alt="Money Guarantee Icon" className="w-12 h-12" />
        </div>
        <div className="text-center md:text-left">
          <p className="pt-2 text-md font-bold">Money Guarantee</p>
          <p className="text-sm">Above all Orders over 200rs.</p>
        </div>
      </div>

      <div className="flex items-center border-l-0 md:border-l-2 border-gray-300 px-3 py-3 w-full md:w-auto bg-white ">
        <div className="mr-3">
          <img src="/indian-rupee.png" alt="1 Million+ Icon" className="w-12 h-12" />
        </div>
        <div className="text-center md:text-left">
          <p className="pt-2 text-md font-bold">1 Million+</p>
          <p className="text-sm">45 Days for Exchange</p>
        </div>
      </div>

      <div className="flex items-center border-l-0 md:border-l-2 border-gray-300 px-3 py-3 w-full md:w-auto bg-white ">
        <div className="mr-3">
          <img src="/headphones.png" alt="Online Support Icon" className="w-12 h-12" />
        </div>
        <div className="text-center md:text-left">
          <p className="pt-2 text-md font-bold">Online Support</p>
          <p className="text-sm">24/7 Customer Care</p>
        </div>
      </div>

      <div className="flex items-center border-l-0 md:border-l-2 border-gray-300 px-3 py-3 w-full md:w-auto bg-white ">
        <div className="mr-3">
          <img src="/credit-card.png" alt="Flexible Payment Icon" className="w-12 h-12" />
        </div>
        <div className="text-center md:text-left">
          <p className="pt-2 text-md font-bold">Flexible Payment</p>
          <p className="text-sm">Pay with multiple Credit Cards</p>
        </div>
      </div>

    </div>
  </div>
</div>
</section>
</>
  )
}

export default Services