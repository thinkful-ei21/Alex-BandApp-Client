import React from 'react';
import { connect } from 'react-redux';
import {fetchEvents} from '../actions/event-list'

import './event-list.css';

export class EventList extends React.Component {


    componentDidMount(){
        this.props.dispatch(fetchEvents())
    }

    render(){
        //console.log(this.props)
        //this.props.dispatch(testing())

        return(
            <div className="events-list-container">
            <h1 className="events-heaeder">Upcoming Events</h1>
            <ul>{this.props.events.map((item, index) =>{
                return (
                    <li className="event-list-item" key={index}>{item.title}</li>
                )
            })}</ul>
            </div>
        )
    }

}

const mapStateToProps = state => ({
      events:state.events.events,
    
  });

export default connect(mapStateToProps)(EventList);