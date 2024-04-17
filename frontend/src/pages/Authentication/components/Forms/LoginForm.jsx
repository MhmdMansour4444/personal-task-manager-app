import React from "react";
import { useDispatch } from "react-redux";
import { updateInput } from "../../../../redux/authSlice";

const LoginForm = (validateLogin) => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="form-container">
        <h1>JURIA</h1>
        <div className="input-container">
          <input
            type="text"
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
          <button onClick={validateLogin}> Login </button>
        </div>
      </div>
      
    </div>
  );
};

export default LoginForm;
