import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "../src/components/layout";

import HomePage from "./pages/homePage";


// Lazy-loaded components
const LoginPage = React.lazy(() => import("./pages/auth/login.page"));
const SignUpPage = React.lazy(() => import("./pages/auth/signup.page"));
const Bookings = React.lazy(() => import("./pages/Booking/rentals.page"));
const CarDetailsPage = React.lazy(() => import('./pages/Booking/CarDetailsPage'))
const PaymentPage = React.lazy(() => import('./pages/Booking/Payment'))
const ConfirmationPage = React.lazy(() => import('./pages/Booking/ConfirmationPage'))
const AboutUs = React.lazy(() => import('./pages/aboutUs'))
const ProfilePage = React.lazy(() => import('./pages/ProfilePage'))
const ContactPage = React.lazy(() => import('./pages/contactUs'))
const SelectCars = React.lazy(() => import('./components/cars/selectCars'))



const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="signin" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="bookings" element={<Bookings/>} />
            <Route path="Profile" element={<ProfilePage/>} />
            <Route path="about" element={<AboutUs/>} />
             {/* Cars Routes */}
             <Route path="cars">
              <Route index element={<SelectCars/>} />
              <Route path=":id" element={<CarDetailsPage />} />
              <Route path=":id/payment" element={<PaymentPage/>} />
              <Route path=":id/payment/confirm" element={<ConfirmationPage/>} />
            </Route>
            <Route path="contact" element={<ContactPage/>} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
};

export default App;
