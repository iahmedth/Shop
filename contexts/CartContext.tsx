
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// Define the shape of the context data
interface CartContextType {
    cartItems: number[];
    addToCart: (id: number) => void;
    removeFromCart: (id: number) => void;
    isItemInCart: (id: number) => boolean;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create the provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Initialize state from localStorage
    const [cartItems, setCartItems] = useState<number[]>(() => {
        try {
            const items = window.localStorage.getItem('cart');
            return items ? JSON.parse(items) : [];
        } catch (error) {
            console.error("Error reading cart from localStorage", error);
            return [];
        }
    });

    // Write to localStorage whenever cartItems changes
    useEffect(() => {
        try {
            window.localStorage.setItem('cart', JSON.stringify(cartItems));
        } catch (error) {
            console.error("Error saving cart to localStorage", error);
        }
    }, [cartItems]);

    const addToCart = (id: number) => {
        setCartItems(prevItems => [...prevItems, id]);
    };

    const removeFromCart = (id: number) => {
        setCartItems(prevItems => prevItems.filter(itemId => itemId !== id));
    };
    
    const isItemInCart = (id: number) => {
        return cartItems.includes(id);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isItemInCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the cart context
export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
