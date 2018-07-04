 import React,{ Component } from 'react';
 import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';
import {Link} from 'react-router-dom';
 

 class Register extends Component{

    constructor(){
        super();
        this.state= {
            events :[],
            response : [],
            hackResponse : {}
         
        };  
    }

    
    state = {
       
      };

    componentDidMount(){
          
        this.callHackApi()
        .then(res => this.setState({ hackResponse: res }))
        
        .catch(err => console.log(err));
        
             
        
     }
     
      callHackApi = async () => {
        const response = await fetch('http://10.74.17.159:4500/cyberarknode/hacks/5b3b5c69ca4aa9c842eec017'); //this.props.match.params.hackid
        const body = await response.json();
       console.log('hackresponse',body);
        if (response.status !== 200) throw Error(body.message);
    
        return body;
      };

      onSubmit = async (input) => {
          console.log('input',input);
       const response = await fetch('http://10.74.17.159:4500/cyberarknode/teams/',{
            method: 'POST',
            body: JSON.stringify(input),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            } 
        })
        const body = await response.json();
        console.log('teamresponse', body);
        if (response.status !== 200) throw Error(body.message);
    
        return body;
      };

      handleSubmit(e) {
       
        () => this.APICallFunction()
        var participants = this.refs.member2.value +',' + this.refs.member3.value + ',' + this.refs.member4.value + ',' + this.refs.member5.value ;
        this.setState({
             newHack:{
                team_name: this.refs.teamName.value,
                contact_no: this.refs.captainContact.value,
                participant_names : participants,
                hack_id: this.state.hackResponse.hack_id,
            }
        },() => {
            this.onSubmit(this.state.newHack)
            .then(res => this.setState({ response: res }))
              .catch(err => console.log(err));
        });

        e.preventDefault();
    }


     render(){
         return (
            
            <div className="col-md-6">
                <div className="card">
                    <div className="content">
                    <div>
                    <h4 >Register For {this.state.hackResponse.NAME} </h4>
                    <h6>Starts on  {this.state.hackResponse.start_date} And Ends On {this.state.hackResponse.end_date}</h6>
                    </div>
                      


                     <form name="RegistrationForm" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group">
                            <label className="control-label">Enter your team name :</label>
                            <Field type="text" name="teamName" ref="teamName" component={renderField}/>
                        </div>
                       <div className="form-group">
                            <label className="control-label">Enter your team size : </label>
                           <Field type="number" name="teamSize" ref="teamSize" component={renderField} />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Team Captain: </label>
                            <Field type="text" name="teamsize" ref="teamCaptain" component={renderField} />
                        </div>
                        <div className="form-group">
                            <label className="control-label"> Captain Contact: </label>
                            <Field type="number" name="captainContact" ref="captainContact" component={renderField} />
                        </div>
                        <div className="form-group">
                            <label className="control-label"> Team Member 2: </label>
                            <Field type="text" name="member2" ref="member2" component={renderField} />
                        </div>
                        <div className="form-group">
                            <label className="control-label"> Team Member 3: </label>
                            <Field type="text" name="member3" ref="member3" component={renderField} />
                        </div>
                        <div className="form-group">
                            <label className="control-label"> Team Member 4: </label>
                            <Field type="text" name="member4" ref="member4" component={renderField} />
                        </div>
                        <div className="form-group">
                            <label className="control-label"> Team Member 5: </label>
                            <Field type="text" name="member5" ref="member5" component={renderField} />
                        </div>
                        <div className="form-group">
                            <label className="control-label"> Captain Email: </label>
                            <Field type="text" name="emailAddress" ref="emailAddress" component={renderField} />
                        </div> 
                        <button type="submit" className="btn btn-fill btn-info" ><Link to={`/register/5b3b5c69ca4aa9c842eec017`}>Submit</Link></button>
                    </form>
                </div>
            </div>
        </div>
         );
     }
 }

 export default (reduxForm({
    form: 'RegistrationForm',
})(Register));






