import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './content/navbar/navbar';
import Index from './content';
import Uselogin from './content/sample/Login';
import Mycart from './content/Cart/Mycart';
import Productlisting from './content/sample/Productlisting';

function App() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Retrieve cart items from local storage and update the cart count
    const existingCartItems = localStorage.getItem('@cartItems');
    if (existingCartItems) {
      const cartItems = JSON.parse(existingCartItems);
      const uniqueItemIds = new Set(cartItems.map(item => item.id));
      const count = uniqueItemIds.size;
      setCartCount(count);
    }
  }, []);

  const updateCartCount = (count) => {
    setCartCount(count);
  };
    
  return (
    <>
      <Router>
        <Navbar cartCount={cartCount} />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/Login' element={<Uselogin />} />
          <Route path='/Mycart' element={<Mycart />} />
          <Route path='/Productlisting' element={<Productlisting onCartUpdate={updateCartCount} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
