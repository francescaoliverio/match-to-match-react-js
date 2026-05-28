import { useState } from "react";

import SearchBar from "./SearchBar";
import Button from '../components/Button'
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { cn } from "../lib/utils";

export default function MatchSearch() {
  const [active, setActive] = useState("what")

  function handleClick(target) {
    setActive(target)
  }

  return (
    <div className="matchsearch bg-transparent-tertiary flex items-center justify-center p-5 gap-5 rounded-full w-fit">
      <div onClick={() => handleClick("what")}>
        {active === "what" ? (
          <SearchBar id="what" placeholder="what..." className="flex-2 flex-row-reverse p-2.5 gap-2.5">
            <label className="text-tertiary">
              <CategoryOutlinedIcon color="inherit" />
            </label>
          </SearchBar>
        ) : (
          <label className="text-transparent-white">
            <CategoryOutlinedIcon color="inherit" />
          </label>
        )}
      </div>
      <div onClick={() => handleClick("where")}>
        {active === "where" ? (
          <SearchBar id="where" placeholder="where..." className="flex-2 flex-row-reverse p-2.5 gap-2.5">
            <label className="text-tertiary">
              <PlaceOutlinedIcon color="inherit" />
            </label>
          </SearchBar>
        ) : (
          <label className="text-transparent-white">
            <PlaceOutlinedIcon color="inherit" />
          </label>
        )}
      </div>
      <div onClick={() => handleClick("when")}>
        {active === "when" ? (
          <SearchBar id="when" placeholder="when..." className="flex-2 flex-row-reverse p-2.5 gap-2.5">
            <label className="text-tertiary">
              <CalendarTodayOutlinedIcon color="inherit" />
            </label>
          </SearchBar>
        ) : (
          <label className="text-transparent-white">
            <CalendarTodayOutlinedIcon color="inherit" />
          </label>
        )}
      </div>
      <Button label="search" variant="primary">
        <SearchOutlinedIcon />
      </Button>
    </div>
  );
}