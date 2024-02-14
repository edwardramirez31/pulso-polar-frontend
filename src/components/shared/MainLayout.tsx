import React from 'react';
import Navbar from '../home/Navbar';
import Footer from './Footer';

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-gray-50">
      <header className="relative bg-gray-900">
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
