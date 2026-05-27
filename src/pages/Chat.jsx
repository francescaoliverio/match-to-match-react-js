// SEARCHBAR
// DIV ELENCO CHAT
// DIV CHAT APERTA
// MAPPING CHAT IN CORSO RESTITUISCE LISTA CHAT
// ↓
// USARE API → FETCH (IMMAGINE PROFILO, NOME COGNOME, ASSETS→CHAT IN CORSO, CRONOLOGIA MESSAGGI
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState, useEffect } from "react";

export default function Chat() {
  const [data, setData] = useState(null); // data from API

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((result) => setData(result.users));
  }, []);

  return (
    <div>
      <h1>Chat</h1>
      <SearchBar placeholder="search">
        <Button classes="btn-light-filled">
          <SearchOutlinedIcon />
        </Button>
      </SearchBar>
      <div>
        {data ? (
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.fistname}</li>
            ))}
          </ul>
        ) : (
          "Caricamento..."
        )}
      </div>
    </div>
  );
}
