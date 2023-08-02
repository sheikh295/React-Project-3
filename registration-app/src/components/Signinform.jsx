import React, { Component } from 'react'
import './Components.css'

class Signinform extends Component {
  constructor(props) {
    super(props)
    this.props = this.props;
  
    this.state = {
       
    }
  }

  render() {
    return (
      <>
        <div className='welcomeheading'>Welcome</div>
        <div className='sicontainer'>
            <form>
                <p className='sisuheading'>Please Sign In</p>
                <p className='siinputheading'>Email:</p>
                <input required name='email' type='email' className='siinput' placeholder='Email' />
                <p className='siinputheading'>Password:</p>
                <input required name='password' type='password' className='siinput' placeholder='Password' />
                <button type='submit' className='sisibtn'>Sign In</button>
            </form>
            <div><div className='siorline'></div><div className='sior'>or</div><div className='siorline'></div></div>
            <button className='sigmailbtn'>Login using Gmail</button>
            <button className='sifbbtn'>Login using Facebook</button>
            <div className='siaskacc'>Don't have an account? <a href='#' onClick={this.props.switch}> Sign Up</a></div>
        </div>
      </>
    )
  }
}

export default Signinform;