import React from 'react';

import TopNav from './nav/top-nav';

import './header.css';

export default function Header(props) {
  return (
    <header >
    <div className="logo"><img className="logo-image" src="https://f4.bcbits.com/img/0013081274_100.png" /></div>
      <TopNav />
    </header>
  );
}