import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    fullname,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors(
      fullname,
      username,
      password,
      confirmPassword,
      gender
    );

    if (!success) return;

    setLoading(true);
    try {
      const res = await axios.post(`/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "appplication/json" },
        body: JSON.stringify({
          fullname,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      console.log(res);

      const data = await res.json();
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};
export default useSignUp;

function handleInputErrors(
  fullname,
  username,
  password,
  confirmPassword,
  gender
) {
  if (!fullname || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords dont match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password too weak");
    return false;
  }

  return true;
}
