export default function Card({ nome, cognome, descrizione }) {
  return (
    <div 
      className={CardClassName} 
      style={{ border: isSelected ? '2px solid blue' : '1px solid gray' }}
    >
      <img src={item.img} alt={item.titolo} />

      <div className="card-content">
        {item.stato === "visto" && <span className="badge">Visto</span>}
        <h3>{item.titolo}</h3>
        <p>{item.descrizione}</p>
        <p>Anno: {item.anno}</p>
        <p>Genere: {item.genere.join(' ')}</p>
        <p>Durata: {item.durata}</p>
        <p>Rating: {item.rating}</p>

        <button 
          className="filter-btn" 
          onClick={onSelect}
          style={{ 
            backgroundColor: isSelected ? '#333' : '', 
            color: isSelected ? 'white' : '' 
          }}
        >
          {isSelected ? "Selezionato!" : "Seleziona"}
        </button>
      </div>
    </div>
  )
}