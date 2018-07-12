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
        <span className="home-banner-text">SIOUX CITY MUSIC</span>
        </div>
        <div className="band-list">
        <h1>Band List</h1>
        <ul className="all-bands-list">{this.props.allBands.map((item, index) =>{
                return (
                    <li className="all-bands-list-item" key={index}>
                    <a href={"/home/" + item.bandUrl}>{item.name}</a>
                    </li>
                )
            })}</ul>
        </div>
        <div className="register-band">
        <button className="register-band-button btn" onClick={() => this.props.dispatch(showModal("band-registration-page"))}>Register Band</button>
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