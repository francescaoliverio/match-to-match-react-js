import UsersGrid from "../components/UsersGrid";

export default function Match() {

  return (
    <>
      <h1 className="text-primary text-shadow-lg shadow-dark-overlay">Ready to Match?</h1>
      <div className="p-5 self-stretch">
        <UsersGrid cols={3} rows={2} pending={true}/>
      </div>
    </>
  );
}


