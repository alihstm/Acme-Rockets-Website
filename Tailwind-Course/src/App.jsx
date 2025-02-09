import { useState } from "react";
import Header from "../src/Header/header.jsx";
import HeroSection from "../src/HeroSection/heroSection.jsx";
import Rockets from "../src/Rockets/rockets.jsx";
import Testimonials from "../src/Testimonials/testimonials.jsx";
import ContactUs from "../src/ContactUs/contactUs.jsx";
import Footer from "../src/Footer/footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto">
        <HeroSection />
        <Rockets />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
