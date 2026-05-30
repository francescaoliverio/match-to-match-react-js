import MatchSearch from "../components/MatchSearch";
import UsersGrid from "../components/UsersGrid";

export default function Explore() {
  return (
    <>
      <h1>Explore</h1>
      <MatchSearch />
      <div className="p-5 self-stretch">
        <UsersGrid limit={4}/>
      </div>
    </>
  );
}
