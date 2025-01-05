import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface CarDetailsProps {
  name: string;
  description: string;
  pricePerDay: number;
  image: string;
  mileage: string;
  fuelType: string;
  seatingCapacity: number;
  transmission: string;
}

const CarDetails: React.FC<CarDetailsProps> = ({
  name,
  description,
  pricePerDay,
  image,
  mileage,
  fuelType,
  seatingCapacity,
  transmission,
}) => {
  const [duration, setDuration] = useState<number>(1);
  const [totalCost, setTotalCost] = useState<number>(pricePerDay);
  const navigate = useNavigate();
  const { id } = useParams()

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const days = Math.max(1, parseInt(e.target.value, 10) || 0);
    setDuration(days);
    setTotalCost(days * pricePerDay);
  };

  const handleNextClick = () => {
    navigate(`/cars/${id}/payment`, {
      state: { description, totalCost, duration, carName: name, pricePerDay },
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 md:p-8 md:shadow-transparent">
      {/* Car Image */}
      <div className="w-full">
        <img
          src={image}
          alt={name}
          className="w-full rounded-md h-64 md:h-96 object-cover"
        />
      </div>

      {/* Car Details and Booking Section */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Car Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
          <p className="text-gray-600 mt-2">{description}</p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Mileage:</span> {mileage}
            </li>
            <li>
              <span className="font-medium">Fuel Type:</span> {fuelType}
            </li>
            <li>
              <span className="font-medium">Seating Capacity:</span>{" "}
              {seatingCapacity}
            </li>
            <li>
              <span className="font-medium">Transmission:</span> {transmission}
            </li>
          </ul>
        </div>

        {/* Booking Section */}
        <div className="bg-gray-50 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Book Your Rental
          </h2>
          <p className="text-gray-700 mt-2">
            Price per day:{" "}
            <span className="text-[#970747] font-bold">${pricePerDay}</span>
          </p>

          {/* Duration Input */}
          <div className="mt-4">
            <label
              htmlFor="duration"
              className="block text-gray-700 font-medium"
            >
              Duration (days):
            </label>
            <input
              type="number"
              id="duration"
              value={duration}
              min="1"
              onChange={handleDurationChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#970747] focus:border-[#970747] sm:text-sm p-2"
            />
          </div>

          {/* Total Cost */}
          <div className="mt-4">
            <p className="text-lg font-medium text-gray-800">
              Total Cost:{" "}
              <span className="text-[#970747] font-bold">
                ${totalCost.toFixed(2)}
              </span>
            </p>
          </div>

          {/* Booking Button */}
          <button
            onClick={handleNextClick}
            className="mt-6 w-full bg-[#970747] text-white py-2 px-4 rounded-lg hover:bg-transparent hover:border-[#970747] hover:border hover:text-[#970747] transition-all"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
