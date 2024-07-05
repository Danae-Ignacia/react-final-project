import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
    const [cart, setCart] = useState(initialCart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (producto) => {
        setCart(prevCart => {
            let productExists = false;
            const updatedCart = prevCart.map(item => {
                if (item.id === producto.id) {
                    productExists = true;
                    return { ...item, cantidad: item.cantidad + producto.cantidad };
                }
                return item;
            });
            if (!productExists) {
                updatedCart.push(producto);
            }
            return updatedCart;
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart,clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

