import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "@material-tailwind/react";
import { HomePage } from "./pages/LandingPage/page";
import DestinationPage from "./pages/DestinationPage/page";
import { Navigate } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";

export default function App() {

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/Destinations" element={<DestinationPage />} />
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
        </Routes>
      </Router>
    </ThemeProvider>

  );
}


