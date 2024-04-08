import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Index() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  const addToCart = (productId) => {
    // This is just a placeholder function, you would typically implement
    // your own logic to add the product to the cart here.
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <br></br>
      <br></br>
      <br></br> 
      <div className="max-w-4xl p-8 bg-white rounded-lg shadow-md mb-8">
    
        </div>
  <div className="max-w-4xl p-8 bg-white rounded-lg shadow-md mb-8">
    <center>
      <h1 className="text-4xl font-bold mb-4">You may also like</h1>
      <p className="text-gray-600 mb-8">
        Explore our handpicked selection of products you may also like. From fashion essentials to cutting-edge gadgets, find your next favorite item today!
      </p>
    </center>
    <div className="flex justify-center">
      <NavLink
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mr-4 transition duration-300"
        to="/Login">
        Get Started
      </NavLink>
    </div>
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-gray-200 p-4 rounded-lg flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-4" />
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            </div>
            <p className="text-gray-700 mb-2 self-center">₱{product.price}</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 self-center"
              onClick={() => addToCart(product.id)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>

</div>

    
  );
}

export default Index;
