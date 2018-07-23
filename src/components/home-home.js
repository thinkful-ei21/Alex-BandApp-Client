import React from 'react';
import {showModal} from '../actions/modals'
import { connect } from 'react-redux';
import Modal from './modal'
import {fetchAllBands} from '../actions/band'
import {fetchAllLocations} from '../actions/locations'
import {hideModal} from '../actions/modals'
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './home-home.css'

export class HomeHome extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllBands())
    this.props.dispatch(fetchAllLocations())
    this.props.dispatch(showModal("landing-page")) 
  }
  render(){
    if (this.props.loggedIn) {
      if(this.props.isShowing) {
        if(this.props.page === "landing-page"){
          this.props.dispatch(hideModal())
        }
      }
    }
  return (
    <div className="home-home">
      <main role="main">
        <div className="home-banner">
        <div className="banner-text-container">
        <span className="home-banner-text">SIOUX CITY MUSIC</span>
        </div>
        </div>
        <div className="row-container">
        <div className="band-list">
        <div>
        <h1 className="the-bands">The Bands</h1>
        <ul className="all-bands-list">{this.props.allBands.map((item, index) =>{
                return (
                    <li className="all-bands-list-item" key={index}>
                    <a href={"/" + item.bandUrl}>{item.name}</a>
                    </li>
                )
            })}</ul>
        </div>
        <div className="button-container">
        <button className="register-band-button" onClick={() => this.props.dispatch(showModal("band-registration-page"))}>Register Band</button>
        {(() => {
              if (!this.props.loggedIn) {
                  return <button className="home-login-button" onClick={() => this.props.dispatch(showModal("login-page"))}>Login</button>
              } else {
                return <button className="home-login-button" onClick={() => {
                  this.props.dispatch(clearAuth())
                  clearAuthToken()
                }}>Log Out</button>
              }
        })()}
        </div>
        </div>
        </div>
        <div className="row-container">
        <div className="register-band">
        <h1 className="the-venues">The Venues</h1>
        <ul className="all-bands-list">{this.props.allLocations.map((item, index) =>{
                return (
                    <li className="all-bands-list-item" key={index}>
                    <span onClick={()=>this.props.dispatch(showModal("coming-soon"))}>{item.name}</span>
                    </li>
                )
            })}</ul>
        </div>
        </div>
        <Modal />
      </main>
    </div>
  );
}}

const mapStateToProps = (state) => ({
    allBands: state.band.allBands ? state.band.allBands : [],
    allLocations: state.locations.locations ? state.locations.locations : [],
    loggedIn: state.auth.currentUser !== null,
    isShowing: state.modals.isShowing,
    page: state.modals.page
})

export default connect(mapStateToProps)(HomeHome);