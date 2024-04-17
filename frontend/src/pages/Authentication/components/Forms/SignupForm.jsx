import React from "react";
import { useDispatch } from "react-redux";
import { updateInput } from "../../../../redux/authSlice";

const SignupForm = ({ register }) => {
  const dispatch = useDispatch();

  const handleSignup = () => {
    register();
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>JURIA</h1>
        <div className="input-container">
          <input
            placeholder="Email"
            onChange={(e) => {
              const change = updateInput({
                key: "email",
                value: e.target.value,
              });
              dispatch(change);
            }}
          />
        </div>
        <div className="input-container">
          <input
            placeholder="Username"
            onChange={(e) => {
              const change = updateInput({
                key: "username",
                value: e.target.value,
              });
              dispatch(change);
            }}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              const change = updateInput({
                key: "password",
                value: e.target.value,
              });
              dispatch(change);
            }}
          />
        </div>
        <div className="button-container">
          <button onClick={handleSignup} >SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
