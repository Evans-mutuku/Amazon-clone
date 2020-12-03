import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        //firebase login\
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/');
        }).catch(error => alert(error.message));
    }
    const register = e => {
        e.preventDefault();
        // firebase register
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            history.push('/');
            //console.log(auth);
        }).catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <Link to='/'>
              <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button onClick={signIn} type='submit' className="login__signInButton">Sign in</button>
                </form>
                <p>By signing-in you agree to the Amazon's Contitions of Use & Sale. Please see our Privacy Notice, our Cookie Notice and our Interest-Based Ads Notice</p>

                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
            
        </div>
    )
}

export default Login
