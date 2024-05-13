import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Sidebars/Header';
import LeftBar from '../Sidebars/LeftBar';
import styles from './style.module.css';
import classNames from 'classnames/bind';

const style = classNames.bind(styles);

function Sidebars() {
  return (
    <div className={style('layout')}>
      <Header />
      <LeftBar />
      <Outlet />
    </div>
  );
}
export default Sidebars;
