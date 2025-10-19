
import React from 'react';
import { useCart } from '../contexts/CartContext';

const BellIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
);

const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);


const Header: React.FC = () => {
    const { cartItems } = useCart();
    const cartCount = cartItems.length;

    return (
        <header className="flex items-center justify-between px-4 py-2">
            <button className="p-2">
                <BellIcon />
            </button>
            <h1 className="text-4xl font-black text-gray-800 tracking-tighter" style={{fontFamily: "'Cairo', sans-serif", fontWeight: 900}}>موجود</h1>
            <button className="relative p-2">
                <CartIcon />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-purple rounded-full">
                      {cartCount}
                  </span>
                )}
            </button>
        </header>
    );
};

export default Header;