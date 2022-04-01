import React from "react";



class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    const { username, password } = this.state;
    event.preventDefault();
    console.log(this.state);
    
  };

  render() {
    return (
      <div className="form-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-field-position-one">
            <input
              className="input-field"
              type="text"
              label="username"
              placeholder="username"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              className="input-field"
              type="password"
              label="password"
              placeholder="password"
              onChange={this.handleChange}
            />
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default LoginForm;
