import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';
import { SingleDatePicker, DateRangePicker } from 'react-dates';
import moment from 'moment';

class CreateHackathon extends Component {

    constructor() {
        super();
        this.state = {
            date: moment(),
            startDate: moment(),
            endDate: moment(),
            dateRangeFocusedInput: null,
            newHack:{}
          };
    }

    state = {
        response: ''
      };
    
      componentDidMount() {
        
      }

      callApi = async () => {
        
        const response = await fetch('http://10.74.17.159:4500/cyberarknode/hacks',{method:'POST',headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.newHack)
    });
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
    
        return body;
      };
    
   

    

    handleSubmit(e) {
       
       
        this.setState({
            newHack:{
                hack_id :"3", 
                NAME: this.refs.hackName.value,
                description:this.refs.hackDesc.value,
                participants: this.refs.teamsize.value,
                start_date: this.state.startDate.format("MM/DD/YYYY"),
                end_date: this.state.endDate.format("MM/DD/YYYY"),
                tech: this.refs.stack.value,
                criteria:this.refs.criteria.value.indexOf(',') !== -1 ? this.refs.criteria.value.split(',') :[this.refs.criteria.value],
                admin_id:  this.refs.admins.value
            }
        },() => {
            //this.callApi(this.state.newHack);
            console.log('current styate',this.state.newHack);
            this.callApi().then(res => console.log('success response is',res))
            .catch(err => console.log(err));
        });
       

        e.preventDefault();
    }

    render() {
         let { date } = this.state;
        return (
            <div className="">
                <div className="col-md-6">
                    <div className="card">
                        <div className="content">
                            <form onSubmit={this.handleSubmit.bind(this)}>
                                <div className="form-group">
                                    <label className="control-label">Hackathon Name</label>
                                    <Field 
                                        name="hackName"
                                        type="text" ref="hackName"
                                        component={renderField} />
                                </div>

                                <div className="form-group">
                                    <label className="control-label">Hackathon Description</label>
                                    <Field 
                                        name="hackDesc"
                                        type="text" ref="hackDesc"
                                        component={renderField} />
                                </div>

                                <div className="form-group">
                                    <label className="control-label">Event Date Range</label>
                                    <DateRangePicker ref="datepick"
                                        startDate={this.state.startDate}
                                        endDate={this.state.endDate}
                                        focusedInput={this.state.dateRangeFocusedInput}
                                        onFocusChange={focusedInput => this.setState({dateRangeFocusedInput: focusedInput})}
                                        onDatesChange={({startDate, endDate}) => this.setState({startDate, endDate})} />
                                        
                                    {/* <Field
                                        name="startDate"
                                        type="text" ref="startDate"
                                        component={renderField} /> */}
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Maximum Participants Per Team</label>
                                    <Field
                                        name="teamsize"
                                        type="number" ref="teamsize"
                                        component={renderField} />
                                </div>

                                <div className="form-group">
                                    <label className="control-label">Technology Stack</label>
                                    <Field
                                        name="stack"
                                        type="text" ref="stack"
                                        component={renderField} />
                                </div>

                                <div className="form-group">
                                    <label className="control-label">Criteria</label>
                                    <Field
                                        name="criteria"
                                        type="text" ref="criteria"
                                        component={renderField} />
                                </div>

                                <div className="form-group">
                                    <label className="control-label">Admin IDs</label>
                                    <Field
                                        name="admins"
                                        type="text" ref="admins"
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
}

export default (reduxForm({
    form: 'hackForm',
})(CreateHackathon));





