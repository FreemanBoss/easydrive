 import React from "react";
import { useLocation } from "react-router-dom";
import PaymentForm from "../../components/cars/PaymentForm";

const PaymentPage: React.FC = () => {
  const location = useLocation();
  const {  bookingDetails, carDetails } = location.state || {};

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md md:shadow-transparent p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Complete Your Payment</h1>
          <p className="text-gray-600 mt-2">Review your details and proceed with payment.</p>
        </div>

        {/* Details and Form Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Car Details Section */}
          <div className=" p-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Car Details</h2>
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

          {/* Payment Form Section */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Payment Information</h2>
            <div className="flex-grow">
              <PaymentForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;