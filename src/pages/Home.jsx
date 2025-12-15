// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProductsSection from '../components/home/ProductsSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import BookAppointment from '../components/home/BookAppointment';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <div className="space-y-20">
      <HeroSection />
      <ProductsSection />
      <WhyChooseUs />
      <BookAppointment />
      <Newsletter />
    </div>
  );
};

export default Home;