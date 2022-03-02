import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './Firebase';

function Login() {
    const history = useHistory();
    // 1. get the track of the email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        // this code prevent refresh in our website
        e.preventDefault();

        // some fancy firebase login
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        }).catch(error => alert(error.message))

    }

    const register = e => {
        // this code prevent refresh in our website
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
                // it successfully create new user with
                // email and password
                // console.log(auth);

                // if user is created then take to the login page
                if (auth) {
                    history.push('/')
                }
            }).catch(error => alert(error.message))

    }


  return (
    <div className='login'>
        <Link to='./'>
            <img
            className='login__logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='header logo'/>
        </Link>

        <div className="login__container">
            <h1>Sign-in</h1>
            <form action="">
                <h5>E-mail</h5>
                {/* 1.2 match value with the email and connect them with state
                when value is entered a trigger gets hits */}
                <input type="text" value={email} onChange=
                {e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange=
                {e => setPassword(e.target.value)} />

                <button type='submit' onClick={signIn}
                className='login__signInButton'>Sign in</button>
            </form>

            <p>
                By signing0in you agree to the AMAZON FAKE
                CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice
                and our Interest-Based Ads Notice.
            </p>

            <button type='submit' onClick={register}
            className='login__registerButton'>Create you Amazon Account</button>
        </div>
    </div>
  )
}

export default Login