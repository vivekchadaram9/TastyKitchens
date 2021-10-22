import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    isPasswordVisible: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set(
      'jwt_token',
      {jwtToken},
      {
        expires: 30,
      },
    )
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
    const {history} = this.props
    history.replace('/')
  }

  onClickCheckbox = () => {
    this.setState(prev => ({isPasswordVisible: !prev.isPasswordVisible}))
  }

  renderPasswordField = () => {
    const {password, isPasswordVisible} = this.state
    return (
      <>
        <label className="input-label" htmlFor="pass">
          PASSWORD
        </label>
        <div className="password-container">
          <input
            type="password"
            id="pass"
            className="password-input-field"
            value={password}
            onChange={this.onChangePassword}
          />
          {isPasswordVisible && (
            <input
              type="text"
              id="pass"
              className="password-input-field"
              value={password}
              onChange={this.onChangePassword}
            />
          )}
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="show-password"
            checked={isPasswordVisible}
            onChange={this.onClickCheckbox}
            className="eye-check"
          />
          <label htmlFor="show-password" className="input-label">
            Show Password
          </label>
        </div>
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://res.cloudinary.com/dpnobkqmw/image/upload/v1634189323/Group_7420_p9exzb.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <h1 className="heading">Tasty Kitchens</h1>
          <h1 className="login-heading">Login</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">{errorMsg}</p>}
        </form>
        <img
          src="https://res.cloudinary.com/dpnobkqmw/image/upload/v1634137911/Rectangle_1456_nvq8gh.png"
          className="login-image"
          alt="website login"
        />
      </div>
    )
  }
}

export default Login
