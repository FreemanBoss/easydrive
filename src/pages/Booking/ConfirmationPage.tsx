import React from "react";
import { useLocation } from "react-router-dom";

const ConfirmationPage: React.FC = () => {
  const location = useLocation();
  const { carDetails, userDetails, paymentDetails } = location.state || {};

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 py-10">
      <div className="max-w-6xl w-full bg-white shadow-md rounded-lg p-8">
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Booking Confirmation
        </h1>

        {/* Summary Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Car Details */}
          <div className="bg-gray-50 border rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Car Details</h2>
            <div className="space-y-2">
              <p className="text-lg text-gray-600">
                <strong>Car:</strong> {carDetails?.name}
              </p>
              <p className="text-lg text-gray-600">
                <strong>Model:</strong> {carDetails?.model}
              </p>
              <p className="text-lg text-gray-600">
                <strong>License:</strong> {carDetails?.license}
              </p>
              <p className="text-lg text-gray-600">
                <strong>Total Cost:</strong>{" "}
                <span className="text-teal-500 font-bold">
                  ${carDetails?.totalCost}
                </span>
              </p>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-gray-50 border rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Personal Information</h2>
            <div className="space-y-2">
              <p className="text-lg text-gray-600">
                <strong>Name:</strong> {userDetails?.name}
              </p>
              <p className="text-lg text-gray-600">
                <strong>Email:</strong> {userDetails?.email}
              </p>
              <p className="text-lg text-gray-600">
                <strong>Phone:</strong> {userDetails?.phone}
              </p>
              <p className="text-lg text-gray-600">
                <strong>Address:</strong> {userDetails?.address}
              </p>
            </div>
          </div>

          {/* Payment Details */}
          <div className="bg-gray-50 border rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Payment Details</h2>
            <div className="space-y-2">
              <p className="text-lg text-gray-600">
                <strong>Card Holder:</strong> {paymentDetails?.cardHolder}
              </p>
              <p className="text-lg text-gray-600">
                <strong>Card Number:</strong> **** **** ****{" "}
                {paymentDetails?.cardNumber.slice(-4)}
              </p>
              <p className="text-lg text-gray-600">
                <strong>Payment Date:</strong> {paymentDetails?.date}
              </p>
              <p className="text-lg text-gray-600">
                <strong>Total Paid:</strong>{" "}
                <span className="text-teal-500 font-bold">
                  ${paymentDetails?.amount}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Confirmation Message */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-600">
            Thank you, <strong>{userDetails?.name}</strong>, for your booking! A
            confirmation email has been sent to{" "}
            <span className="font-bold">{userDetails?.email}</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
