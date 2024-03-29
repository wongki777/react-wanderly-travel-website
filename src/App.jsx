import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import Discount from "./components/Discount";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Card from "./components/Card";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Card />
      <Discount />
      <Testimonials />
      <Footer />
    </div>
  );
}
