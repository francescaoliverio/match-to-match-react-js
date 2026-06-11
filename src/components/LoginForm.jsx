// src/components/LoginForm.jsx

import { useNavigate, Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";

// icons for password visibility
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// icon for errors
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

const inputStyle = "flex items-center px-5 py-2.5 w-full rounded-full bg-white text-tertiary focus:outline-none focus:ring-2 ring-transparent-secondary shadow-md shadow-dark-overlay disabled:cursor-default"

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(null);

  async function submitForm(e) {
    // prevent default action when button is clicked
    e.preventDefault();
    setLoginError(null);

    // UseRef to get input values when button is clicked
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      // fetch: in const "res" save response from API (promise)
      const res = await fetch(`/api/users?email=${email}`);      
      if (!res.ok) throw new Error("Errore di connessione al server");
      // resolve promise, than convert "res" to json
      const usersFound = await res.json();
      // print usersFound to console
      console.log("Users found:", usersFound);
      // check if user is found and password matches
      if (usersFound.length === 0 || usersFound[0].password !== password) {
        throw new Error("Email o password errati. Riprova.");
      }
      // if all good, save logged in user and go to profile
      const loggedInUser = usersFound[0];
      login(loggedInUser);
      navigate("/profile");
    } catch (error) {
      setLoginError(error.message);
      console.error(error);
    }
  }

  return (
    <div className="w-xs flex flex-col items-stretch gap-5 p-5 bg-transparent-tertiary text-white rounded-2xl shadow-md shadow-dark-overlay">
      {/* Logo */}
      <div className="w-20 h-20 rounded-full self-center flex justify-center items-center bg-tertiary">
        <img src="/logo/logo-bg-transparent.svg" alt="Match to Match logo" className="w-12 h-12" />
      </div>
      {/* Form */}
      <form onSubmit={submitForm} className="flex flex-col items-center gap-5">
        {/* Email */}
        <label htmlFor="email" className="hidden">Email:</label>
        <input ref={emailRef} id="email" type="email" placeholder="Email" className={inputStyle} autoComplete="email" required />
        {/* Password */}
        <label htmlFor="password" className="hidden">Password:</label>
        <div className="relative w-full">
          <input ref={passwordRef} id="password" type={showPassword ? "text" : "password"} placeholder="Password" className={`${inputStyle} pr-12`} onBlur={() => setShowPassword(false)} required/>
          {/* Show/hide password 👁️ */}
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-tertiary hover:cursor-pointer flex items-center justify-center" aria-label={showPassword ? "Nascondi password" : "Mostra password"}>
            {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
          </button>
        </div>
        {/* Error box if login goes wrong */}
        {loginError && (
          <div className="flex align-center gap-2.5 p-2.5 border text-white bg-transparent-primary border-primary rounded-2xl">
            <ErrorOutlineOutlinedIcon />
            {loginError}
          </div>
        )}
        <Link to="">password dimenticata?</Link>
        <Button label="Accedi" variant="primary" type="submit"/>
      </form>
    </div>
  );
}