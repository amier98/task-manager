import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/authService";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    if (name === "email") {
      setEmail(e.currentTarget.value);
    }
    if (name === "password") setPassword(e.currentTarget.value);
  };

  const handleSignIn = () => {
    console.log("running");

    if (email.length === 0) {
      setError("Invalid email, please fill out field");
    }

    if (password.length === 0) {
      setError("Invalid password, please fill out field");
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        //will use this later
        const user = userData.user;
        console.log(user);
        navigate("/Dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  const handlePageChange = (e: FormEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name;
    if (name === "register") {
      navigate("/Registration");
    } else {
      navigate("/Dashboard");
    }
  };

  return (
    <div className="login-Container">
      Log In
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
      <div>{error}</div>
      <div className="button-Container">
        <button name="register" type="button" onClick={handlePageChange}>
          Sign Up
        </button>
        <button name="login" type="button" onClick={handleSignIn}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
