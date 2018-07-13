import React from 'react';
import { connect } from 'react-redux';
import TopNav from './nav/top-nav';

import './header.css';

class Header extends React.Component {
  render() {
  console.log(this.props.band[0].name)
  let logo;
  if (this.props.band[0].bannerUrl === "") {
    logo = <h1 className="logo-text" >{this.props.band[0].name}</h1>
  }
  else {
    logo = <img alt="" className="logo-image" src={this.props.band[0].bannerUrl} />
  }
  return (
    <header >
      <div className="logo">{logo}</div>
      <TopNav />
    </header>
  );
}}

const mapStateToProps = (state) => ({
  band: state.band.band
})

export default connect(mapStateToProps)(Header);