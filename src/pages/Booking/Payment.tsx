import React from "react";
import { useLocation } from "react-router-dom";
import PaymentForm from "../../components/cars/PaymentForm";

const PaymentPage: React.FC = () => {
  const location = useLocation();
  const { totalCost, duration, carName, pricePerDay } = location.state || {};

  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
        {/* Header Section */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Complete Your Payment
        </h1>

        {/* Car Details Section */}
        <div className="bg-gray-50 border rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Car Details</h2>
          <div className="space-y-2">
            <p className="text-lg text-gray-600">
              <strong></strong> {carName}
            </p>
            <p className="text-lg text-gray-600">
              <strong>Price per Day:</strong> ${pricePerDay}
            </p>
            <p className="text-lg text-gray-600">
              <strong>Duration:</strong> {duration} days
            </p>
            <p className="text-lg text-gray-600">
              <strong>Total Cost:</strong>{" "}
              <span className="text-teal-500 font-bold">${totalCost}</span>
            </p>
          </div>
        </div>

        {/* Payment Form Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-700 mb-4">Payment Information</h2>
          <PaymentForm />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
