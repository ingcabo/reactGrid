import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import '../global/css/Login.css'

class Home extends Component {

  signup(){

  }

  render(){

    const responseFacebook = (response) => {
      console.log(response);
    };

    const responseGoogle = (response) => {
      console.log(response);
    };
    return(
      <div className="Home">
        <h1>Inicio</h1>
        <GoogleLogin
         clientId="329426324334-4r5qqkfmsvu5kn6992e5fp6rbo5ldmgb.apps.googleusercontent.com"
         buttonText="Login with Google"
         className="loginBtn loginBtn--google"
         onSuccess={responseGoogle}
         onFailure={responseGoogle}
        />

        <FacebookLogin
            appId="2081616701854873"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="loginBtn loginBtn--facebook"
            

        />
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    redirect : state.redirect
  }
};

const mapDispatchToProps = dispatch => {
  return {

    }
  };


export default connect(mapStateToProps, mapDispatchToProps)(Home);
