import React from "react";
import { useLocation } from "react-router-dom";

const ConfirmationPage: React.FC = () => {
  const location = useLocation();
  const { carDetails, bookingDetails } =
    location.state || {};

  return (
    <div className="min-h-screen flex items-center justify-center mb-16">
      <div className="max-w-6xl w-full bg-white shadow-lg md:shadow-transparent rounded-lg p-8">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Booking Confirmation
          </h1>
          <p className="text-gray-600 mt-2">
            Please review your booking details before confirming.
          </p>
        </header>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Booking, Personal Details */}
          <div className="space-y-6">
            {/* Car Details */}
            <section className=" ">
              <h2 className="text-xl font-semibold text-gray-700 mb-1">
                Step 1:
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Car Details</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <strong></strong> {carDetails?.name || "car name"}
                </li>
                <li>
                  <strong></strong> {carDetails?.model || "car model"}
                </li>
                <li>
                  <strong></strong> {carDetails?.license || "License"}
                </li>
              </ul>
            </section>

            {/* Personal Information */}
            <section className="">
              <h2 className="text-xl font-semibold text-gray-700">Step 2:</h2>

              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Personal Information
              </h2>

              <div>
                <label className="block text-gray-600 font-medium ">
                  
                  Full name
                </label>
                <input
                  type="text"
                  disabled
                  placeholder="eg, John Doe"
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 mb-6"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  disabled
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 mb-6"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Phone number
                </label>
                <input
                  type="text"
                  disabled
                  placeholder="+123 001 234 567"
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              {/* <ul className="space-y-2 text-gray-600">
                <li><strong></strong> {userDetails?.name || "User Name"}</li>
                <li><strong>Email:</strong> {userDetails?.email || "user email"}</li>
                <li><strong>Phone:</strong> {userDetails?.phone || ""}</li>
                <li><strong>Address:</strong> {userDetails?.address || "N/A"}</li>
              </ul> */}
            </section>

            {/* Payment Information */}
            <section className="">
            <h2 className="text-xl font-semibold mt-16 mb-1 text-gray-700">Step 3:</h2>

              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Payment Details
              </h2>
          <div className="mt-6">
              <div className="space-y-2"> 
                <label className="block text-gray-600 font-medium mb-1">
                  Card Holder Name
                </label>
                <input
                  type="text"
                  disabled
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              {/* Card Number */}
              <div className="mt-6">
                <label className="block text-gray-600 font-medium mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  disabled
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              {/* Expiry and CVV */}
              <div className="grid grid-cols-2 mt-6 gap-4">
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    disabled
                    placeholder="MM/YY"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    CVV
                  </label>
                      <div className="w-full bg-gray-100 border rounded-lg p-2 text-gray-600">
                        ****
                      </div>
                </div>
            </div>
            </div>
            </section>
          </div>

          

          {/* Right Column: Image, Summary, Confirm Details */}
          <div className="  p-6 space-y-6">
            {/* Car Image and Description */}
            <div className="space-y-4">
              <img
                src={carDetails?.image || "https://via.placeholder.com/400x200"}
                alt={carDetails?.name || "Car"}
                className="w-full h-52 object-cover rounded-lg"
              />
              <p className="text-gray-600">
                {carDetails?.description || "No description available."}
              </p>
            </div>

            {/* Booking Summary */}
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Booking Summary
              </h2>
              <ul className="space-y-4 text-gray-400">
                  <li className="grid grid-cols-2 -mb-3">
                    <span className="font-semibold text-kg">Pickup Date:</span>
                    <span className="text-lg">{bookingDetails?.pickupDate || "N/A"}</span>
                  </li>
                  <li className="grid grid-cols-2 ">
                    <span className="font-semibold text-lg">Drop-off Date:</span>
                    <span className="text-lg">{bookingDetails?.dropOffDate || "N/A"}</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span className="font-semibold text-lg">Payment Per Day:</span>
                    <span className="font-bold text-lg">${carDetails?.paymentPerDay || "0.00"}</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span className="font-semibold text-lg">Number of Days:</span>
                    <span className="font-bold text-lg">{bookingDetails?.numberOfDays || 0}</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span className="font-semibold text-lg">Insurance:</span>
                    <span className="font-bold text-lg">${bookingDetails?.insurance || "0.00"}</span>
                  </li>
                  <li className="grid grid-cols-2">
                    <span className="font-semibold text-lg">Total Amount:</span>
                    <span className="text-[#970747] font-bold text-lg">${carDetails?.totalCost || "0.00"}</span>
                  </li>
                </ul>

            </div>

            {/* Confirm Button */}
            <button className="bg-[#970747] hover:bg-transparent hover:border-2 hover:border-[#970747] hover:text-[#970747] text-white px-4 py-2 font-medium shadow-lg transition w-full rounded-lg">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
