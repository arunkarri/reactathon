import React, { Component } from 'react';
import { Link, Switch } from 'react-router-dom'



class EventDesc extends Component {
  constructor() {
    super();
    this.state = { events: [],event:'' };
  }
  componentDidMount() {
    // var List = [{name:"Hackathkghghjgon1",org :"Wireless"},{name:"Hackathon2",org :"Wireless4"},{name:"Hackathon3",org :"Wireline"}]

    var name = this.props.match.params.name;

    this.callApi()
      .then(res => {

        console.log(res);

        var obj = res.filter(function (obj) {
          return obj.NAME == name;
        });

        this.setState({ events: res,event: obj[0] }
          , () => {
            console.log(this.state.event.criteria);
          })


      })
      .catch(err => console.log(err));



  };



  callApi = async () => {
    const response = await fetch('http://10.74.17.159:4500/cyberarknode/hacks/');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="col-md-8">
        <div className="card">
          {/* <div style={{backgroundImage: "url(" + Background + ")"}}> */}
          <div className="header">
            <h4 className="title">Hackathons List</h4>
            <p className="category">Here is a subtitle for this table</p>
          </div>
          <div className="content table-responsive table-full-width">
            <table className="table table-hover table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Maximum Participants</th>
                  <th>Event Start Date</th>
                  <th>Event End Date</th>
                  <th>Event Description</th>
                  <th>Organization</th>
                  <th>Technology Stack</th>
                  <th>Criteria</th>
                </tr>
              </thead>
              <tbody>


                <tr >
                  <td>{this.state.event.NAME}</td>
                  <td>{this.state.event.participants}</td>
                  <td>{this.state.event.start_date}</td>
                  <td>{this.state.event.end_date}</td>
                  <td>{this.state.event.description}</td>
                  <td>{this.state.event.org}</td>
                  <td>{this.state.event.tech}</td>
                  {/* <td>
                    <ul>
                      {this.state.event.criteria.map(function (crt, index) {
                        return <li key={index}>{crt}</li>
                      })}
                    </ul>
                  </td> */}
                </tr>


              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}




export default EventDesc;
