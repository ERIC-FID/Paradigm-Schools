
import { useState } from "react";
import { Routes, Route } from "react-router-dom";


import Topbar from "./Components/Topbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Preloader from "./Components/Preloader";

import HomePage from "./Pages/HomePage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <ScrollToTop/>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Topbar />
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
