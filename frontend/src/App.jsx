// import { useState } from 'react'

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import SignUp from "./pages/signup/signup";
import Login from "./pages/login/login";
import { Toaster } from "react-hot-toast";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="p-4  h-screen flex items-center justify-center">
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <SignUp /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
