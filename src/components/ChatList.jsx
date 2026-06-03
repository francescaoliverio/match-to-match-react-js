import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState, useEffect } from "react";

export default function ChatList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://mock-api-server-production-7f5d.up.railway.app/match-to-match/match_requests?status=accepted",
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  }, []);

  return (
    <>
      <div>
        <SearchBar placeholder="search">
          <Button variant="transparent" className="p-1.5">
            <SearchOutlinedIcon />
          </Button>
        </SearchBar>
      </div>

      <div>
        {data ? (
          <ul>
            {data.map((chat) => (
              <li key={chat.id}>
                <strong>{chat.fromUserId}</strong>
                <p>{chat.status}</p>
              </li>
            ))}
          </ul>
        ) : (
          "Caricamento..."
        )}
      </div>
    </>
  );
}
