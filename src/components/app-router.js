import React from 'react';
import { connect } from 'react-redux';
import App from '../App';
import './home.css'
import {fetchBand} from '../actions/band'
import './app-router.css'

class AppRouter extends React.Component {


    componentDidMount(){
        this.props.dispatch(fetchBand(this.props.match.params.band))
    }

    setPage() {
        if (this.props.band.length > 0){
        return <App />
        }
        return <h1> Loading... </h1>
    }
    render() {
  return (
    <div id="app-router">{this.setPage()}</div>
  );
}
}

const mapStateToProps = state => 
    ({
    band:state.band.band,
});

export default connect(mapStateToProps)(AppRouter)