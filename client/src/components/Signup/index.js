import React, { useState } from "react";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";

const Signup = () => {
  const [signup, { error }] = useMutation(ADD_USER);
  const [formState, updateFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormSubmit = async (event) => {
    event.PreventDefault();
    try {
      const { response } = await signup({ variables: { ...formState } });
      Auth.signup(response.signup.token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <main className="w-100 mt-auto bg-secondary p-4">
      <form>
        <div>
          <h3>Sign Up</h3>
        </div>
        <div className="container"></div>
        <label>Username:</label>
        <input
          type="username"
          placeholder="Enter Username"
          name="username"
          value={formState.email}
          onChange={handleChange}
        />
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formState.email}
            onChange={handleChange}
          />
          <br></br>
          <button onClick={handleFormSubmit}>Submit</button>
        </div>
      </form>
    </main>
  );
};

export default Signup;
