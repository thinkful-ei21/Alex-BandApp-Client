import React from 'react';
import { connect } from 'react-redux';
import {fetchEventList} from '../actions/event-list'

import './event-list.css';

export class EventList extends React.Component {


    componentDidMount(){
        this.props.dispatch(fetchEventList())
    }

    render(){
        //console.log(this.props)
        //this.props.dispatch(testing())

        return(
            <div className="event-list">
            <h1>Upcoming Events</h1>
            <ul>{this.props.events.map(item =>{
                return (
                    <li>{item}</li>
                )
            })}</ul>
            </div>
        )
    }

}

const mapStateToProps = state => ({
      events:state.events,
    
  });

export default connect(mapStateToProps)(EventList);