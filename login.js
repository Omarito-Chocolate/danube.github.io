/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-undef */
import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom';
import { auth } from "./firebase";




function login() {

// eslint-disable-next-line react-hooks/rules-of-hooks
const [email, setEmail] = useState('');
// eslint-disable-next-line react-hooks/rules-of-hooks
const [password, setPassword] = useState('');

const signIn = e => {
e.preventDefault();
}

const register = e => {
    e.preventDefault();

   auth
       .createUserWithEmailAndPassword(email, password)
       .then((auth) => {
           console.log(auth);
        
       })
.catch(error => alert(error.message))
}



    return (
        <div
            className='login'>
                <Link to= '/'>
                <img
                className="login_logo"
                src='https://orientale.it/en/wp-content/uploads/2020/05/amazon-logo-png-4.png' alt='' />
                </Link>
                <div className="login_container">
                    <h1>Sign In</h1>
                    <form>
                        <h5>E-mail</h5>
                        <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                        // eslint-disable-next-line react/jsx-no-comment-textnodes
                        <h5>Password</h5>
                        // eslint-disable-next-line no-undef
                        // eslint-disable-next-line no-undef
                        <input type='password' value={password} onChange={e => setPassword(e,target.value)} />

                    
                        <button type='submit' onClick={signIn}
                        className='login_signInButton'>Sign In</button>
                    </form>
                    <p>
                        By Signing-in you agree to Amazon's conditions of Use & Sale. Please see our Privacy Notice and our Interest-Based Ads Notice.
                        
                    </p>
                    <button onClick={register}
                    className='login_registerButton'>Create your Amazon Account</button>
            
                </div>
        </div>
    )
}

export default login
