import React, { Component } from 'react';
import Home from './components/home';
import { connect } from "react-redux";
import { showModal} from './actions/modals'
import Modal from './components/modal'



class App extends Component {


  render() {
    return (
      
      <div className="App">
        <header className="App-header">
        </header>
        <button className="btn" onClick={() => this.props.dispatch(showModal("add-post-form"))}>Enter your name</button>
        <Modal  />
        <Home />
        
        
      </div>
      
    );
  }
  
}

const mapDispatchToProps = () => {
  return {
    showModal: showModal,
  }
}

export default connect(mapDispatchToProps)(App);
