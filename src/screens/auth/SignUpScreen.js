import React, { Component } from "react";
import { OutlinedInput, OutlinedSelect, DateSelector } from '../../components/inputs';
import { OutlinedButton } from '../../components/buttons';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Logo from '../../images/logo.svg';
import moment from 'moment';

class SignUpScreen extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    birthday: moment(),
    gender: ''
  }

  onChange = ({email, password, name, birthday, gender}) => {
    this.setState({
      email: email,
      password: password,
      name: name,
      birthday: birthday,
      gender: gender
    });
  }

  render() {
    return (
      <div className="sign-in-screen">
        <Paper className="form-container" elevation={1}>
          <div className="logo-container">
            <img src={Logo} height="200" width="200" alt="logo" />
          </div>

          <div>
            <OutlinedInput
              id="email"
              type="text"
              label="Email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={(e) => this.onChange({
                ...this.state, 
                email: e.target.value
              })}
            />

            <OutlinedInput
              id="password"
              type="password"
              label="Password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={(e) => this.onChange({
                ...this.state,
                password: e.target.value
              })}
            />

            <OutlinedInput
              id="name"
              type="text"
              label="Name"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={(e) => this.onChange({
                ...this.state,
                name: e.target.value
              })}
            />

            <DateSelector
              id="birthday"
              label="Birthday"
              placeholder="Enter Birthday"
              value={this.state.birthday}
              onChange={(date) => this.onChange({
                ...this.state,
                birthday: date
              })}
            />

            <OutlinedSelect
              id="gender"
              type="text"
              label="Gender"
              placeholder="Enter Gender"
              value={this.state.gender}
              options={[
                {
                  label: 'Female',
                  value: 'female'
                },
                {
                  label: 'Male',
                  value: 'male'
                }
              ]}
              onChange={(e) => this.onChange({
                ...this.state,
                gender: e.target.value
              })}
            />
          </div>

          <OutlinedButton
            text="Login"
          />

          <div className="links-container">
            <Link to="/sign-in">Sign in</Link>
          </div>
        </Paper>
      </div>
    );
  }
}

export default SignUpScreen;