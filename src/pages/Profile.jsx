import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { logout } = useAuth();
  const { user } = useAuth();

  return (
    <div className="p-5 gap-2.5 flex flex-col items-center justify-start">
      {user ? (
        <>
          {/* Profile Picture */}
          <div className="w-20 h-20 rounded-full overflow-hidden flex justify-center items-center bg-tertiary">
            <img src={user.avatar} alt="profile picture" />
          </div>
          {/* User Name */}
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <Button label="Esci" variant="primary" onClick={logout} />
        </>
      ) : (
        <Link to="/profile/login">
          <Button label="Accedi" variant="primary" />
        </Link>
      )}
    </div>
  );
}
