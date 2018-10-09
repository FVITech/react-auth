import { server } from '../api';
import validate from '../methods/validate';

const USER = (dispatch) => ({
  onSignIn: (credentials) => {
    if (!validate.email(credentials.email)) {
      return alert('Invalid email. Please enter a valid email')
    }

    if (!validate.password(credentials.password)) {
      return alert('Invalid password. Please make sure the password contains a lowercase letter, a capital letter, a number and a minimum of 6 characters')
    }

    fetch(server + '/sign-in', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: "include",
      body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(response => {
      if (response.success) {
        dispatch({
          type: 'ON_UPDATE_USER',
          user: response.user
        })
      }
      else {
        alert(response.message);
      }
    })
    .catch(err => {
      alert(err.message);
    })
  },

  onUpdateUser: (user) => {
    dispatch({
      type: 'ON_UPDATE_USER',
      user: user
    })
  }
});

export default USER;