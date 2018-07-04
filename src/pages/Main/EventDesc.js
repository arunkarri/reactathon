import React, { Component } from 'react';
import {Link,Switch} from 'react-router-dom'



class EventDesc extends Component {
    constructor(){
        super();
       
    }
 

  render() {
    return (
    <div className="row">
      <div className="EventsDesc col-md-6">
       <p>Event Description</p>
      <p> {this.props.match.params.name}</p>
      </div>
      <Link to={`/events`}>Go Back</Link>
      </div> 
    );
  }
}




export default EventDesc;
