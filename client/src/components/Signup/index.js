import React from 'react';

const Signup = () => {
  return (
    <main className="w-100 mt-auto bg-secondary p-4">
      <form>
        <div>
          <h3>Sign Up</h3>
        </div>
      </form>
      <div className="container"></div>
      <label>Username:</label>
      <input
        type="username"
        placeholder='Enter Username'
      />
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
          type='password'
          placeholder='Enter Password'
        />
        <br></br>
        <button>Submit</button>
      </div>
    </main>
  );
};

export default Signup;