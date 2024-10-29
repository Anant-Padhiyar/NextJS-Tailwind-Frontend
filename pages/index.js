import React from 'react';
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import Category from './Components/category/Catgory';
import FeaturedProducts from './Components/Featured-Products';
import Services from './Components/Services';
import Poster from './Components/Poster';
import Popular_Products from './Components/Popular-Products';
import Popular_Brands from './Components/Brand/Popular_Brands';
import Faq from './Components/FAQ/Faq';
import Footer from './Components/Footer';
import Reviews from './Components/Reviews';

export default function Home() {

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
  <>
<Navbar categories={categories}/>
<Hero/>
<Category/>
<FeaturedProducts/>
<Services/>
<Poster/>
<Popular_Products/>
<Popular_Brands/>
<Faq/>
<Reviews/>
<Footer/> 
  </>
  );
}
