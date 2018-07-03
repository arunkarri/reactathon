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

    

    

    handleSubmit(e) {
       
        () => this.APICallFunction()
        this.setState({
            newHack:{
                name: this.refs.hackName.value,
                teamSize: this.refs.teamsize.value,
                tech: this.refs.stack.value,
                admin:  this.refs.admins.value
            }
        },() => {console.log('current styate',this.state)});



        console.log(this.refs.hackName.value);
        console.log(this.state.newHack);
        console.log(this.state.endDate._d);
        e.preventDefault();
    }

    render() {
         let { date } = this.state;
        return (
            <div className="row">
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
                                    <label className="control-label">Event Date Range</label>
                                    <DateRangePicker
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





