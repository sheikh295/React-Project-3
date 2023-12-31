import React, { Component } from 'react'
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import Signinform from './Signinform'
import Signupform from './Signupform'

const firebaseConfig = {
    apiKey: "AIzaSyCACf9_eNhYDRAIEJ9yzPciGkXjxTcRQIs",
    authDomain: "page-registraion.firebaseapp.com",
    projectId: "page-registraion",
    storageBucket: "page-registraion.appspot.com",
    messagingSenderId: "311872080716",
    appId: "1:311872080716:web:b27fcd60def2c761bbdde9"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


class App2 extends Component {
    constructor(props) {
        super(props)
        props = this.props;
        
        this.state = {
            // 0 = signin, 1 = signup
            page: 1,
            errormsg: "",
            isRegistered: 0,
            isSignedIn: 0,
        }
    }
    
    pageSwitchHandler = (event) => {
        event.preventDefault();
        this.setState({page : !this.state.page, errormsg: ""})
    };
    registrationHandler = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const password = event.target.password.value;
        const confirmpassword = event.target.confirmpassword.value;
        if (password !== confirmpassword) {
            this.setState({errormsg: "Confirm Password does not match"})
        }
        else {
            this.setState({errormsg: ""})
            createUserWithEmailAndPassword(auth, email, password, phone)
              .then((userCredential) => {
                const user = userCredential.user;
                this.setState({isRegistered: !this.state.isRegistered}, () => {
                  event.target.email.value = "";
                  event.target.phone.value = "";
                  event.target.password.value = "";
                  event.target.confirmpassword.value = "";
                })

              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                this.setState({errormsg: errorMessage})
              });
        };
    };

    signInHandler = (event) => {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          this.setState({isSignedIn: !this.state.isSignedIn});
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.setState({errormsg: errorMessage});
        });
      };

  render() {
    return (
      <>
        {this.state.page ? <Signupform isRegistered={this.state.isRegistered} errormsg={this.state.errormsg} switch={this.pageSwitchHandler} register={this.registrationHandler} /> : <Signinform switch={this.pageSwitchHandler} signin={this.signInHandler} isSignedIn={this.state.isSignedIn} errormsg={this.state.errormsg} />}
      </>
    )
  }
}

export default App2;