import React from 'react';
import AppBar from 'material-ui/AppBar';
import {green500} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



const style = {
  barstyle:{'background-color':green500}
}

const Login = ({}) => (
  <div className="loginScreen">
    <AppBar
      className="fluid"
      title='The Pokemon Center'
      style={style.barstyle}
    />

    <TextField
      hintText="Enter your Username"
      floatingLabelText="Username"
 // onChange = {(event,newValue) => this.setState({username:newValue})}
 />
    <br/>
     <TextField
       type="password"
       hintText="Enter your Password"
       floatingLabelText="Password"
       // onChange = {(event,newValue) => this.setState({password:newValue})}
       />
     <br/>
        <RaisedButton
          label="Login"
          primary={true}
          onClick={(event) => this.handleClick(event)}/>
      <br/>
      <br/>
      <RaisedButton
        label="Forgot Password"
        primary={true}
        onClick={(event) => this.handleClick(event)}/>

  </div>
);

export default Login;
