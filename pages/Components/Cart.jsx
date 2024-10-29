import React from 'react'
import { useState,useEffect} from 'react'
import { Button } from '@/components/ui/button'
import Navbar from './Navbar'
import Footer from './Footer'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Trash } from 'lucide-react';
import { Plus,Minus } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/router'
import Ring from '../Loading_Spinner/Ring'
import { ToastAction } from '@/components/ui/toast'
const Cart = () => {

  const router = useRouter();

  const { toast } = useToast()

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

      const [cart, setCart] = useState([]);
      const [loading, setLoading] = useState(true);

      // Load the cart on component mount
      useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
        setLoading(false);
      }, []);
    
      // Listen for changes to localStorage
      useEffect(() => {
        const handleStorageChange = () => {
          const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
          setCart(updatedCart);
          // console.log('Updated cart:', updatedCart); // Console log for debugging
        };
    
        window.addEventListener('storage', handleStorageChange);
    
        return () => window.removeEventListener('storage', handleStorageChange);
      }, []);
  
  // Function to update item quantity
  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Sync with localStorage
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Sync with localStorage
  };
      
    // console.log(cart)

    const QuantityControl = ({ quantity, onIncrease, onDecrease, onRemove }) => {
      return (
        <div className="bg-gray-200 rounded-xl flex items-center justify-center space-x-2">
          <button onClick={onDecrease} className="text-black px-2 py-1 rounded pb-2">-</button>
          <span className="font-bold pb-0.5">{quantity}</span>
          <button onClick={onIncrease} className="bg-green-00 text-black px-2 py-1 rounded pb-2">+
          </button>
        </div>
      );
    };

    const QuantityControl2 = ({ quantity, onIncrease, onDecrease, onRemove }) => {
      return (
        <div className="bg-gray-00 rounded-xl flex items-center justify-center space-x-3">
          <button onClick={onDecrease} className="text-black px-2 py-1 rounded bg-gray-100 hover:bg-gray-200">
<Minus className='text-black'/>
          </button>
          <span className="font-bold">{quantity}</span>
          <button onClick={onIncrease} className="text-black px-2 py-1 rounded bg-gray-100 hover:bg-gray-200">
          <Plus className='text-black'/>
          </button>
        </div>
      );
    };

const Order = () => {

const cart = JSON.parse(localStorage.getItem('cart')) || [];

if(cart.length>0){

localStorage.setItem('cart', JSON.stringify([]));
window.dispatchEvent(new Event('storage'));
router.push('/#');

toast({
title: `Ok Order Confirmed !`
});

}
else{
toast({
title: `Cart is Empty !`
}); 
}
}

const Coupon = () => {

  toast({
    variant: "destructive",
  title: `Error In Coupon Code !`,
  action: <ToastAction altText="Try again">Try again</ToastAction>,
  });
  
  }


  return (
<>
<Navbar categories={categories}/>

{/* <div className='mt-5 pt-5'>
<Ring height={100} width={100}/>
</div> */}

{loading ? (
        <div className="flex justify-center items-center mt-5 pt-5">
          <Ring height={100} width={100} />
        </div>
      ) : (
<>

<div>

{cart.length<1 ? (
<div className="text-center mt-14" style={{minHeight:'20vh'}}>
<p className='text-xl font-bold mb-10'>Your Cart is Empty!</p>
<Button className='mb-24' onClick={()=>router.push('/#')}>Continue Shopping</Button>

        </div>
      ) : (
<>

<div className='md:mx-5 md:px-5 lg:mx-5 lg:px-5'>

<div className='md:hidden'>
  <Table className='w-full border-collapse'>
    <TableHeader className='bg-teal-200 bg-opacity-30'>
      <TableRow>
        <TableHead className='w-1/4 text-center font-bold text-gray-700'>Product</TableHead>
        <TableHead className='w-1/4 text-center font-bold text-gray-700'>Price</TableHead>
        <TableHead className='w-1/4 text-center font-bold text-gray-700'>Quantity</TableHead>
        <TableHead className='w-1/4 text-center font-bold text-gray-700'>Subtotal</TableHead>
      </TableRow>
    </TableHeader>

    <TableBody>
      {cart.length > 0 ? cart.map((Product) => (
        <TableRow key={Product.id}>
          <TableCell 
            className="p-2" 
            style={{ maxWidth: '50%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'normal' }}
          >
            <div className='items-center'>
              <img className='w-16 h-16 mr-2' src={Product.image} alt="" />
              <span className='text-sm md:text-md font-bold'>{Product.title}</span>
            </div>
          </TableCell>
          <TableCell className='text-center font-bold text-sm'>₹{Product.price}</TableCell>
          <TableCell className='text-center font-bold text-sm'>
            <QuantityControl 
              quantity={Product.quantity} 
              onIncrease={() => updateQuantity(Product.id, Product.quantity + 1)}
              onDecrease={() => {
                if (Product.quantity > 1) {
                  updateQuantity(Product.id, Product.quantity - 1);
                } else {
                  removeItem(Product.id); // Remove item if quantity is 1
                }
              }}
              onRemove={() => removeItem(Product.id)} 
            />
          </TableCell>
          <TableCell className='text-center font-bold text-sm'>₹{(Product.price * Product.quantity).toFixed(2)}</TableCell>
        </TableRow>
      )) : (
        <TableRow>
          <TableCell colSpan={4} className="text-center font-bold">Your cart is empty</TableCell>
        </TableRow>
      )}
    </TableBody>

    <TableFooter>
      <TableRow>
        <TableCell colSpan={3} className="text-left font-bold">Total</TableCell>
        <TableCell className="text-right font-bold">
          ₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
        </TableCell>
      </TableRow>
    </TableFooter>
  </Table>
</div>

<div className='hidden md:block'>
  <Table className='mb-5'>
    <TableHeader className='bg-teal-200 bg-opacity-30'>
      <TableRow>
        <TableHead className='w-2/6 text-center font-bold text-gray-700 text-md lg:text-md'>PRODUCTS</TableHead>
        <TableHead className='w-1/6 text-center font-bold text-gray-700 text-md lg:text-md'>PRICE</TableHead>
        <TableHead className='w-1/6 text-center font-bold text-gray-700 text-md lg:text-md'>QUANTITY</TableHead>
        <TableHead className='w-1/6 text-center font-bold text-gray-700 text-md lg:text-md'>Shipping</TableHead>
        <TableHead className='w-1/6 text-center font-bold text-gray-700 text-md lg:text-md'>SUBTOTAL</TableHead>
        <TableHead className='w-1/6 text-center font-bold text-gray-700 text-md lg:text-md'>Action</TableHead>
      </TableRow>
    </TableHeader>

    <TableBody>
      {cart && cart.length > 0 ? cart.map((Product) => (
        <TableRow key={Product.id}>
          <TableCell className="font-medium p-2">
            <div className='space-x-2 pl-3'>
              <img className='w-20 h-auto' src={Product.image} alt="" />
              <div>
                <p className='font-bold text-md md:text-lg lg:text-xl'>{Product.title}</p>
              </div>
            </div>
          </TableCell>
          <TableCell className='text-center font-bold text-md md:text-lg lg:text-xl'>₹{Product.price}</TableCell>

          {/* Quantity control */}
          <TableCell className='text-center font-bold text-md md:text-lg lg:text-xl'>
            <QuantityControl2 
              quantity={Product.quantity}
              onIncrease={() => updateQuantity(Product.id, Product.quantity + 1)}
              onDecrease={() => {
                if (Product.quantity > 1) {
                  updateQuantity(Product.id, Product.quantity - 1);
                } else {
                  removeItem(Product.id); // Remove item if quantity is 1
                }
              }}
            />
          </TableCell>

          <TableCell className='text-center font-bold text-md md:text-lg lg:text-xl'>Free</TableCell>
          <TableCell className='text-center font-bold text-md md:text-lg lg:text-xl'>₹{(Product.price * Product.quantity).toFixed(2)}</TableCell>
          <TableCell className='text-center font-bold text-md md:text-lg lg:text-xl'>
            <Button onClick={() => removeItem(Product.id)} className='bg-gray-100 hover:bg-gray-200'>
              <Trash className='text-primary cursor-pointer' />
            </Button>
          </TableCell>
        </TableRow>
      )) : (
        <TableRow>
          <TableCell colSpan={6} className="text-center font-bold">Your cart is empty</TableCell>
        </TableRow>
      )}
    </TableBody>

    <TableFooter>
      <TableRow>
        <TableCell colSpan={4} className="text-right font-bold text-md md:text-lg lg:text-xl">Total</TableCell>
        <TableCell className="text-center font-bold text-md md:text-lg lg:text-xl">
          ₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
        </TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableFooter>
  </Table>
</div>

</div>
<div className='flex flex-col lg:flex-row w-full px-0 lg:px-0 border-2'>

  {/* Discount Codes */}
  <div className='bg-gray-100 w-full lg:w-3/5'>
  <div className='px-4 lg:px-10 py-4 pt-5'>
    <p className='font-bold text-md mb-0'>Discount Codes</p>
    <p className='mt-3'>Enter your coupon code if you have one</p>

    <div className='flex pt-3 my-4'>
      <input 
        type="text" 
        className='flex-grow py-2 px-3 border border-gray-300 rounded-l-md focus:outline-none focus:border-gray-400' 
        placeholder="Enter coupon code" style={{maxWidth:'200px'}}
      />
      <Button className='rounded-none bg-primary text-white px-4 py-2 rounded-r-md' onClick={()=>Coupon()}>
        Apply Coupon
      </Button>
    </div>

    <Button className='my-4 border-2 bg-white text-primary hover:bg-gray-200 active:bg-gray-300' onClick={() => router.push('/')}>
      Continue Shopping
    </Button>
  </div>
</div>


  {/* Checkout */}
  <div className='bg-teal-200 bg-opacity-30 w-full lg:w-2/5 px-6 lg:px-10 py-10'>
    <div className='space-y-5'>
      <div className='space-y-3'>
        <div className='flex justify-between'>
          <p>Sub Total</p>
          <p>RS. {cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</p>
        </div>

        <div className='flex justify-between'>
          <p>Shipping</p>
          <p>RS.00</p>
        </div>

        <hr />

        <div className='flex justify-between'>
          <p>Grand Total</p>
          <p>Rs. {cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</p>
        </div>
      </div>
      <hr />
    </div>
    <Button size='sm' className='bg-primary text-white w-full' onClick={()=>Order()}>Proceed to Checkout</Button>
  </div>

</div>
</>)}


</div>
</>
      )}


<Footer/>
</>
  )
}

export default Cart