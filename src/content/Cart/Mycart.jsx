import React, { useState, useEffect } from 'react';

function Mycart() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts')
      .then(res => res.json())
      .then(async json => {
        const cartsWithImages = await Promise.all(json.map(async cart => {
          const productsWithImages = await Promise.all(cart.products.map(async product => {
            const productDetails = await fetch(`https://fakestoreapi.com/products/${product.productId}`);
            const productData = await productDetails.json();
            return { ...product, image: productData.image };
          }));
          return { ...cart, products: productsWithImages };
        }));
        setCarts(cartsWithImages);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-4">My Cart</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {carts.map(cart => (
          <div key={cart.id} className="bg-gray-100 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Cart ID: {cart.id}</h2>
            <p className="mb-2">User ID: {cart.userId}</p>
            <p className="mb-2">Date: {cart.date}</p>
            <ul>
              {cart.products.map(product => (
                <li key={product.productId} className="flex items-center mb-2">
                  <img src={product.image} alt={`Product ${product.productId}`} className="w-16 h-16 mr-2" />
                  <div>
                    <p className="font-semibold">Product ID: {product.productId}</p>
                    <p>Quantity: {product.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mycart;
