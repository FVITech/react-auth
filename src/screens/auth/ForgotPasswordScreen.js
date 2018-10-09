import React, { Component } from "react";
import { OutlinedInput } from '../../components/inputs';
import { OutlinedButton } from '../../components/buttons';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Logo from '../../images/logo.svg';

class ForgotPasswordScreen extends Component {
  state = {
    email: ''
  }

  onChange = (email, password) => {
    this.setState({
      email: email,
      password: password
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
              onChange={(e) => this.onChange(e.target.value, this.state.password)}
            />
          </div>

          <OutlinedButton
            text="Verify Email"
          />

          <div className="links-container">
            <Link to="/sign-in">Sign in</Link>
          </div>
        </Paper>
      </div>
    );
  }
}

export default ForgotPasswordScreen;