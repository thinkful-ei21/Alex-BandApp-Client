import React from 'react';
import {showModal} from '../actions/modals'
import { connect } from 'react-redux';
import Modal from './modal'
import {fetchAllBands} from '../actions/band'
import './home-home.css'

export class HomeHome extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllBands())
  }
  render(){
  return (
    <div className="home-home">
      <main role="main">
        <div className="home-banner">
        <div className="banner-text-container">
        <span className="home-banner-text">SIOUX CITY MUSIC</span>
        </div>
        </div>
        <div>
        <div className="band-list">
        <div>
        <h1 className="the-bands">The Bands</h1>
        <ul className="all-bands-list">{this.props.allBands.map((item, index) =>{
                return (
                    <li className="all-bands-list-item" key={index}>
                    <a href={"/home/" + item.bandUrl}>{item.name}</a>
                    </li>
                )
            })}</ul>
        </div>
        
        <button className="register-band-button" onClick={() => this.props.dispatch(showModal("band-registration-page"))}>Register Band</button>
        
        </div>
        <div className="register-band">
        <h1>The Venues</h1>
        
        </div>
        </div>
        <Modal />
      </main>
    </div>
  );
}}

const mapStateToProps = (state) => ({
    allBands: state.band.allBands ? state.band.allBands : []
})

export default connect(mapStateToProps)(HomeHome);