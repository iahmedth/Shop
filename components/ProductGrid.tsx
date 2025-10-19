
import React from 'react';
import ProductCard from './ProductCard';
import { useCart } from '../contexts/CartContext';

export interface Product {
    id: number;
    name: string;
    image: string;
    wholesalePrice: string;
    profit: string;
    quantity: string;
    inCart: boolean;
}

const products: Omit<Product, 'inCart'>[] = [
    {
        id: 1,
        name: 'مكنسة كهربائية سلكية ...',
        image: 'https://i.imgur.com/3Y1ZYoQ.png',
        wholesalePrice: '20,000 د.ع',
        profit: '30,000 د.ع',
        quantity: '151-200',
    },
    {
        id: 2,
        name: 'اندرويد تي في بوكس M...',
        image: 'https://i.imgur.com/OATn2US.png',
        wholesalePrice: '20,000 د.ع',
        profit: '25,000 د.ع',
        quantity: '101-150',
    },
    {
        id: 3,
        name: 'مدفأة كهربائية ...',
        image: 'https://i.imgur.com/k6x35aB.png',
        wholesalePrice: '15,000 د.ع',
        profit: '20,000 د.ع',
        quantity: '50-100',
    },
    {
        id: 4,
        name: 'مدفأة غازية منزلية ...',
        image: 'https://i.imgur.com/h5E4v7p.png',
        wholesalePrice: '45,000 د.ع',
        profit: '60,000 د.ع',
        quantity: '20-40',
    },
];

const ProductGrid: React.FC = () => {
    const { isItemInCart } = useCart();

    return (
        <div className="mt-6 px-4">
            <h3 className="font-bold text-xl text-gray-800 mb-3">كافة المنتجات</h3>
            <div className="grid grid-cols-2 gap-4">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={{
                            ...product,
                            inCart: isItemInCart(product.id)
                        }} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
