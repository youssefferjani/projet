import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/Action/Authaction";
import "./Signup.css";
export const Login =() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }, navigate));
  }; 
  
  return (
        <div className="auth-form-container">
      <form className="login-form" >
      <label htmlFor="email">email</label>
        <input  onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">password</label>
        <input  onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
      <button className="btn-submit" onClick={handleLogin}>Log In</button>
      </form>
      <Link to='/register'>
      <button className="link-btn" >Don"t have an account? Register here.</button>
      </Link>
      </div>

    )
}