import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/components/ui/button';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash } from 'lucide-react';
import { Plus, Minus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/router';
import Ring from '../Loading_Spinner/Ring';
import { addItem, removeItem, updateQuantity, clearCart } from '@/store/cartSlice';
import { ToastAction } from '@/components/ui/toast';
const Cart = () => {
  const router = useRouter();
  const { toast } = useToast();

  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(true);

  // Load cart on component mount (not needed now since Redux handles it)
  useEffect(() => {
    setLoading(false);
  }, []);

  // Function to update item quantity
  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch(removeItem({ id })); // Remove item if quantity is 0 or less
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleOrder = () => {
    if (cart.length > 0) {
      dispatch(clearCart());
      router.push('/#');
      toast({ title: 'Ok Order Confirmed!' });
    } else {
      toast({ title: 'Cart is Empty!' });
    }
  };

  const handleCoupon = () => {
    toast({
      variant: "destructive",
      title: "Error In Coupon Code!",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-5 pt-5">
        <Ring height={100} width={100} />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div>
        {cart.length < 1 ? (
          <div className="text-center mt-14" style={{ minHeight: '20vh' }}>
            <p className='text-xl font-bold mb-10'>Your Cart is Empty!</p>
            <Button className='mb-24' onClick={() => router.push('/#')}>Continue Shopping</Button>
          </div>
        ) : (
          <>
            <div className='md:mx-5 md:px-5 lg:mx-5 lg:px-5'>
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
                  {cart.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium p-2">
                        <div className='space-x-2 pl-3'>
                          <img className='w-20 h-auto' src={product.image} alt="" />
                          <div>
                            <p className='font-bold text-md md:text-lg lg:text-xl'>{product.title}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className='text-center font-bold text-md md:text-lg lg:text-xl'>₹{product.price}</TableCell>
                      <TableCell className='text-center font-bold text-md md:text-lg lg:text-xl'>
                        <div className="bg-gray-00 rounded-xl flex items-center justify-center space-x-3">
                          <button onClick={() => handleUpdateQuantity(product.id, product.quantity - 1)} className="text-black px-2 py-1 rounded bg-gray-100 hover:bg-gray-200">
                            <Minus className='text-black' />
                          </button>
                          <span className="font-bold">{product.quantity}</span>
                          <button onClick={() => handleUpdateQuantity(product.id, product.quantity + 1)} className="text-black px-2 py-1 rounded bg-gray-100 hover:bg-gray-200">
                            <Plus className='text-black' />
                          </button>
                        </div>
                      </TableCell>
                      <TableCell className='text-center font-bold text-md md:text-lg lg:text-xl'>Free</TableCell>
                      <TableCell className='text-center font-bold text-md md:text-lg lg:text-xl'>₹{(product.price * product.quantity).toFixed(2)}</TableCell>
                      <TableCell className='text-center font-bold text-md md:text-lg lg:text-xl'>
                        <Button onClick={() => handleRemoveItem(product.id)} className='bg-gray-100 hover:bg-gray-200'>
                          <Trash className='text-primary cursor-pointer' />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
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
            <div className='flex flex-col lg:flex-row w-full px-0 lg:px-0 border-2'>
              <div className='bg-gray-100 w-full lg:w-3/5'>
                <div className='px-4 lg:px-10 py-4 pt-5'>
                  <p className='font-bold text-md mb-0'>Discount Codes</p>
                  <p className='mt-3'>Enter your coupon code if you have one</p>
                  <div className='flex pt-3 my-4'>
                    <input
                      type="text"
                      className='flex-grow py-2 px-3 border border-gray-300 rounded-l-md focus:outline-none focus:border-gray-400'
                      placeholder="Enter coupon code" style={{ maxWidth: '200px' }}
                    />
                    <Button className='rounded-none bg-primary text-white px-4 py-2 rounded-r-md' onClick={handleCoupon}>
                      Apply Coupon
                    </Button>
                  </div>
                  <Button className='my-4 border-2 bg-white text-primary hover:bg-gray-200 active:bg-gray-300' onClick={() => router.push('/')}>
                    Continue Shopping
                  </Button>
                </div>
              </div>

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
                <Button size='sm' className='bg-primary text-white w-full' onClick={handleOrder}>Proceed to Checkout</Button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
