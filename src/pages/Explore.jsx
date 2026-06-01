import MatchSearch from "../components/MatchSearch";
import UsersGrid from "../components/UsersGrid";
import CategoriesGrid from "../components/CategoriesGrid";

export default function Explore() {
  return (
    <>
      <div>
        <h1>MATCH TO MATCH</h1>
        <MatchSearch />
      </div>
      <div>
        <h3>A cosa vorresti giocare?</h3>
        <p>Esplora le categorie</p>
        <CategoriesGrid />
      </div>
      <div>
        <h2>THE RIGHT MATCH IS WAITING TO MEET YOU!</h2>
      </div>
      <div className="p-5 self-stretch">
        <h3>Ready to Match?</h3>
        <p>Proposte di match per te</p>
        <UsersGrid limit={10} />
      </div>
      <div>
        <h3>Explore the map</h3>
      </div>
    </>
  );
}
