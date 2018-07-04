import React, { Component } from 'react';
import styles from '../Main/events.css';
import { Link ,Redirect} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';
// import Background from '../../assets/images/events.jpg';

class UploadSolutionComponent extends Component {
  constructor() {
    super();
    this.state = { submit:'',data:{} };
    this.filterList = this.filterList.bind(this);
  }
  componentDidMount() {
    // var List = [{name:"Hackathkghghjgon1",org :"Wireless"},{name:"Hackathon2",org :"Wireless4"},{name:"Hackathon3",org :"Wireline"}]

};

handleSubmit(e) {
   
       
    console.log('submitted');
   this.setState({submit:"done",data:{ _id:"5b3b62d2ca4aa9c842eec019",team_name :this.refs.teamid.value,
   solution:this.refs.sollink.value,
   code_zip:this.refs.coderepo.value,
   video:this.refs.demolink.value}},()=>{
       console.log('in call back');
    this.callApi().then(res => console.log('success response is',res))
    .catch(err => console.log(err));  
   });

    e.preventDefault();
}

callApi = async () => {
    
        
    const response = await fetch('http://10.74.17.159:4500/cyberarknode/teams',{method:'POST',headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state.data)
});
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };



  

  render() {
    if (this.state.submit === "done") {
        return <Redirect to='/uploadSuccess' />
      }
    return (
        <div className="">
            <div className="col-md-6">
                <div className="card">
                    <div className="content">
                        <form onSubmit={this.handleSubmit.bind(this)}>

                            <div className="form-group">
                                <label className="control-label">Team Name</label>
                                <Field 
                                    name="teamid"
                                    type="text" ref="teamid"
                                    component={renderField} />
                            </div>

                            <div className="form-group">
                                <label className="control-label">Code Repository Link</label>
                                <Field 
                                    name="coderepo"
                                    type="text" ref="coderepo"
                                    component={renderField} />
                            </div>

                            <div className="form-group">
                                <label className="control-label">Working Solution Link</label>
                                <Field 
                                    name="sollink"
                                    type="text" ref="sollink"
                                    component={renderField} />
                            </div>

                            <div className="form-group">
                                <label className="control-label">Project Demo Link</label>
                                <Field 
                                    name="demolink"
                                    type="text" ref="demolink"
                                    component={renderField} />
                            </div>

                           
                            {/* <Field
                    name="newsletter"
                    type="checkbox" ref="newsletter"
                    component={renderField}
                    label="Subscribe to newsletter" /> */}

                            <button type="submit" className="btn btn-fill btn-info" >Submit</button>
                        </form>
                    </div>
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



export default (reduxForm({
    form: 'hackForm',
})(UploadSolutionComponent));
