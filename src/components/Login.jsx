import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Login() {
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
    <>
      <h1>Login</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="username">Username:</label>
        <input ref={usernameRef} id="username" type="text" placeholder="Username" />
        <label htmlFor="password">Password:</label>
        <input ref={passwordRef} id="password" type="password" placeholder="Password" />
        <button>Accedi</button>
      </form>
    </>
  );
}
