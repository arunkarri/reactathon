import React, { Component } from 'react';
import styles from '../Main/events.css';
// import Background from '../../assets/images/events.jpg';

class Events extends Component {
    constructor(){
        super();
        this.state ={events :[]};
        this.filterList = this.filterList.bind(this);
    }
 componentDidMount(){
    var List = [{name:"Hackathkghghjgon1",org :"Wireless"},{name:"Hackathon2",org :"Wireless4"},{name:"Hackathon3",org :"Wireline"}]
    this.setState({events:List});
 }

  render() {
    return (
        
    //   <div className="Events">
    //    <p>helllo</p>
    //    <ul>
    //        {this.state.events.map(function(event,index){
    //            return <li key={index}>{event.name}</li>
    //        })}
    //    </ul>
    //    <button onClick ={this.filterList}>Filter</button>
      
    //   </div>style={{backgroundImage: "url(" + Background + ")"}}
    
      <div className="card">
      {/* <div style={{backgroundImage: "url(" + Background + ")"}}> */}
      <div className="header">
        <h4 className="title">Striped Table with Hover</h4>
        <p className="category">Here is a subtitle for this table</p>
      </div>
      <div className="content table-responsive table-full-width">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Country</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
          {this.state.events.map(function(event,index){
              
               return <tr key={index}>
               <td>{event.name}</td></tr>
           })}
           
          </tbody>
        </table>
        </div>
      </div>
    // </div>
    );
  }

filterList(){
let arra = this.state.events.filter(item => item.org === 'Wireless');
         
    this.setState({events:arra});
}
}


export default Events;
