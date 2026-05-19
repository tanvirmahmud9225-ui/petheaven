import { MainNavbar } from '@/components/MainNavbar';
import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div>
      <main>
        <MainNavbar />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;