import React from "react";
import { useParams } from "react-router-dom";
import CarDetails from "../../components/cars/CarDetails";

const CarDetailsPage: React.FC = () => {
  // Example car details
  const cars = [
    {
      id: "1",
      name: "Honda Accord 2022",
      description: "A comfortable and luxurious car for all your travel needs.",
      pricePerDay: 50, // Price in USD
      image: "../images/honda2022.png", // Replace with the actual image URL
      mileage: "30 MPG", // Example mileage
      fuelType: "Gasoline", // Example fuel type
      seatingCapacity: 5, // Number of seats
      transmission: "Automatic", // Example transmission
    },

    {
      id: "2",
      name: "Ford Mustang GT 2022",
      description: "A powerful and stylish sports car for an exhilarating drive.",
      pricePerDay: 100, // Price in USD
      image: "../images/Ford2022.png", // Replace with the actual image URL
      mileage: "22 MPG", // Example mileage
      fuelType: "Gasoline", // Example fuel type
      seatingCapacity: 4, // Number of seats
      transmission: "Manual", // Example transmission
    },
    // Add more car details here
    {
      id: "3",
      name: "Mercedes-Benz S-Class 2022",
      description: "An epitome of luxury and performance for the discerning driver.",
      pricePerDay: 150, // Price in USD
      image: "../images/mercedes2022.png", // Replace with the actual image URL
      mileage: "25 MPG", // Example mileage
      fuelType: "Gasoline", // Example fuel type
      seatingCapacity: 5, // Number of seats
      transmission: "Automatic", // Example transmission
    },

    {
      id: "4",
      name: "Ford Transit 2022",
      description: "A spacious and versatile van for all your cargo and passenger needs.",
      pricePerDay: 80, // Price in USD
      image: "../images/Fordtransit2022.png", // Replace with the actual image URL
      mileage: "15 MPG", // Example mileage
      fuelType: "Gasoline", // Example fuel type
      seatingCapacity: 2, // Number of seats
      transmission: "Automatic", // Example transmission
    }
  ];
  
    const { id } = useParams<{ id: string }>();
  const car = cars.find((car) => car.id === id);

  if (!car) {
    return <p className="text-center text-red-500">Car not found!</p>;
  }
  
  return (
    <div className="max-w-5xl mx-auto p-6">
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
