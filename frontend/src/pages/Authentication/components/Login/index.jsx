import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import "./style.css";


const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validateLogin = () => {
    if (!identifier) {
      setError(true);
      setErrorMessage("Invalid username or email");
      return;
    }
    if (password.length < 8) {
      setError(true);
      setErrorMessage("Password must be at least 8 characters");
      return;
    }

    fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          localStorage.setItem("token", data.authorisation.token);
          toast.success("Login successful");
          navigate("/Home");
        } else {
          setError(true);
          setErrorMessage("Incorrect username or password");
        }
      })
      .catch((error) => {
        toast.error("Something went wrong");
        console.error(error);
      });
  };

  return (
      <div className="container">
        <div className="form-container">
          <h1>JURIA</h1>
          {error && <p className="error-message">{errorMessage}</p>}
          <div className="input-container">
            <Input
              type="text"
              placeholder="Username, or email"
              value={identifier}
              handleChange={(e) => setIdentifier(e.target.value)}
            />
          </div>
          <div className="input-container">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              handleChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-container">
            <Button text="Log in" handleClick={validateLogin} />
          </div>
        </div>
        <div className="signup-container">
          <p>Don't have an account?</p>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
  );
};

export default Login;
