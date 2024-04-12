import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Auth from "./pages/Authentication";
import "./App.css";
import Login from "./pages/Authentication/components/Login";
import Signup from "./pages/Authentication/components/Signup";

function App() {
  const [user, setUser] = React.useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route
          path="/"
          element={<Auth user={user} handleLogin={handleLogin} />}
        >
          <Route index element={<Login handleLogin={handleLogin} />} />
          <Route path="Signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
