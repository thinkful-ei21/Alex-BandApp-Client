import React, { Component } from 'react';
import Home from './components/home';
// import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
// import { showModal } from 'redux-modal-container';
// import { Container as ModalContainer } from 'redux-modal-container';
import { showModal, hideModal } from './actions/modals'
import ConfirmModal from './components/modal'



class App extends Component {

  // componentWillMount() {
  //   // add event listener for clicks
  // //document.addEventListener('click', this.handleClick, false);
  // }

  //handleClick = e => { this.props.showModal('simple')}
    
  //   this.props.openModal({
  //   header: "Test content",
  //   content: "Test content 2"
  //     })
    
  // }


  render() {
    let { showModal, hideModal, name } = this.props
    return (
      
      <div className="App">
        <header className="App-header">
        </header>
        <button className="btn" onClick={() => showModal("What your name?")}>Enter your name</button>
        <ConfirmModal message="'What your name?'"  onCancel={hideModal}></ConfirmModal>
        <Home />
        
        
      </div>
      
    );
  }
  
}
const mapStateToComponent = (state) => {
  return {
    name: state.name
  }
}

const mapDispatchToComponent = (dispatch) => {
  return {
    showModal: (message) => dispatch(showModal(message)),
    //onConfirm: (name) => dispatch(setNameAndHideModal(name)),
    hideModal: () => dispatch(hideModal())
  }
}

export default connect(mapStateToComponent, mapDispatchToComponent)(App);
