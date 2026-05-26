import { NavLink } from "react-router-dom";

export default function BottomNavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Explore</NavLink>
        </li>
        <li>
          <NavLink to="/match">Match</NavLink>
        </li>
        <li>
          <NavLink to="/chat">Chat</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/profile/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}
