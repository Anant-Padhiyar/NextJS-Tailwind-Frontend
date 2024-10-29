import React from 'react'
import { useRouter } from 'next/router'

const Footer = ({}) => {
const router = useRouter();
return (
<>
<section id="Contact">
<div className='pt-4 lg:px-5 text-white bg-gray-900'>
<div className='mt-2 flex items-center mx-5 px-3 lg:px-5 cursor-pointer' onClick={()=>router.push('/#')}>
  <img src="/Logo1.png" alt="Company Logo" className="mr-5" />
</div>


  <div className='mx-5 space-y-4 lg:px-5 md:flex md:flex-wrap md:-mx-2'>

    {/* Contact Section */}
    <div className='flex-1 sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/5 p-2'>
      {/* <img src="/Logo1.png" alt="Company Logo" className="mx-auto mb-5" /> */}
      <div className='mt-5 space-y-5' style={{ maxWidth: '225px' }}>
        <p className='text-primary font-bold cursor-pointer' onClick={()=>('/#Contact')}>Contact Us</p>
        <p>Email: support@example.com</p>
        <p>Phone: +91 12345 67890</p>
        <p>We’re here to assist you with any questions or concerns you may have. Don’t hesitate to reach out!</p>
        <div className='flex space-x-3 mt-5 justify-center'>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
  <img src="/Facebook.png" alt="Follow us on Facebook" className="w-6 h-6 cursor-pointer" />
</a>
<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
  <img src="/Linkedin.png" alt="Connect with us on LinkedIn" className="w-6 h-6 cursor-pointer" />
</a>
<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
  <img src="/Twitter.png" alt="Follow us on Twitter" className="w-6 h-6 cursor-pointer" />
</a>
<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
  <img src="/Instagram.png" alt="Follow us on Instagram" className="w-6 h-6 cursor-pointer" />
</a>

        </div>
      </div>
    </div>

    {/* Product Links Section */}
    <div className='flex-1 sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/5 p-2'>
      <p className='text-primary font-bold mb-5 pb-1 cursor-pointer' onClick={()=>router.push('/#Explore')}>Product Links</p>
      <ul className='space-y-5'>
        <li><a href="/#Explore" className="text-gray-400 hover:text-white">Product A</a></li>
        <li><a href="/#Explore" className="text-gray-400 hover:text-white">Product B</a></li>
        <li><a href="/#Explore" className="text-gray-400 hover:text-white">Product C</a></li>
        <li><a href="/#Explore" className="text-gray-400 hover:text-white">Product D</a></li>
        <li><a href="/#Explore" className="text-gray-400 hover:text-white">Product E</a></li>
      </ul>
    </div>

    {/* Quick Links Section */}
    <div className='flex-1 sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/5 p-2'>
      <p className='text-primary font-bold mb-5 pb-1 cursor-pointer' onClick={()=>router.push('/')}>Quick Links</p>
      <ul className='space-y-5'>
        <li><a href="/#Contact" className="text-gray-400 hover:text-white">About Us</a></li>
        <li><a href="/#Services" className="text-gray-400 hover:text-white">Our Services</a></li>
        <li><a href="/#FAQ" className="text-gray-400 hover:text-white">FAQ</a></li>
        <li><a href="/#FAQ" className="text-gray-400 hover:text-white">Testimonials</a></li>
        <li><a href="/#Contact" className="text-gray-400 hover:text-white">Contact Support</a></li>
      </ul>
    </div>

    {/* Legal Links Section */}
    <div className='flex-1 sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/5 p-2'>
      <p className='text-primary font-bold mb-5 pb-1 cursor-pointer' onClick={()=>router.push('/')}>Legal Links</p>
      <ul className='space-y-5'>
        <li><a href="/#Services" className="text-gray-400 hover:text-white">Terms of Service</a></li>
        <li><a href="/#Contact" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
        <li><a href="/#Contact" className="text-gray-400 hover:text-white">Disclaimer</a></li>
        <li><a href="/#Contact" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
        <li><a href="/#Contact" className="text-gray-400 hover:text-white">Return Policy</a></li>
      </ul>
    </div>

    {/* App Section */}
    <div className='flex-1 sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/5 p-2'>
      <p className='text-primary font-bold mb-5 pb-1 cursor-pointer' onClick={()=>router.push('/#Contact')}>Get the APP</p>
      <div className='space-y-5 mt-4'>
  <div>


  <a href="https://apps.apple.com/app" target="_blank" rel="noopener noreferrer">
    <img src="/App-Store.png" alt="Download on the App Store" className="mx-auto" />
  </a>
  </div>
  <div>
  <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
    <img src="/Play-Store.png" alt="Get it on Google Play" className="mx-auto" />
  </a>
  </div>
</div>

    </div>
  </div>

  <p className='mt-3 text-gray-400 text-center'>Copyright © 2024. All rights reserved.</p>
  <p className='mt-1 pb-8 text-gray-400 text-center'>
            Designed & Developed By  
            <a 
              href="https://anant-padhiyar-portfolio.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{color:'#eab308'}}
              className='ml-2'
            >
               Anant Padhiyar
            </a>
          </p>
</div>
</section>





</>
  )
}

export default Footer