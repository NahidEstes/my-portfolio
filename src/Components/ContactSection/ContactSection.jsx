import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      {/* <div className="container mx-auto px-4"> */}
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-10">Contact</h2>
            <div className="flex mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-1/2 ml-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mt-4">
              Send Message
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg"
              alt="Contact Image"
              className="w-full max-w-md rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
