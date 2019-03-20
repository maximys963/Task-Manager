import React, {Component} from 'react';
import { Button, Form} from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as login_actions from '../../action_creators/login_ac'
import './login-form.css'

class LoginForm extends Component {

  validation = (element) => {

    const { nameError,
          passwordError,
          validatedName,
          validatedPassword} = this.props
    if(element.placeholder === 'username'){
      if(element.value === 'admin'){
       nameError(false)
       validatedName(true)       
      }else{
        nameError(true)
      }
    }else if(element.placeholder === 'password'){
      if(element.value === '123'){
        passwordError(false)
        validatedPassword(true)
      }else{
        passwordError(true)
        
      }
    }
  }

  loginToggle = () => {
    const {nameDidValidated, passwordDidValidated, logedAsAdmin } = this.props
    console.log(nameDidValidated);
    console.log(passwordDidValidated);
    if(nameDidValidated && passwordDidValidated){
      console.log('you are logged');
      logedAsAdmin()
    }
  }
  
  render(){ 
  const {changeUsername,
        changePassword,
        username,
        password,
        invalidName,
        invalidPassword,
        } = this.props;    
    return(
        <Form className='login-container'>
        <Form.Field>
        <label>User name</label>
        <input 
        placeholder='username'
        value={username}
        onChange={e => changeUsername(e.target.value)}
        onBlur={e => this.validation(e.target)}/>
        </Form.Field>
        <div style={{color: 'tomato'}}>
        {
          invalidName ? 'invalid user' : null    
        }        
        </div>
        <Form.Field>
        <label>Password</label>
        <input 
        value={password}
        placeholder='password'
        type='password'
        onChange={e => changePassword(e.target.value)}
        onBlur={e => this.validation(e.target)}/>
        <div style={{color: 'tomato'}}>
        {
          invalidPassword ? 'invalid password' : null    
        }        
        </div>
        </Form.Field>
        <Button 
        basic 
        color='green'
        className='login-button'
        type='submit'
        onClick={this.loginToggle}
        >Log In</Button>
      </Form>
    )}
}

const mapStateToProps = (state) => ({
  username: state.login.user,
  password: state.login.password,
  invalidName: state.login.nameError,
  invalidPassword: state.login.passwordError,
  nameDidValidated: state.login.nameDidValidated,
  passwordDidValidated: state.login.passwordDidValidated
})

export default connect(mapStateToProps, login_actions)(LoginForm);