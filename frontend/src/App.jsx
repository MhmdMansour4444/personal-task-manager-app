import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Auth from "./pages/Authentication/Auth";
import Home from "./pages/Home/index";

import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />}></Route>
          <Route path="/homepage" element={<Home />}></Route>
          
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
