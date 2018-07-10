import React from 'react';
import { connect } from 'react-redux';
import {fetchEventsByBand} from '../../actions/event-list'
import {showModal} from '../../actions/modals'

import './event-list.css';

export class EventList extends React.Component {


    componentDidMount(){
        this.props.dispatch(fetchEventsByBand(this.props.band[0]))
    }

    render(){
        return(
            <div className="actual-event-list-container">
            <h1 className="event-header">Upcoming Events</h1>
            <div className="event-list-container">
            {(() => { if (this.props.loggedIn) { 
                return <button className="btn" onClick={() => this.props.dispatch(showModal("add-event-form"))}>Add Event</button>
            }})()}
            <ul className="event-list-ul">{this.props.events.map((item, index) =>{
                //console.log(item.location[0].name)
                return (
                    <li className="event-list-item" key={index}>
                    <h2>{item.title}</h2>
                    {(() => { if (this.props.loggedIn) { 
                        return <button onClick={() => this.props.dispatch(showModal("delete-event", item.id))}>Delete</button>
                    }})()}
                    {(() => { if (this.props.loggedIn) { 
                        return <button onClick={() => this.props.dispatch(showModal("edit-event", item.id))}>Edit</button>
                    }})()}
                    <section><img className="event-media" src={item.picUrl}/></section>
                    <p>{item.description}</p>
                    <section><label>Location: </label><a>{item.location[0].name}</a></section>
                    <section><label>Date: </label><a>{new Date(item.eventDate).toLocaleDateString()}</a></section>
                    </li>
                )
            })}</ul>
            </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
      events:state.events.events,
      loggedIn: state.auth.currentUser !== null,
      band: state.band.band
  });

export default connect(mapStateToProps)(EventList);