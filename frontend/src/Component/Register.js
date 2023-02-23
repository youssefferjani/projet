import React, {useState} from "react";
  import { useDispatch } from "react-redux";
  import { Link, useNavigate } from "react-router-dom";
import { register } from "../redux/Action/Authaction";
  export   const Register = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegister = (e) => {
      e.preventDefault();
      dispatch(register({ name, email, password }, navigate));
    };
    return (
<div className="auth-form-container">
<h2>Login</h2>
      <form className="register-form" >
      <label htmlFor="name">Full name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Name Lastname" id="Name Lastname" name="Name Lastname" />
      <label htmlFor="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
      <button onClick={handleRegister}>Log In</button>
      </form>
      <Link to='/Login'>
      <button className="link-btn"> Already have an account? Login here.</button>
      </Link>
      </div>
)
}