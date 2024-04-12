import React, { useState, useEffect } from 'react';

function ProductListing({ onCartUpdate }) {
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
        // If the product exists in the cart, increment its quantity
        cartItems[existingCartItemIndex].quantity += 1;
      } else {
        // If the product doesn't exist in the cart, add it
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

      // Update cart count by counting unique item IDs
      const uniqueItemIds = new Set(cartItems.map(item => item.id));
      const count = uniqueItemIds.size;
      onCartUpdate(count);

      // Show the popup message
      setShowPopup(true);

      // Hide the popup message after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 1000);

      console.log('Cart Updated:', cartItems);
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
            <div key={product.id} className="group relative rounded-lg bg-gray-100 p-4 flex flex-col justify-between">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-64 mb-4">
                <img src={product.image} alt={product.title} className="h-full w-full object-cover object-center" />
              </div>
              <div className="flex flex-col items-center justify-between flex-grow">
                <div className="text-center">
                  <h3 className="text-sm text-gray-700">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900 mb-2">₱{product.price}</p>
                <button
  className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 add-to-cart-button"
  onClick={() => addToCart(product)}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="w-6 h-6 mr-2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
  Add to Cart
</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Popup message */}
      {showPopup && (
        <div className="fixed top-1/4 inset-x-0 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-md">
            <p className="text-lg font-semibold">Product added to cart!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductListing;
