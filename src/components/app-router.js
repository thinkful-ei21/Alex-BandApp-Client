import React from 'react';
import {showModal} from '../actions/modals'
import Header from './header';
import Feeds from './feeds';
import BottomNav from './nav/bottom-nav';
import { connect } from 'react-redux';
import {BrowserRouter as Route, Link} from 'react-router-dom';
import App from '../App';
import './home.css'
import {fetchBand} from '../actions/band'

class AppRouter extends React.Component {


    componentDidMount(){
        this.props.dispatch(fetchBand(this.props.match.params.band))
    }

    setPage() {
        console.log(this.props.band)
        if (this.props.band.length > 0){
        return <App />
        }
        return <h1> BAND NOT FOUND </h1>
    }
    render() {
  return (
    <div>{this.setPage()}</div>
  );
}
}

const mapStateToProps = state => 
    ({
    band:state.band.band,
});

export default connect(mapStateToProps)(AppRouter)