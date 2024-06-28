import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import HomePage from "./pages/LandingPage/page";
import DestinationPage from "./pages/DestinationPage/page";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Destinations" element={<DestinationPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
