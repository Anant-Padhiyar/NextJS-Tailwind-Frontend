import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/router'
const Hero = () => {

  const router = useRouter();
  return (
<>
<section id="Home">
<div className='flex flex-col md:flex-row items-center justify-between bg-gray-100 border-b-2 border-t border-gray-300'>
  <div className='text-gray-700 md:w-1/2 p-6 bg-gray-100 lg:mx-5'>
    <p className='text-5xl font-bold mb-4'>Lorem ipsum dolor</p>
    <p className='text-sm pt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde id, vitae repudiandae ducimus corporis quasi repellat itaque illum. Id odit aut molestias laboriosam, inventore ratione voluptatum dolor? Ratione, molestiae enim!</p>
    <div className='text-center mt-4 pt-8 flex flex-col md:flex-row md:space-x-8 lg:space-x-12'>
  <Button 
    size='sm' 
    variant='outline' 
    className='border-primary text-primary hover:text-primary text-md px-10 lg:px-16 mb-4 md:mb-0'
    onClick={()=>router.push('/#Explore')}
  >
    Explore
  </Button>
  <Button 
    size='sm' 
    className='bg-primary text-md px-10 lg:px-16'
    onClick={()=>router.push('/#Explore')}
  >
    Buy Now
  </Button>
</div>




  </div>

  <div className='md:mt-0 md:w-2/5'>
    <img src="/Home.png" alt="Home" className='w-full h-auto' />
  </div>

</div>
</section>
</>
  )
}

export default Hero