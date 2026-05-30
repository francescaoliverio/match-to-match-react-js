import { useNavigate, Link } from "react-router-dom";
import { useRef } from "react";
import Button from "./Button";

const inputStyle = "bg-white text-tertiary focus:outline-none focus:ring-2 ring-transparent-secondary flex items-center px-5 py-2.5 rounded-full w-fit shadow-md shadow-dark-overlay disabled:cursor-default"

export default function LoginForm() {
  const navigate = useNavigate();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  async function submitForm(e) {
    // prevent default action when button is clicked
    e.preventDefault();
    // UseRef to get input values when button is clicked
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    //
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
      navigate("/chat");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col items-center gap-5 p-5 bg-transparent-tertiary text-white rounded-2xl shadow-md shadow-dark-overlay">
      {/* Profile picture */}
      <div className="w-20 h-20 rounded-full flex justify-center items-center bg-grey-lighter"></div>
      <form onSubmit={submitForm} className="flex flex-col items-center gap-5">
        <label htmlFor="username" className="hidden">Username:</label>
        <input ref={usernameRef} id="username" type="text" placeholder="Username" className={inputStyle}/>
        <label htmlFor="password" className="hidden">Password:</label>
        <input ref={passwordRef} id="password" type="password" placeholder="Password"  className={inputStyle}/>
        <Link to="">password dimenticata?</Link>
        <Link to="/profile"><Button label="Accedi" variant="primary"/></Link>
      </form>
    </div>
  );
}
