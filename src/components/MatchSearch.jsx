import SearchBar from "./SearchBar";
// import Button from '../components/Button'

import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function MatchSearch() {
  return (
    <>
      <CategoryOutlinedIcon /><SearchBar placeholder="What..." />
      <PlaceOutlinedIcon /><SearchBar placeholder="Where..." />
      <CalendarTodayOutlinedIcon /><SearchBar placeholder="When..." />
      {/* <Button className="btn-primary-filled" /> <SearchOutlinedIcon /> */}
    </>
  );
}
