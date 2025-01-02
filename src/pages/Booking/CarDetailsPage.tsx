import React from "react";
import CarDetails from "../../components/cars/CarDetails";

const CarDetailsPage: React.FC = () => {
  // Example car details
  const car = {
    id: "honda-accord-2022",
    name: "Honda Accord 2022",
    description: "A comfortable and luxurious car for all your travel needs.A comfortable and luxurious car for all your travel needs",
    pricePerDay: 50, // Price in USD
    image: "https://via.placeholder.com/800x400", // Replace with the actual image URL
    mileage: "30 MPG", // Example mileage
    fuelType: "Gasoline", // Example fuel type
    seatingCapacity: 5, // Number of seats
    transmission: "Automatic", // Example transmission
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* CarDetails Component */}
      <CarDetails
        name={car.name}
        description={car.description}
        pricePerDay={car.pricePerDay}
        image={car.image}
        mileage={car.mileage}
        fuelType={car.fuelType}
        seatingCapacity={car.seatingCapacity}
        transmission={car.transmission}
      />
    </div>
  );
};

export default CarDetailsPage;
