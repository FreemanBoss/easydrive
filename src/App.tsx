import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import NavBarComponent from "./components/home/navbar.component";
import "./App.css";

const LoginPage = React.lazy(() => import("./pages/auth/login.page"));
const SignUpPage = React.lazy(() => import("./pages/auth/signup.page"));
const Profile = React.lazy(() => import("./pages/Booking/rentals.page"));
const HomePage = React.lazy(() => import("./pages/homePage"));

function App() {
  return (
    <>
          <div className="main-container">

      <BrowserRouter>
        <NavBarComponent />
        <div className="content">

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="signin" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="bookings" element={<Profile />} />
        </Routes>
        </div>
      </BrowserRouter>
</div>
    </>
  );
}

export default App;
