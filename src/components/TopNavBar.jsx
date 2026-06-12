import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";

export default function TopNavBar() {
  const { logout } = useAuth();
  const { user } = useAuth();

  return (
    <nav className="bg-tertiary text-white z-10 flex flex-row justify-between items-center px-5 py-2.5">
      {/* Logo */}
      <div className="w-10 h-10 rounded-full self-center flex justify-center items-center bg-tertiary">
        <img src="/logo/logo-bg-transparent.svg" alt="Match to Match logo" className="w-12 h-12" />
      </div>
      {user ? (
        <>
          {/* User Name */}
          <div>{user.firstName}</div>
          {/* Log out */}
          <Button label="Esci" variant="primary" onClick={logout} />
        </>
      ) : (
        <>
          {/* Log in */}
          <Link to="/profile/login">
            <Button label="Accedi" variant="primary" />
          </Link>
        </>
      )}
    </nav>
  );
}
