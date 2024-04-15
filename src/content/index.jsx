import React from 'react';


function Index() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* E-commerce Website Section */}
      <section className="py-20" style={{ backgroundColor: "#31363F" }}>
  <div className="container mx-auto text-white text-center">
    <h2 className="text-4xl font-bold mb-6">Welcome to Our E-commerce Website</h2>
    <p className="text-lg mb-8">Discover amazing deals and shop with confidence.</p>
    <img className="w-64 mx-auto mb-4 rounded-full" src="https://img.freepik.com/free-vector/hand-drawn-shop-local-logo-design_23-2149575769.jpg" alt="E-commerce Website Logo" />
    <br></br>
  
    <a
      href="#"
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
    >
      Explore Now
    </a>
  </div>
</section>



      {/* Summary Section */}
      <section >
        <br></br>
        <br></br>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Summary Box 1 */}
            <div className="bg-white rounded-lg shadow-lg text-center p-6">
            <img src="https://cdn-icons-png.flaticon.com/512/2769/2769339.png" alt="Free Shipping" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Free Shipping</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* Summary Box 2 */}
            <div className="bg-white rounded-lg shadow-lg text-center p-6">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/customer-care-icon.png" alt="Customer Service" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">24/7 Customer Support</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* Summary Box 3 */}
            <div className="bg-white rounded-lg shadow-lg text-center p-6">
            <img src="https://cdn-icons-png.flaticon.com/512/6993/6993594.png" alt="Secure Payment" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Secure Payments</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* Summary Box 4 */}
            <div className="bg-white rounded-lg shadow-lg text-center p-6">
            <img src="https://cdn-icons-png.flaticon.com/128/2947/2947554.png" alt="30 days return" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">30-Day Returns</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
    
      </section>

      <section className="py-12">
  <div className="container mx-auto">
    <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center p-6">
      <div className="w-full md:w-1/2">
        <img className="w-full rounded-tl-[50px] sm:rounded-tl-[70px] h-auto mx-auto mb-4 md:mb-0 shadow-md" src="https://demo.tailgrids.com/templates/agency/build/src/assets/images/about/about-08/image-01.jpg" alt="about image" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-6">
        <h3 className="text-3xl font-bold mb-4 text-indigo-600">Shop Priority</h3>
        <h2 className="mb-11 text-3xl font-bold leading-tight text-gray-800 dark:text-gray-900 sm:text-4xl sm:leading-tight md:text-5xl lg:text-4xl lg:leading-tight xl:text-5xl">
          We develop &amp; create <span className="text-pink-600">awesome</span> products
        </h2>
        <ol className="text-lg pl-5 mb-4">
          <li className="mb-4">
            <h4 className="text-lg font-semibold text-blue-600">Unique Design</h4>
            <p className="text-gray-700">Refreshing Design: Clean, refreshing, and high-quality that gives positive vibes. Figma source file also provided so you can use to prototype, experiment, play or adjust.</p>
          </li>
          <li className="mb-4">
            <h4 className="text-lg font-semibold text-blue-600">Product Durability</h4>
            <p className="text-gray-700">Developer Friendly: Developer experience is our #1 priority, the entire library is designed, coded, and organized in a way that saves hundreds of hours and increases productivity.</p>
          </li>
        </ol>
        <a
          href="#"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 self-start md:self-center"
          >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>








    </div>
  );
}

export default Index;
