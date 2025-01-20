

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center px-6 py-10  min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-600 mt-2">
          We’re here to help! Reach out to us anytime.
        </p>
      </div>

      {/* Contact Form */}
      <form className="bg-white w-full max-w-3xl p-6 rounded-lg mb-12 shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Send a Message</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#970747]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#970747]"
          />
        </div>
        <div className="mb-4">
          <select
            className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#970747]"
          >
            <option value="">Select a Subject</option>
            <option value="booking">Booking Inquiry</option>
            <option value="payment">Payment Issue</option>
            <option value="support">General Support</option>
          </select>
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#970747]"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#970747] hover:bg-transparent hover:border-2 hover:border-[#970747] hover:text-[#970747] text-white px-4 py-2 font-medium shadow-lg transition w-full rounded-lg"
        >
          Send Message
        </button>
      </form>

         {/* Contact Information */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full max-w-4xl">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <span className="text-[#970747] text-3xl mb-4">📞</span>
          <p className="text-gray-700 font-semibold">Phone</p>
          <p className="text-gray-500">+1 (123) 456-7890</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <span className="text-[#970747] text-3xl mb-4">✉</span>
          <p className="text-gray-700 font-semibold">Email</p>
          <p className="text-gray-500">support@carrental.com</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <span className="text-[#970747] text-3xl mb-4">📍</span>
          <p className="text-gray-700 font-semibold">Address</p>
          <p className="text-gray-500">123 Rental Ave, City, Country</p>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-10 w-full max-w-4xl">
        <iframe
          title="Google Map"
          className="w-full h-64 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345094876!2d-122.47825548468104!3d37.81992827975166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c9d1f2e8b%3A0x60af4bff222edd8c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1649794104280!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
