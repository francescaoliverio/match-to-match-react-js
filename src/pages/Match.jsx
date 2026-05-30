import UsersGrid from "../components/UsersGrid";

export default function Match() {

  return (
    <>
      <h1>Match</h1>
      <div className="p-5 self-stretch">
        <UsersGrid limit={8}/>
      </div>
    </>
  );
}


