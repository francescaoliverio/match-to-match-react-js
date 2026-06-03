import MatchSearch from "../components/MatchSearch";
import UsersGrid from "../components/UsersGrid";

export default function Explore() {
  return (
    <>
      <h1>Explore</h1>
      <MatchSearch />
      <div className="p-5 self-stretch">
        <UsersGrid cols={4} rows={2}/>
      </div>
    </>
  );
}
