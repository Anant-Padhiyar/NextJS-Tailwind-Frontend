import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, UserCircle, Search, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux'; // Import useSelector for accessing Redux state


const Navbar = ({ categories = [] }) => {
  const router = useRouter();
  const currentPath = router.asPath;

  const [isOpen, setIsOpen] = useState(false);
  const [isPC, setIsPC] = useState('PC');

  useEffect(() => {
    const checkDeviceType = () => {
      setIsPC(/Android|iPhone/i.test(navigator.userAgent) ? 'Mobile' : 'PC');
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);

    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  const cart = useSelector((state) => state.cart.items);
  
  // Calculate total item count from the cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  const productCount = cart.length;

  const NavItems = ({ onClick }) => (
    <div className="text-md lg:text-xs font-bold flex flex-col md:flex-row md:space-x-3 lg:mr-8 space-y-4 md:space-y-0">
      <Link href="/" className="flex items-center space-x-2 hover:text-primary active:text-primary mx-4 lg:mx-4" onClick={onClick}>
        <span>Home</span>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <p className="flex items-center space-x-2 hover:text-primary active:text-primary mx-4 lg:mx-4">
            <span>Category</span>
            <ChevronDown className="h-4 w-4 mt-1 hover:text-primary active:text-primary" />
          </p>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {categories.map((item, index) => (
            <DropdownMenuItem key={index} onClick={() => router.push('/#Category')}>
              {item.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Link href="/#Explore" className="flex items-center space-x-2 hover:text-primary active:text-primary mx-4 lg:mx-4" onClick={onClick}>
        <span>Explore</span>
      </Link>
      <Link href="/#Contact" className="flex items-center space-x-2 hover:text-primary active:text-primary mx-4 lg:mx-4" onClick={onClick}>
        <span>About</span>
      </Link>
      <Link href="/#Reviews" className="flex items-center space-x-2 hover:text-primary active:text-primary mx-4 lg:mx-4" onClick={onClick}>
        <span>Blog</span>
      </Link>
      <Link href="/#Contact" className="flex items-center space-x-2 hover:text-primary active:text-primary mx-4 lg:mx-4" onClick={onClick}>
        <span>Contact Us</span>
      </Link>
    </div>
  );

  return (
    <nav className="bg-white w-full text-gray-800 border-b-0 border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <Image src="/Logo.png" alt="Logo" width={250} height={250} className="h-6 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block ml-auto">
            <NavItems onClick={() => setIsOpen(false)} />
          </div>

          {/* Action Buttons */}
          <div className="ml-auto space-x-4 mr-4">
            <Button size="sm" className={`text-gray-400 bg-neutral-100 ${isPC === 'PC' ? 'hover:bg-neutral-200 hover:text-neutral-500 active:bg-neutral-300 active:text-neutral-500' : ''}`} onClick={() => router.push('/')}>
              <Search className="h-4 w-4" />
            </Button>
            <Button size="sm" className={`text-gray-400 bg-neutral-100 ${isPC === 'PC' ? 'hover:bg-neutral-200 hover:text-neutral-500 active:bg-neutral-300 active:text-neutral-500' : ''}`} onClick={() => router.push('/')}>
              <UserCircle className="h-4 w-4" />
            </Button>
            <Button onClick={() => router.push('/Components/Cart')} size="sm" className={`relative ${currentPath === '/Components/Cart' ? 'bg-primary text-white' : 'bg-neutral-100 text-neutral-400'} ${isPC === 'PC' ? 'hover:bg-neutral-200 hover:text-neutral-500 active:bg-neutral-300 active:text-neutral-500' : ''}`}>
              <ShoppingCart className="h-4 w-4" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost">
                  {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="mt-5 px-0 space-y-1 text-gray-800 border-0">
                  <NavItems onClick={() => setIsOpen(false)} />
                </nav>
                <div className="mt-6 flex justify-center space-x-4">
                  <Button className={`text-white bg-neutral-100 ${isPC === 'PC' ? 'hover:bg-neutral-200 hover:text-neutral-500 active:bg-neutral-300 active:text-neutral-500' : ''}`} onClick={() => router.push('/')}>
                    <Search className="h-10 w-10" />
                  </Button>
                  <Button className={`text-white bg-neutral-100 ${isPC === 'PC' ? 'text-white' : 'text-white'}`} onClick={() => router.push('/')}>
                    <UserCircle className="h-10 w-10" />
                  </Button>
                  <Button className={`relative ${currentPath === '/Components/Cart' ? 'bg-primary text-white' : 'bg-neutral-100 text-neutral-400'} ${isPC === 'PC' ? 'text-white' : ''}`} onClick={() => router.push('/Components/Cart')}>
                    <ShoppingCart className="h-10 w-10" />
                    {totalItems > 0 && (
                      <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                        {totalItems}
                      </span>
                    )}
                  </Button>
                </div>
              </SheetContent>
           
              </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
