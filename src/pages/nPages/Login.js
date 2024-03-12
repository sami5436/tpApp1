import React, { useState } from 'react';
import './style/Login.css';

function Login() {
  const [action, setAction] = useState("Login");

  return (
    <>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      <div className='inputs'>
        {action === 'Login' ? null : (
          <>
            <div className='input'>
              <input type='text' placeholder='Name' />
            </div>
          </>

        )}
        <div className='input'>
          <input type='email' placeholder='Email' />
        </div>
        <div className='input'>
          <input type='password' placeholder='Password' />
        </div>
        {action === 'Sign Up' ? null : (
          <>
            <div className='forgot-password'>
          Forgot password? <span>Click here!</span>
        </div>
          </>

        )}
        
      </div>
      
      <div className='submit-container'>
        <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
        <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={() => { setAction("Login") }}>Login</div>
      </div>
      </>
  );
}

export default Login;
