// src/components/Layout.jsx
import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;