import React, { Component } from 'react';
import styles from '../../Main/events.css';
import { Link } from 'react-router-dom';
// import Background from '../../assets/images/events.jpg';

class MyRegistry extends Component {
  constructor() {
    super();
    this.state = { events: [] };
    this.filterList = this.filterList.bind(this);
  }
  componentDidMount() {
    // var List = [{name:"Hackathkghghjgon1",org :"Wireless"},{name:"Hackathon2",org :"Wireless4"},{name:"Hackathon3",org :"Wireline"}]
    
    

    this.callApi()
    .then(res => 
      {
        
      console.log(res); 
      this.setState({ events: res })
      })      
    .catch(err => console.log(err));
  console.log(this.state.events)
};



  callApi = async () => {
    // fetch('http://10.74.17.159:4500/cyberarknode/hacks')
    const response = await fetch('http://10.74.17.159:4500/cyberarknode/hacks/');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

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
      // <div className="col-md-8">
      // <div className="card">
      //   {/* <div style={{backgroundImage: "url(" + Background + ")"}}> */}
      //   <div className="header">
      //     <h4 className="title">Hackathons List</h4>
      //     <p className="category">Here is a subtitle for this table</p>
      //   </div>
      //   <div className="content table-responsive table-full-width">
      //     <table className="table table-hover table-striped">
      //       <thead>
      //         <tr>
      //           <th>Name</th>
      //           {/* <th>Maximum Participants</th> */}
      //           <th>Event Start Date</th>
      //           {/* <th>Event End Date</th>
      //           <th>Event Description</th>
      //           <th>Organization</th> */}
      //           <th>Technology Stack</th>
      //           {/* <th>Criteria</th> */}
      //           <th>Action</th>
      //         </tr>
      //       </thead>
      //       <tbody>
      //         {this.state.events.map(function (event, index) {

      //           return <tr key={index}>
      //             <td><a><Link to={`/events/${event.NAME}`}>{event.NAME}</Link></a></td>
      //             {/* <td>{event.participants}</td> */}
      //             <td>{event.start_date}</td>
      //             {/* <td>{event.end_date}</td>
      //             <td>{event.description}</td>
      //             <td>{event.org}</td> */}
      //             <td>{event.tech}</td>
      //             {/* <td>
      //               <ul>
      //                 {event.criteria.map(function (crt, index) {
      //                   return <li key={index}>{crt}</li>
      //                 })}
      //               </ul></td> */}
      //               <td><button type="button" className="btn btn-xs btn-info btn-fill">Register</button></td>
      //           </tr>
      //         })}

      //       </tbody>
      //     </table>
      //   </div>
      // </div>
      <div>
       <h3> Thank you for enrolling !</h3> 
      {this.state.events.map(function (event, index) {
      
       return  <div className="col-md-4" key={index}>
      
          <div className="card">
            {/* <div style={{backgroundImage: "url(" + Background + ")"}}> */}
           
            <div className="header">
              <h4 className="title"><a><Link to={`/events/${event.NAME}`}>{event.NAME}</Link></a></h4>
              <p className="category"><b>Starts on:</b> {event.start_date}</p>
              <p className="category"><b>Technology Stack expected:</b> {event.tech}</p>
            
            <button type="button" className="btn btn-info btn-fill"><Link to={`/Register`} >Register</Link></button>
            </div>
          </div>
        </div>

        })}
      </div>
    //  </div>
      
    );
  }

  filterList() {
    let arra = this.state.events.filter(item => item.org === 'Wireless');

    this.setState({ events: arra });
  }
}



export default MyRegistry;
