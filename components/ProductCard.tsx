
import React, { useState } from 'react';
import { type Product } from './ProductGrid';
import { useCart } from '../contexts/CartContext';

const HeartIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-colors duration-300 ${filled ? 'text-red-500' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
);

const CartIconSmall = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const { addToCart, removeFromCart } = useCart();

    const handleCartClick = () => {
        if (product.inCart) {
            removeFromCart(product.id);
        } else {
            addToCart(product.id);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-3 flex flex-col relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-bl-lg">قابل للتجديد</span>
            <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-32 object-contain" />
                <button 
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="absolute top-0 left-0 p-1 bg-white/50 rounded-full"
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                    <HeartIcon filled={isFavorite} />
                </button>
            </div>
            <h4 className="font-bold text-gray-800 mt-2 text-sm truncate">{product.name}</h4>
            <p className="text-xs text-gray-500 mt-1">
                سعر الجملة: <span className="font-bold text-gray-700">{product.wholesalePrice}</span>
            </p>
            <div className="flex justify-between items-center text-xs mt-3">
                <div className="bg-gray-100 rounded-full px-2 py-1">
                    <span className="text-gray-500">الربح</span>
                    <strong className="text-brand-purple-dark mr-1">{product.profit}</strong>
                </div>
                 <div className="bg-gray-100 rounded-full px-2 py-1">
                    <span className="text-gray-500">العدد</span>
                    <strong className="text-brand-purple-dark mr-1">{product.quantity}</strong>
                </div>
            </div>
            <button 
                onClick={handleCartClick}
                className={`w-full mt-4 py-2 text-white font-bold rounded-lg flex items-center justify-center space-i-2 text-sm transition-colors duration-200 ${product.inCart ? 'bg-red-500 hover:bg-red-600' : 'bg-brand-purple hover:bg-brand-purple-dark'}`}
            >
                <span>{product.inCart ? 'إزالة من السلة' : 'إضافة الى السلة'}</span>
                <CartIconSmall />
            </button>
        </div>
    );
};

export default ProductCard;