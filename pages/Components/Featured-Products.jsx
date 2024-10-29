import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { useRouter } from 'next/router';
const Featured_Products = () => {

const router = useRouter();

  const { toast } = useToast()
 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const [showAll, setShowAll] = useState(false);

  // Fetch initial 4 products when the component mounts
  useEffect(() => {
    const fetchInitialProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://fakestoreapi.com/products?limit=4');
        const initialProducts = await res.json();
        setProducts(initialProducts);
      } catch (error) {
        console.error("Error fetching initial products:", error);
      }
      setLoading(false);
    };

    fetchInitialProducts();
  }, []);

  // Function to fetch all 20 products or show only the first 4
  const toggleProducts = async () => {
    if (showAll) {
      // Show only the first 4 products
      const res = await fetch('https://fakestoreapi.com/products?limit=4');
      const initialProducts = await res.json();
      setProducts(initialProducts);
      setShowAll(false);
    } else {
      // Fetch all 20 products
      setLoading(true);
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const allProducts = await res.json();
        setProducts(allProducts);
        setShowAll(true);
      } catch (error) {
        console.error("Error fetching all products:", error);
      }
      setLoading(false);
    }
  };

  // Handler to update loadedImages state when each image loads
  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
  
    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Trigger a manual 'storage' event
    window.dispatchEvent(new Event('storage'));
  
    // Show the toast notification (optional)
    toast({
      title: `${product.title} added to cart!`,
      action: (
        <ToastAction
          altText="Undo"
          className="ring-2 ring-black text-black hover:text-primary focus:text-primary active:text-primary focus:outline-none hover:ring-primary focus:ring-primary active:ring-primary"
          onClick={() => router.push('/Components/Cart')}
        >
          View Cart
        </ToastAction>
      ),
    });
  };
  

  return (
<section id="Explore">
<div className="bg-gray-100 px-5 text-gray-800 border-b-2 border-t-2 border-gray-300">
      <div className="border-0 pb-6 pt-6 px-0 lg:px-5 flex items-center justify-between mx-5" style={{ borderColor: 'red' }}>
        <p className="text-left text-2xl lg:text-3xl font-bold text-gray-800">Featured Products</p>

        <Button className="hidden lg:block text-right px-5 lg:px-16" onClick={toggleProducts}>
          {showAll ? "View Less" : "View All"}
        </Button>

        <Button size='sm' className="block lg:hidden text-right px-7 lg:px-16" onClick={toggleProducts}>
          {showAll ? "View Less" : "View All"}
        </Button>
      </div>

      <div className='border-0' style={{ borderColor:'red' }}>
  <div className="border-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-1 md:px-2 lg:px-5 pb-5" style={{borderColor:'red'}}>
    {products.map((product, index) => (
      <div key={product.id} className="bg-white rounded-lg shadow-lg px-5 py-5 relative">
        <div
          className={`w-full h-64 rounded-md overflow-hidden relative ${
            loadedImages[product.id] ? '' : 'animate-pulse bg-gray-300'
          }`} 
          style={{ height: '200px' }} // Adjust height as needed
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain transition-all duration-300 ease-in-out"
            onLoad={() => handleImageLoad(product.id)}
          />
          <div className="absolute top-2 right-2 border-2 rounded-full bg-white" style={{ borderColor: '#9ca3af' }}>
            <button className="my-3 mx-3 text-gray-400 focus:text-red-500 hover:text-red-500 rounded-full">
              <Heart />
            </button>
          </div>
        </div>

        <div className='space-y-2 mt-2'>
          <p className='text-sm font-bold'>{product.title}</p>
          <p className="text-gray-600 text-sm">
            {product.description.length > 25
              ? `${product.description.slice(0, 25)}...`
              : product.description}
          </p>
          <p className="text-sm text-gray-900 font-bold mt-2">
            ${product.price.toFixed(2)}{' '}
            <span className="line-through text-gray-500">
              ${(product.price * 1.81).toFixed(2)}
            </span>
            <span className="text-red-500"> - 81% off</span>
          </p>
        </div>

        <div className="text-center mt-4">
          <Button className="w-full text-md" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </div>
      </div>
    ))}
    {loading && (
      <div className="col-span-full text-center text-gray-500">Loading...</div>
    )}
  </div>
</div>


    </div>
    </section>
  );
};

export default Featured_Products;
