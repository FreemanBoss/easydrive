// import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
// import { Button } from "../../ui/button";

const ServicesSection = () => {
  const cars = [
    {
      name: "Honda Accord 2022",
      location: "New York",
      image: "/images/car-image.png",
    },
    {
      name: "Ford Mustang GT 2022",
      location: "California",
      image: "/images/cars.jpg",
    },
    {
      name: "Mercedes-Benz S-Class 2022",
      location: "Florida",
      image: "/images/car-image.png",
    },
    {
      name: "Ford Transit 2022",
      location: "Texas",
      image: "/images/car-image.png",
    },{
      name: "Ford Transit 2022",
      location: "Texas",
      image: "/images/car-image.png",
    },
    // Add more cars as needed
  ];

  return (
    <div className="mt-10 md:mx-12 lg:mx-40 md:my-12 mb-20">
      {/* Slider for Small Screens */}
      <div className="sm:hidden overflow-x-scroll flex space-x-4">
        {cars.map((car, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="min-w-[300px] flex-shrink-0"
          >
            <Card>
              <CardHeader>
                <div className="relative group">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-[180px] object-cover rounded"
                  />
                  <motion.button
                    whileHover={{ backgroundColor: "#750537", color: "#FFFFFF" }}
                    className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-3 py-1 rounded-full group-hover:bg-gray-700 transition"
                  >
                    View
                  </motion.button>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg font-bold">{car.name}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  Location: {car.location}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-center">
                <motion.button
                 
                  
                  className="sm:w-auto rounded-md  bg-[#970747] hover:bg-transparent hover:border-2 hover:border-[#970747] hover:text-[#970747] text-white px-4 py-2 font-medium shadow-lg transition"
                >
                  Book Now
                </motion.button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Grid for Medium and Large Screens */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 cursor-pointer gap-6">
        {cars.map((car, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -10,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="w-[300px] mx-auto"
          >
            <Card>
              <CardHeader>
                <div className="relative group">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-[180px] object-cover rounded"
                  />
                  <motion.button
                    whileHover={{
                      backgroundColor: "transparent",
                      borderColor: "#970747",
                      color: "#970747",
                    }}
                    className="absolute top-2 right-2 text-xs px-3 py-1 rounded-full bg-[#970747] text-[#FFEBF1] hover:bg-transparent hover:border-2 hover:border-[#970747] hover:text-[#970747] font-medium transition"
                  >
                    View
                  </motion.button>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg font-bold">{car.name}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  Location: {car.location}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-center">
                <motion.button
                 
                  
                  className="sm:w-auto rounded-md  bg-[#970747]  hover:bg-transparent hover:border-2 hover:border-[#970747] hover:text-[#970747] text-white px-4 py-2 font-medium shadow-lg transition"
                >
                  Book Now
                </motion.button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
