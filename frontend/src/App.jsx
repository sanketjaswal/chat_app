// import { useState } from 'react'

import "./App.css";
import Home from "./pages/home/home";
// import SignUp from "./pages/signup/signup";
// import Login from "./pages/login/login";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="p-4  h-screen flex items-center justify-center">
      {/* <Login /> */}
      <Home />
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
