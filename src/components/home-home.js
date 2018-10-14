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
    // this.props.dispatch(showModal("landing-page")) 
  }
  renderBands(){
    if(this.props.bandsLoading){
      return (
        <div className="bands-loader">
        </div>
      )
    }
  else {
    return (
      <div className="band-list-container">
      <ul className="all-bands-list band-list-container">{this.props.allBands.map((item, index) =>{
              return (
                  <div className="single-band-containter">
                  <li className="all-bands-list-item" key={index}>
                  <a href={"/" + item.bandUrl}>{item.name}</a>
                  </li>
                  </div>
              )
          })}</ul>
      </div>
    )
  }
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
        {this.renderBands()}
        {/* <div className="band-list-container">
        <ul className="all-bands-list band-list-container">{this.props.allBands.map((item, index) =>{
                return (
                    <div className="single-band-containter">
                    <li className="all-bands-list-item" key={index}>
                    <a href={"/" + item.bandUrl}>{item.name}</a>
                    </li>
                    </div>
                )
            })}</ul>
        </div> */}
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
        <div className="band-list-container">
        <ul className="all-bands-list band-list-container">{this.props.allLocations.map((item, index) =>{
                return (
                    <div className="single-band-containter">
                    <li className="all-bands-list-item" key={index}>
                    <span onClick={()=>this.props.dispatch(showModal("coming-soon"))}>{item.name}</span>
                    </li>
                    </div>
                )
            })}</ul>
        </div>
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
    page: state.modals.page,
    bandsLoading: state.band.loading
})

export default connect(mapStateToProps)(HomeHome);