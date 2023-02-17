import React, { createContext, useContext, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state'
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useLocalStorageState('cartItems', { defaultValue: [] });
  const [totalPrice, setTotalPrice] = useLocalStorageState('totalPrice', { defaultValue: 0 });
  const [totalQuantities, setTotalQuantities] = useLocalStorageState('totalQuantities', { defaultValue: 0 });

  let foundProduct;
  let foundProductIndex;

  const onAdd = (product, size, quantity = 1) => {
    product.size = size;
    foundProduct = cartItems.find((item) => item._id === product._id && item.size === size);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (foundProduct) {
      foundProductIndex = cartItems.findIndex((item) => item._id === product._id && item.size === size);
      const newCartItems = [...cartItems];
      newCartItems[foundProductIndex] = {
        ...foundProduct,
        quantity: foundProduct.quantity + 1
      };

      setCartItems(newCartItems);

    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`[${product.name}] added to the cart.`);
  }

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id && item.size === product.size);
    foundProductIndex = cartItems.findIndex((item) => item._id === product._id && item.size === product.size);
    const newCartItems = cartItems.filter((item, index) => index !== foundProductIndex);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  }

  const onClear = () => {
    setTotalPrice(0);
    setTotalQuantities(0);
    setCartItems([]);
  }

  const toggleCartItemQuanitity = (product, value) => {
    foundProduct = cartItems.find((item) => item._id === product._id && item.size === product.size);
    foundProductIndex = cartItems.findIndex((item) => item._id === product._id && item.size === product.size);
    const newCartItems = [...cartItems];

    if (value === 'inc') {
      newCartItems[foundProductIndex] = { ...foundProduct, quantity: foundProduct.quantity + 1 };
      setCartItems(newCartItems);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1);
    }
    if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        newCartItems[foundProductIndex] = { ...foundProduct, quantity: foundProduct.quantity - 1 };
        setCartItems(newCartItems);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1);
      }
    }
  }

  return (
    <Context.Provider
      value={{
        showMenu,
        setShowMenu,
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        onAdd,
        onRemove,
        onClear,
        toggleCartItemQuanitity,
        setCartItems,
        setTotalPrice,
        setTotalQuantities
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);