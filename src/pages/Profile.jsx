import { Link } from "react-router-dom"
import Button from "../components/Button";

export default function Profile() {
  return (
    <>
      <h1>Profile</h1>
      <Link to="/profile/login"><Button label="Accedi" variant="primary"/></Link>
    </>
  );
}
