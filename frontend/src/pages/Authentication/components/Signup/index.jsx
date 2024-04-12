import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); 
  
  const validateSignup = async () => {
    const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!regex.test(email)) {
      setError(true);
      setErrorMessage("Invalid email");
      return;
    }
    if (username.length < 6) {
      setError(true);
      setErrorMessage("Username must be at least 6 characters");
      return;
    }
    if (fullName.split(" ").length < 2) {
      setError(true);
      setErrorMessage("Full name cannot be 1 word");
      return;
    }
    if (password.length < 8) {
      setError(true);
      setErrorMessage("Password must be at least 8 characters");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          full_name: fullName,
          username,
          password,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        if (responseData.status) {
          toast.success("Signup successful");
          navigate("/home");
        } else {
          setError(true);
          setErrorMessage("User already exists");
        }
      } else {
        setError(true);
        setErrorMessage("Something went wrong...");
      }
    } catch (error) {
      setError(true);
      setErrorMessage("Something went wrong...");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>JURIA</h1>
        {error && (
          <p className="error-message">{errorMessage}</p>
        )}
        <div className="input-container">
          <Input
            type="text"
            placeholder="Email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <Input
            type="text"
            placeholder="Full Name"
            value={fullName}
            handleChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            handleChange={(e) => setUsername(e.target.value)}
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
          <Button text="Signup" handleClick={validateSignup} />
        </div>
      </div>
      <div className="signup-container">
        <p>Have an account?</p>
        <Link to="/">Sign in</Link>
      </div>
    </div>
  );
};

export default Signup;
