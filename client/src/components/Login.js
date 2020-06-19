import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    // make a POST request to the login endpoint
    // _if_ the creds match what's in the database, the server will return a JSON web token
    // set the token to localStorage (sessions)
    // navigate the user to the "/protected" route
    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then((res) => {
        // res.data.payload
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <div>
          <h1>Welcome to the Bubble App!</h1>
          <p>Build a login page here</p>

          <form onSubmit={this.login}>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
              placeholder="username"
            />

            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
              placeholder="password"
            />
            <button>Log in</button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
