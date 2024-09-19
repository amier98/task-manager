import { useState } from "react";
import { auth } from "../../services/authService";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    if (name === "email") {
      setEmail(e.currentTarget.value);
    }
    if (name === "password") setPassword(e.currentTarget.value);
  };

  const handleSubmit = () => {
    console.log("running");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        const user = userData.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(error);
      });
  };

  const handlePageChange = () => {
    navigate("/Login");
  };

  return (
    <div className="login-Container">
      Registration Form
      <input
        name="email"
        className="login--input"
        placeholder="email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        className="login--input"
        placeholder="password"
        onChange={handleChange}
      ></input>
      <button type="button" onClick={handleSubmit}>
        Register
      </button>
      <button type="button" onClick={handlePageChange}>
        Back to Login
      </button>
    </div>
  );
};

export default Registration;
