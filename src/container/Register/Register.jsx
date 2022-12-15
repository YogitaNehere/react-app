import axios from "axios";
import React from "react";
import "./Register.scss";
import { CONSTANTS } from "../../utils/constants";

class Register extends React.Component{
    constructor(){
        super();
        this.state = {
            fullName: "",
            email: "",
            password:"",
            confirmPassword: ""
        }
    }
    // onNameChange = (e) => {
    //     this.setState({fullName: e.target.value});
    // };
    // onEmailChange = (e) => {
    //     this.setState({email: e.target.value});
    // };
    // onPasswordChange = (e) => {
    //     this.setState({password: e.target.value});
    // };
    // onConfirmPasswordChange = (e) => {
    //     this.setState({confirmPassword: e.target.value});
    // };

    onInputChange = (e) => {
        console.log(e.target.value);
        this.setState({[e.target.id] : e.target.value});
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        const formData = this.state;
        //Add validations here
        if(formData.fullName == ''){
            $('#error_fullName').html('Please enter the fullname.');
            return false;
        }
        // console.log('Form submited..'+this.state);
        //Call user Registration REST API
        
        axios.post(CONSTANTS.API_BASE_URL+'users', formData)
            .then((response) => {
                console.log(response.data);
                
            })
            .catch((error) => {
                console.log(error)
            })
    };

    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({fullName: "xyz"});
        // }, 10000);
    };


    render(){
        return (
            <div>
                <h2>Register Here</h2>
                <form onSubmit={this.onFormSubmit} className="registration-form">
                    <div>
                        <label htmlFor="fullName">Full Name</label>
                        <input value={this.state.fullName} onChange={this.onInputChange} id='fullName' type='text' />
                        <span className="error" id="error_fullName"></span>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input value={this.state.email} onChange={this.onInputChange} id='email' type='email' />
                    </div>
                    <div>
                        <label htmlFor="dob">DOB</label>
                        <input value={this.state.date} onChange={this.onInputChange} id='date' type='date' />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input value={this.state.password} onChange={this.onInputChange} id='password' type='password' />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <input value={this.state.confirmPassword} onChange={this.onInputChange} id='confirmPassword' type='password' />
                    </div>

                    <input type="submit" />
                </form>
            </div>
        )
    };
}

export default Register;