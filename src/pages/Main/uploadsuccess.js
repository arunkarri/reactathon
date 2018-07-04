


 import React, { Component } from 'react';
import styles from '../Main/events.css';
import { Link ,Redirect} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';
// import Background from '../../assets/images/events.jpg';

class UploadSuccessComponent extends Component {
  constructor() {
    super();
    this.state = { submit:'' };
    this.filterList = this.filterList.bind(this);
  }
  componentDidMount() {
    // var List = [{name:"Hackathkghghjgon1",org :"Wireless"},{name:"Hackathon2",org :"Wireless4"},{name:"Hackathon3",org :"Wireline"}]

};





  

  render() {
    
    return (
        <div><p color ="green">Upload success</p>
        <Link to={`/events`}>Back to Home</Link></div>
        
    );
  }

  filterList() {
    let arra = this.state.events.filter(item => item.org === 'Wireless');

    this.setState({ events: arra });
  }
}



export default UploadSuccessComponent;


