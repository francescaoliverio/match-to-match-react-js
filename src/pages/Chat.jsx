import SearchBar from "../components/SearchBar";
import Button from "../components/Button"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Chat() {
  return (
    <>
      <h1>Chat</h1>
      <SearchBar placeholder="search">
        <Button variant="transparent" className="p-1.5">
          <SearchOutlinedIcon />
        </Button>
      </SearchBar>
    </>
  );
}
