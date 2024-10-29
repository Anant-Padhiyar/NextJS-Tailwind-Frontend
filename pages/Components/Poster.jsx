import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/router'

const Poster = () => {
  const router = useRouter();
  return (
    <>

<div className="relative px-3 lg:px-16 py-5 lg:py-10 border-b-2 border-t-2 border-gray-300">
    <div
      className="relative flex flex-col items-center lg:items-start justify-center mx-auto max-w-5xl bg-cover bg-center rounded-xl"
      style={{ backgroundImage: 'url(/Poster-bg.png)' }}  // Set the background image
    >
      <div className="rounded-xl relative flex flex-col lg:flex-row items-center lg:items-start justify-between px-3 lg:px-10" style={{ borderColor: 'red', minHeight: '60vh' }}>
  
        <div className="hidden lg:block border-0 lg:w-1/2 flex flex-col justify-center text-left text-white lg:pb-10 space-y-6 pt-10">
          <p className="text-lg lg:text-5xl font-bold">Lorem ipsum dolor sit.</p>
          <p className="text-xs mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptate similique alias, quae nostrum perspiciatis aut officiis porro, expedita tenetur rem molestiae maxime unde ut nisi. Dicta quos atque ipsa, repellat adipisci totam tempora aperiam assumenda voluptates labore odit cum porro ratione deserunt inventore maxime. Quibusdam laboriosam eum animi perferendis!
          </p>
  
          <Button size='' className="px-24 w-24 lg:w-32 mt-4 bg-white hover:bg-gray-200 active:bg-gray-300 text-primary" onClick={()=>router.push('/#Popular')}>Buy Now</Button>
        </div>
  
        <div className="hiddlen lg:visible flex flex-col lg:flex-row lg:w-1/2 justify-between mt-5 lg:mt-0 border-0" style={{ height: '100%' ,borderColor:'red'}}>
      <img className='hidden lg:flex' src="/Modals.png" alt="" />
      <img className='hidden lg:flex h-24 w-24 mt-24' src="/Discount.png" alt="Discount" />
  
          {/* Mobile view for Modals and Discount images */}
  
          <div className="lg:hidden flex flex-col items-center">
    <div className="text-white space-y-4 p-4 pb-6">
      <p className="text-5xl font-bold">Lorem ipsum dolor sit.</p>
      <p className="text-md mt-2 pb-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptate similique alias, quae nostrum perspiciatis aut officiis porro, expedita tenetur rem molestiae maxime unde ut nisi. Dicta quos atque ipsa, repellat adipisci totam tempora aperiam assumenda voluptates labore odit cum porro ratione deserunt inventore maxime. Quibusdam laboriosam eum animi perferendis!
      </p>
      <Button size='' className="px-24 w-24 lg:w-32 mt-4 bg-white hover:bg-gray-200 active:bg-gray-300 text-primary">Buy Now</Button>
    </div>
  
  
  <div className='flex'>
  
  <img src="/Modals.png" className='w-60 h-auto' alt="Modal" />
      
  <img src="/Discount.png" className='w-16 h-16' alt="" />
  
  </div>
  
  </div>
  
  
  {/*End Mobile*/}
        </div>
        
      </div>
    </div>
  </div>
  
  </>
  )
}

export default Poster