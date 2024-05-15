// components/MainLayout.tsx

import React, { ReactNode } from 'react';

interface MainLayoutProps {
    children: ReactNode;
  }

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  console.log("in MainLayout")
  return (
    <div>
      <header>
        <h1>Main Layout Header</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Main Layout Footer</p>
      </footer>
    </div>
  );
};

export default MainLayout;