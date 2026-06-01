import { useNavigate, Link } from "react-router-dom";
import { useRef, useState } from "react";
import Button from "./Button";

// Icons for password visibility
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const inputStyle = "flex items-center px-5 py-2.5 w-full rounded-full bg-white text-tertiary focus:outline-none focus:ring-2 ring-transparent-secondary shadow-md shadow-dark-overlay disabled:cursor-default"

export default function LoginForm() {
  const navigate = useNavigate();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  async function submitForm(e) {
    // prevent default action when button is clicked
    e.preventDefault();
    // UseRef to get input values when button is clicked
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    
    try {
      // fetch: in const "res" save response from API (promise)
      const res = await fetch("https://dummyjson.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
          expiresInMins: 30,
        }),
      });
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      // resolve promise, than convert "res" to json
      const data = await res.json();
      // print "data" to console
      console.log(data);
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col items-center gap-5 p-5 bg-transparent-tertiary text-white rounded-2xl shadow-md shadow-dark-overlay">
      {/* Logo */}
      <div className="w-20 h-20 rounded-full flex justify-center items-center bg-tertiary">
        <img src="/logo/logo-bg-transparent.svg" alt="Match to Match logo" className="w-12 h-12" />
      </div>
      {/* Form */}
      <form onSubmit={submitForm} className="flex flex-col items-center gap-5">
        {/* Username */}
        <label htmlFor="username" className="hidden">Username:</label>
        <input ref={usernameRef} id="username" type="text" placeholder="Username" className={inputStyle}/>
        {/* Password */}
        <label htmlFor="password" className="hidden">Password:</label>
        <div className="relative w-fit">
          <input ref={passwordRef} id="password" type={showPassword ? "text" : "password"} placeholder="Password" className={`${inputStyle} pr-12`} onBlur={() => setShowPassword(false)}/>
          {/* Show/hide password 👁️ */}
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-tertiary hover:cursor-pointer flex items-center justify-center" aria-label={showPassword ? "Nascondi password" : "Mostra password"}>
            {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
          </button>
        </div>
        <Link to="">password dimenticata?</Link>
        <Button label="Accedi" variant="primary" type="submit"/>
      </form>
    </div>
  );
}