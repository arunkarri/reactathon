import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Main/events.css';

class MyRegistry extends Component{
    constructor(){
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
          <div>
          {this.state.events.map(function (event, index) {
           return 
          
           <div className="col-md-4">
              <div className="card">
              <p style="color:green;">Thanks for registering to {event.NAME}</p>
                <div className="header">
                  <h4 className="title"><a><Link to={`/events/${event.NAME}`}>{event.NAME}</Link></a></h4>
                  <p className="category"><b>Starts on:</b> {event.start_date}</p>
                  <p className="category"><b>Technology Stack expected:</b> {event.tech}</p>
                
                <button type="button" className="btn btn-info btn-fill">Register</button>
                </div>
              </div>
            </div>
    
            })}
          </div>
        );
  }
  filterList() {
    let arra = this.state.events.filter(item => item.org === 'Wireless');

    this.setState({ events: arra });
  }
}

export default MyRegistry ;