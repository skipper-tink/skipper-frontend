import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import LeftBar from './LeftBar';

function Sidebars() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== '/Authentication' && (
        <div>
          <Header />
          <LeftBar />
        </div>
      )}
    </div>
  );
}
export default Sidebars;
