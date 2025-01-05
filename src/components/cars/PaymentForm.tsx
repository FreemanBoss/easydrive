import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const PaymentForm: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams()

  const handleNextClick = () => {
    navigate(`/cars/${id}/payment/confirm`, {
     
    });
  };
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Payment Details</h2>
      <form className="space-y-6" >
        {/* Card Holder */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">Card Holder Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        {/* Card Number */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        {/* Expiry and CVV */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 font-medium mb-1">Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              autoComplete="on"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">CVV</label>
            <input
              type="text"
              placeholder="123"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleNextClick}
          className="bg-[#970747] hover:bg-transparent hover:border-2 hover:border-[#970747] hover:text-[#970747] text-white px-4 py-2 font-medium shadow-lg transition w-full rounded-lg"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
