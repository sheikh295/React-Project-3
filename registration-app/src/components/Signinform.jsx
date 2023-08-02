import React, { Component } from 'react'
import './Components.css'

class Signinform extends Component {
  render() {
    return (
      <>
        <div className='siwelcomeheading'>Welcome</div>
        <div className='sicontainer'>
            <form>
                <p className='siheading'>Please Sign In</p>
                <p className='siemailheading'>Email:</p>
                <input required name='email' type='email' className='siemail' placeholder='Email' />
                <p className='sipasswordheading'>Password:</p>
                <input required name='password' type='password' className='sipassword' placeholder='Password' />
                <button type='submit' className='sisibtn'>Sign In</button>
            </form>
            <button className='sigmailbtn'>Login using Gmail</button>
            <button className='sifbbtn'>Login using Facebook</button>
        </div>
      </>
    )
  }
}

export default Signinform;