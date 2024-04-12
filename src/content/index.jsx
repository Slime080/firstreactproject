import React from 'react';

function Index() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* E-commerce Website Section */}
      <section className="py-20" style={{ backgroundColor: "#31363F" }}>
  <div className="container mx-auto text-white text-center">
    <h2 className="text-4xl font-bold mb-6">Welcome to Our E-commerce Website</h2>
    <p className="text-lg mb-8">Discover amazing deals and shop with confidence.</p>
    <img className="w-64 mx-auto mb-4 rounded-lg" src="https://img.freepik.com/free-vector/hand-drawn-shop-local-logo-design_23-2149575769.jpg" alt="E-commerce Website Logo" />

  
    <a
      href="#"
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
    >
      Explore Now
    </a>
  </div>
</section>


      {/* Summary Section */}
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Summary Box 1 */}
            <div className="bg-white rounded-lg shadow-lg text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Free Shipping</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* Summary Box 2 */}
            <div className="bg-white rounded-lg shadow-lg text-center p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Customer Support</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* Summary Box 3 */}
            <div className="bg-white rounded-lg shadow-lg text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Secure Payments</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* Summary Box 4 */}
            <div className="bg-white rounded-lg shadow-lg text-center p-6">
              <h3 className="text-xl font-semibold mb-4">30-Day Returns</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Men's Clothing */}
          <div className="bg-white rounded-lg shadow-lg text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Men's Clothing</h3>
            <img className="w-32 mx-auto mb-4" src="https://images.pexels.com/photos/804009/pexels-photo-804009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Men's Clothing" />
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              Explore
            </a>
          </div>

          {/* Jewelry */}
          <div className="bg-white rounded-lg shadow-lg text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Jewelry</h3>
            <img className="w-32 mx-auto mb-4" src="https://images.pexels.com/photos/10050217/pexels-photo-10050217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Jewelry" />
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              Explore
            </a>
          </div>

          {/* Electronics */}
          <div className="bg-white rounded-lg shadow-lg text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Electronics</h3>
            <img className="w-32 mx-auto mb-4" src="https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Electronics" />
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              Explore
            </a>
          </div>

          {/* Women's Clothing */}
          <div className="bg-white rounded-lg shadow-lg text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Women's Clothing</h3>
            <img className="w-32 mx-auto mb-4" src="https://images.pexels.com/photos/3459967/pexels-photo-3459967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Women's Clothing" />
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              Explore
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
