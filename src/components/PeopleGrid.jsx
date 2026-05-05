import Card from "./Card";

export default function PeopleGrid({ people }) {
  return (
    <>
      <div className="content-grid">
        {people.length === 0 ? (
          <p>Non ci sono contenuti da visualizzare per questa categoria!</p>
        ) : (
          people.map((p) => (
            <Card
              key={p.id}
              people={p}
            />
          ))
        )}
      </div>
    </>
  );
}
