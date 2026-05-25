import Footer from '@/components/Footer';
import { MainNavbar } from '@/components/MainNavbar';
import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div>
      <main>
        <MainNavbar />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;