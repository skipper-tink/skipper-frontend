import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Sidebars/Header';
import LeftBar from '../Sidebars/LeftBar';

function Sidebars() {
  return (
    <div>
      <Header />
      <LeftBar />
      <Outlet />
    </div>
  );
}
export default Sidebars;
