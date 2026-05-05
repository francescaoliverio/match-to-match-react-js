export default function Card({ people }) {
  return (
    <>
      {/* <img src={img} /> */}

      <div className="card-content">
        <h3>{people.nome} {people.cognome}</h3>
        <p>{people.descrizione}</p>
      </div>
    </>
  );
}