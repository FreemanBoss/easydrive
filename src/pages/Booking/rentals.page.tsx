import {
  Avatar,
  Box,
  Flex,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
import MiniCalendar from "../../components/rentals/calender.component";
import RentDetails from "../../components/rentals/rentalDetails.component";
import { useState, useEffect, useCallback } from "react";
import { Rentals } from "../../helpers/rentalTypes";
import {User } from '../../helpers/rentalTypes'
import RentalCard from "../../components/rentals/RentalCard.component";

const mockRentals: Rentals[] = [
  {
    id: 1,
    price: 50,
    status: "completed",
    start_time: "2024-12-01T10:00:00Z",
    end_time: "2024-12-01T12:00:00Z",
    rental_date: "2024-12-10",
    qrcode: "some-qrcode",
    created_at: "2024-12-01T09:00:00Z",
    updated_at: "2024-12-01T13:00:00Z",
    User: {
      id: 2,
      name: "John Doe",
      email: "john.doe@example.com",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      phone: "+1234567890",
      birthdate: "1990-01-01",
    },
    Bike: {
      model: "Mountain Bike",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      status: "available",
      location: "Park A",
      Park: {
        id: 1,
        name: "Central Park",
        location: "Downtown",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
      },
    },
  },
  {
    id: 2,
    price: 60,
    status: "pending",
    start_time: "2024-12-05T10:00:00Z",
    end_time: "2024-12-05T12:00:00Z",
    qrcode: "some-qrcode",
    rental_date: "2024-12-11",
    created_at: "2024-12-05T09:00:00Z",
    updated_at: "2024-12-05T13:00:00Z",
    User: {
      id: 3,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      image: "https://via.placeholder.com/150",
      phone: "+0987654321",
      birthdate: "1992-02-02",
    },
    Bike: {
      model: "Road Bike",
      image: "https://via.placeholder.com/300",
      status: "available",
      location: "Park B",
      Park: {
        id: 2,
        name: "South Park",
        location: "Suburbs",
        image: "https://via.placeholder.com/150",
      },
    },
  },
  {
    id: 3,
    price: 60,
    status: "pending",
    start_time: "2024-12-05T10:00:00Z",
    end_time: "2024-12-05T12:00:00Z",
    qrcode: "some-qrcode",
    rental_date: "2024-12-11",
    created_at: "2024-12-05T09:00:00Z",
    updated_at: "2024-12-05T13:00:00Z",
    User: {
      id: 3,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      image: "https://via.placeholder.com/150",
      phone: "+0987654321",
      birthdate: "1992-02-02",
    },
    Bike: {
      model: "Road Bike",
      image: "https://via.placeholder.com/300",
      status: "available",
      location: "Park B",
      Park: {
        id: 2,
        name: "South Park",
        location: "Suburbs",
        image: "https://via.placeholder.com/150",
      },
    },
  },
];

const NoHistory = () => (
  <Box className="flex h-full items-center justify-center">
    <Text fontSize={18} fontWeight={"bold"} color={"gray"}>
      No history yet
    </Text>
  </Box>
);

const  Bookings = () => {
  const [rentals, setrentals] = useState<Rentals[]>([]);
  const [currRental, setcurrRental] = useState<Rentals | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [rentedCars, setRentedCars] = useState<Rentals[]>([]);
  const [loading, setLoading] = useState(true); // Start loading immediately
  const { user } = useAuth();

  const fetchRentedCars = useCallback(
    async (date: Date | null): Promise<void> => {
      if (!date) return;

      setLoading(true);
      const formattedDate = date.toISOString().split("T")[0];

      try {
        const filteredRentals = await new Promise<Rentals[]>((resolve) => {
          setTimeout(() => {
            const result = mockRentals.filter(
              (rental) => rental.rental_date === formattedDate
            );
            resolve(result);
          }, 1000);
        });

        setRentedCars(filteredRentals);
      } catch (error) {
        console.error("Error fetching rentals:", error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    setrentals(mockRentals);
    setcurrRental(mockRentals[0]);
    fetchRentedCars(selectedDate);
  }, [fetchRentedCars, selectedDate]);

  const handleRentalClick = (rental: Rentals) => {
    setcurrRental(rental);
  };

  return (
    <Box className=" mx-auto px-4 mt-2 py-12 sm:px-16" minHeight={"80vh"}>
      <Flex flexWrap={"wrap"} justifyContent={"space-between"}>
        <Box
          className=" flex flex-col gap-5 md:flex-row lg:flex-col lg:justify-between"
          w={{ base: "full", md: "full", lg: "auto" }}
        >
          <Box
            className="flex flex-col shadow-xl"
            borderRadius={"2xl"}
            shadow={"lg"}
            p={2}
            width="full"
            height="350px"
          >
            <Box
              w="100%"
              h="100px"
              bgGradient={"linear(to-r, custom.500, custom.600)"}
              borderRadius={"md"}
            ></Box>
            <Avatar
              src={user?.image}
              size={"xl"}
              className="mx-auto -mt-10 border-4 border-white"
            />
            <Heading
              as="h2"
              fontSize={18}
              fontWeight={"bold"}
              className="font my-3 text-center capitalize"
            >
              {user?.name}
            </Heading>

            <Flex justifyContent={"space-evenly"} my={6}>
              <Box
                className="flex flex-col items-center justify-center"
                w={"70px"}
                h={"70px"}
                textAlign={"center"}
                border={"4px solid #970747"}
                borderRadius={"full"}
              >
                <Heading as="h2" fontSize={24} fontWeight={"bold"}>
                  {rentals.length}
                </Heading>
                <Text fontSize={12} fontWeight={"medium"} color={"gray"}>
                  Rents
                </Text>
              </Box>
            </Flex>
          </Box>
          <MiniCalendar
            selectRange={false}
            onDateChange={(date) => setSelectedDate(date)}
          />
        </Box>

        <Box
          minHeight={"80vh"}
          minW={{ base: "full", lg: "600px" }}
          shadow={"lg"}
          p={5}
          borderRadius={"2xl"}
        >
          {currRental ? <RentDetails rent={currRental} /> : <NoHistory />}
        </Box>

        <Box
          width={{ base: "full", md: "350px" }}
          h={"fit-content"}
          shadow={"lg"}
          borderRadius={"2xl"}
          p={3}
        >
          <Heading
            as="h1"
            fontSize={20}
            fontWeight={"bold"}
            color={"teal.700"}
            pl={2}
            mb={6}
          >
            Rentals
          </Heading>
          <hr className="mb-2" />
          <Box overflow={"auto"} height={"600px"}>
            {loading ? (
              <Box className="flex h-full items-center justify-center">
                <Spinner size="xl" />
              </Box>
            ) : rentedCars.length > 0 ? (
              rentedCars.map((rental) => (
                <RentalCard
                  key={rental.id}
                  rental={rental}
                  onclickRent={handleRentalClick}
                />
              ))
            ) : (
              <NoHistory />
            )}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Bookings;

function useAuth(): { user: User } {
  return {
    user: {
      name: "kliuvert egbe",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  };
}
