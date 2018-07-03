import React, { Component } from 'react';



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
        
      <div className="Events">
       <p>helllo</p>
       <ul>
           {this.state.events.map(function(event,index){
               return <li key={index}>{event.name}</li>
           })}
       </ul>
       <button onClick ={this.filterList}>Filter</button>
      
      </div>
    );
  }

filterList(){
let arra = this.state.events.filter(item => item.org === 'Wireless');
         
    this.setState({events:arra});
}
}


export default Events;
