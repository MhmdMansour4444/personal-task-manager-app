import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignupForm from "../Authentication/components/Forms/SignupForm";
import LoginForm from "../Authentication/components/Forms/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import {
  authSliceName,
  switchRegister,
  switchSignin,
} from "../../redux/authSlice";
import "./style.css";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { username, email, password, isLogin } = useSelector((global) => {
    return global[authSliceName];
  });

  const validateForm = () => {
    if (!username || !email || !password) {
      toast.error("Please fill in all fields");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const validateLoginForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email && !password) {
      toast.error("please fill in both fields");
      return false;
    } else if (!email) {
      toast.error("please enter your email");
      return false;
    } else if (!password) {
      toast.error("please enter your password");
      return false;
    }
    return true;
  };

  const register = async () => {
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        body: JSON.stringify({
          email,
          username,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("User Signed up successfully");
        toast.success("User Signed up successfully");
        dispatch(switchSignin());
      } else {
        console.log("Registration failed");
        toast.error("Registration failed");
      }
    } catch (error) {
      console.log("Error occurred during registration", error);
      toast.error("Error occurred during registration");
    }
  };

  const handleLogin = async () => {
    if (!validateLoginForm()) return;
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", JSON.stringify(data.token));
        toast.success("Login successful");
        navigate("/homepage");
      } else {
        console.log("Failed to login");
        toast.error("Failed to login");
      }
    } catch (error) {
      console.log("Error occured during registration", error);
      toast.error(error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="form-wrapper">
        {isLogin ? (
          <LoginForm handleSignin={handleLogin} />
        ) : (
          <SignupForm register={register} />
        )}

        <div className="switcher">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span
              className="button-switcher"
              onClick={() => {
                isLogin ? dispatch(switchRegister()) : dispatch(switchSignin());
              }}
            >
              {isLogin ? " Sign up" : "Sign in"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
