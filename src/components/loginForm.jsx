import React, { Component } from 'react';
import InputField from './common/inputField';

class LoginForm extends Component {
    state={
        account: {username: "", password:""},
        errors: {
           
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //call the server here
    }

    //handleChange = (e) => {
    handleChange = ({ currentTarget: input}) => {
        const account = {...this.state.account};
        console.log(account);
        //e.currentTarget returns our input field and then grab the .value from it
        //if you want to grab the name of the input field dynamically, set a "name" property
        //on the input field and then grab the name out of the event with an e.currentTarget.name
        account[input.name] = input.value;
        console.log(account.username, account.password);
        //then update the state with the new object and values
        this.setState({account});
    }

    render() { 
        //object destructuring for the account object
        const {account} = this.state;

        return ( 
        <div>
            <h1>Login</h1>
            {/* form>div.form-group>label+input.form-control */}

            <form onSubmit={this.handleSubmit}>
                <InputField value={account.username} name="username" label="Username" onChange={this.handleChange}/>
                <InputField value={account.password} name="password" label="Password" onChange={this.handleChange}/>
                <button className="btn btn-primary">Login</button>
            </form>   
        </div> 
        );
    }
}
 
export default LoginForm;