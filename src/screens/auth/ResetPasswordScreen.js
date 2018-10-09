import React, { Component } from "react";
import { OutlinedInput } from '../../components/inputs';
import { OutlinedButton } from '../../components/buttons';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Logo from '../../images/logo.svg';

class ResetPasswordScreen extends Component {
  state = {
    email: '',
    password: ''
  }

  onChange = (password, passwordConfirmation) => {
    this.setState({
      password: password,
      passwordConfirmation: passwordConfirmation
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
              id="password"
              type="password"
              label="Password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={(e) => this.onChange(e.target.value, this.state.passwordConfirmations )}
            />

            <OutlinedInput
              id="password-confirmation"
              type="password"
              label="Password Confirmation"
              placeholder="Enter Password Confirmation"
              value={this.state.passwordConfirmation}
              onChange={(e) => this.onChange(this.state.password, e.target.value)}
            />
          </div>

          <OutlinedButton
            text="Reset Password"
          />

          <div className="links-container">
            <Link to="/sign-in">Sign in</Link>
          </div>
        </Paper>
      </div>
    );
  }
}

export default ResetPasswordScreen;