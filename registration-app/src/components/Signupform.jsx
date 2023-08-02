import React, { Component } from 'react'
import './Components.css'
import './Successfullyregistered.jsx'
import Successfullyregistered from './Successfullyregistered.jsx';

class Signupform extends Component {
  constructor(props) {
    super(props)
    props = this.props;
    this.state = {

    }
  }

  render() {
    return (
      <>
        {this.props.isRegistered ? <Successfullyregistered switch={this.props.switch} /> : ""}
        <div className='welcomeheading'>Welcome</div>
        <div className='sucontainer'>
            <form onSubmit={this.props.register}>
                <p className='sisuheading'>Create Your Account</p>
                <p className='suinputheading'>Email:</p>
                <input required name='email' type='email' className='suinput' placeholder='Email' />
                <p className='suinputheading'>Phone:</p>
                <input required name='phone' type='number' className='suinput' placeholder='Your Phone No.' />
                <p className='suinputheading'>Password:</p>
                <input required name='password' type='password' className='suinput' placeholder='Password' />
                <p className='suinputheading'>Confirm Password:<a className='errormsg'>{this.props.errormsg}</a></p>
                <input required name='confirmpassword' type='password' className='suinput' placeholder='Confirm your Password' />
                <button type='submit' className='sisibtn'>Sign up</button>
            </form>
            <div><div className='siorline'></div><div className='sior'>or</div><div className='siorline'></div></div>
            <button className='sigmailbtn'>Sign Up using Gmail</button>
            <button className='sifbbtn'>Sign Up using Facebook</button>
            <div className='siaskacc'>Already have an account? <a href='#' onClick={this.props.switch}> Sign In</a></div>
        </div>
      </>
    )
  }
}

export default Signupform;