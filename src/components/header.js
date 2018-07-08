import React from 'react';

import TopNav from './top-nav';

import './header.css';

export default function Header(props) {
  return (
    <header>
    <div><h1>Artificial Stars Logo</h1></div>
      <TopNav />
    </header>
  );
}