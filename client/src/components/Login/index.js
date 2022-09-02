import React from 'react';

const Login = () => {
  return (
    <main className="w-100 mt-auto bg-secondary p-4">
      <form>
        <div>
          <h3>Log In</h3>
          <div>
            <label>Email:</label>
            <input
              type='email'
              placeholder='Enter Email'
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type='email'
              placeholder='Enter Password'
            />
          </div>
        </div>
      </form>
      <div className="container"></div>
    </main>
  );
};

export default Login;