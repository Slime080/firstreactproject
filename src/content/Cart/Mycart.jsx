import React, { useState, useEffect } from 'react';

function Mycart({ onCartUpdate }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = () => {
      try {
        const storedCartItems = localStorage.getItem('@cartItems');
        if (storedCartItems) {
          setCartItems(JSON.parse(storedCartItems));
          // Update cart count on component mount
          updateCartCount(JSON.parse(storedCartItems));
        }
      } catch (error) {
        console.error('Error retrieving cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const updateCartCount = () => {
    try {
      const existingCartItems = localStorage.getItem('@cartItems');
      if (existingCartItems) {
        const cartItems = JSON.parse(existingCartItems);
        const uniqueItemIds = new Set(cartItems.map(item => item.id));
        const count = uniqueItemIds.size;
        onCartUpdate(count);
      }
    } catch (error) {
      console.error('Error updating cart count:', error);
    }
  };
  
  const removeFromCartAndUpdateQuantity = (itemId) => {
    try {
      const updatedCartItems = cartItems.filter(item => item.id !== itemId);
      setCartItems(updatedCartItems);
      localStorage.setItem('@cartItems', JSON.stringify(updatedCartItems));
      
      // Update cart count
      updateCartCount();
  
      // Trigger a re-render
      window.location.reload();
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };
  
  
  
  

  const increaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('@cartItems', JSON.stringify(updatedCartItems));
    // Update cart count
    updateCartCount(updatedCartItems);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('@cartItems', JSON.stringify(updatedCartItems));
    // Update cart count
    updateCartCount(updatedCartItems);
  };

  return (
    <div className="bg-gray-100 h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                    <th className="text-left font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.id}>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img className="h-16 w-16 mr-4" src={item.image} alt={item.title} />
                          <span className="font-semibold">{item.title}</span>
                        </div>
                      </td>
                      <td className="py-4">₱{item.price}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button className="border rounded-md py-2 px-4 mr-2" onClick={() => decreaseQuantity(item.id)}>-</button>
                          <span className="text-center w-8">{item.quantity}</span>
                          <button className="border rounded-md py-2 px-4 ml-2" onClick={() => increaseQuantity(item.id)}>+</button>
                        </div>
                      </td>
                      <td className="py-4">₱{(item.price * item.quantity).toFixed(2)}</td>
                      <td className="py-4">
                        <button className="bg-red-500 text-white py-2 px-4 rounded-lg" onClick={() => removeFromCartAndUpdateQuantity(item.id)}>Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>₱1.99</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>₱0.00</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">₱{(cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + 1.99).toFixed(2)}</span>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mycart;
