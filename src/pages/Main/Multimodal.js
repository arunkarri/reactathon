
import React, { Component} from 'react';
import styles from '../Main/events.css';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import Modal from './modal';

// import Background from '../../assets/images/events.jpg';

class ViewSolutionComponent extends Component {
  constructor() {
    super();
    

    this.state = { teams: [],show:'',isOpen: false};
    this.filterList = this.filterList.bind(this);
   // this.handleClick = this.handleClick.bind(this);
   // this.handleClose = this.handleClose.bind(this);
   
   
  } 
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleClick = () => { this.setState({isShowingModal: true})}
  handleClose  = () =>{  this.setState({isShowingModal: false})}
  componentDidMount() {
    // var List = [{name:"Hackathkghghjgon1",org :"Wireless"},{name:"Hackathon2",org :"Wireless4"},{name:"Hackathon3",org :"Wireline"}]
    
    this.callApi()
    .then(res => 
      {
        
      console.log(res); 
      this.setState({ teams: res })
      })      
    .catch(err => console.log(err));

};

callApi = async () => {
    // fetch('http://localhost:4500/cyberarknode/hacks')
    const response = await fetch('http://localhost:4500/cyberarknode/teams');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

handleSubmit(e) {
       
       
    console.log('submitted');
   

    e.preventDefault();
}

showPopup(){
    this.setState({show:true})
}



  

render() {
   
    return (
        <div className="">
         
          <div className="card">
            {/* <div style={{backgroundImage: "url(" + Background + ")"}}> */}
            <div className="header">
              <h4 className="title">Teams List</h4>
            </div>
            <div className="content table-responsive table-full-width">
              <table className="table table-hover table-striped">
                <thead>
                  <tr>
                    <th>Team name</th>
                    <th>Solution Url</th>
                    <th>Video url</th>
                    <th>Working app url</th>
                  </tr>
                </thead>
                <tbody>
  
  
                {this.state.teams.map(function (event, index) {

           return (<tr key={index}>
                    <td>{event.team_name}</td>
                    <td><a>{event.solution}</a></td>
                    <td><a>{event.code_zip}</a></td>
                    <td><a>{event.video}</a></td>
                    <td><button type="button"  className="btn btn-xs btn-info btn-fill" onClick={this.toggleModal}>Give Score
                      
     </button> </td>
       
                    
                  </tr>
           );
                })}
  
  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
  }

  filterList() {
    let arra = this.state.events.filter(item => item.org === 'Wireless');

    this.setState({ events: arra });
  }
}



export default ViewSolutionComponent;

