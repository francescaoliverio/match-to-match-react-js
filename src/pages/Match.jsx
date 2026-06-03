import UsersGrid from "../components/UsersGrid";

export default function Match() {

  return (
    <>
      <h1>Match</h1>
      <div className="p-5 self-stretch">
        <UsersGrid cols={3} rows={2}/>
      </div>
    </>
  );
}


