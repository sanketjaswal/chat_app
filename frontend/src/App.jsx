// import { useState } from 'react'

import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import SignUp from "./pages/signup/signup";
import Login from "./pages/login/login";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  // const [count, setCount] = useState(0)
  const { authUser } = useAuthContext();

  return (
    <div className="p-4  h-screen flex items-center justify-center">
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <SignUp /> */}
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="login" />}
        />
        <Route
          path="login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
