import React, { useState, useEffect } from 'react';

function Productlisting() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [maxButtonWidth, setMaxButtonWidth] = useState(0);
  const [showPopup, setShowPopup] = useState(false); // State for managing popup visibility

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    const maxWidth = Math.max(...Array.from(document.querySelectorAll(".add-to-cart-button")).map(button => button.offsetWidth));
    setMaxButtonWidth(maxWidth);
  }, [products]);

  const filterProductsByCategory = category => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  const addToCart = (product) => {
    try {
      // Get existing cart items from localStorage or initialize an empty array
      const existingCartItems = localStorage.getItem('@cartItems');
      let cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];

      // Check if the selected product already exists in the cart
      const existingCartItemIndex = cartItems.findIndex(item => item.id === product.id);

      if (existingCartItemIndex !== -1) {
        // If the product already exists in the cart, increase its quantity by 1
        cartItems[existingCartItemIndex].quantity += 1;
      } else {
        // If the product doesn't exist in the cart, add it with quantity 1
        cartItems.push({
          id: product.id,
          image: product.image,
          title: product.title,
          price: product.price,
          quantity: 1
        });
      }

      // Save updated cart items to localStorage
      localStorage.setItem('@cartItems', JSON.stringify(cartItems));

      console.log('Product added to cart:', product.id);

      // Log the updated cart items for debugging purposes
      console.log('Updated cart items:', cartItems);

      // Show the popup message
      setShowPopup(true);

      // Hide the popup message after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

        <div className="mt-6 flex justify-center mb-8">
          <select
            value={selectedCategory}
            onChange={e => filterProductsByCategory(e.target.value)}
            className="block w-full max-w-xs border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
          >
            <option value="">All Categories</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="jewelery">Jewelry</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src={product.image} alt={product.title} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex justify-between flex-col">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 mt-4 add-to-cart-button"
                  style={{ width: maxButtonWidth }}
                  onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Popup message */}
      {showPopup && (
        <div className="fixed top-3 inset-x-0 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-md">
            <p className="text-lg font-semibold">Product added to cart!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Productlisting;
