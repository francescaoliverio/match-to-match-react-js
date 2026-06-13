import { useState, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom'

import SearchBar from "./SearchBar";
import Button from '../components/Button'
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function MatchSearch() {
  const [active, setActive] = useState("what")

  function handleClick(target) {
    setActive(target)
  }

  const navigate = useNavigate()
  const searchRef = useRef('')
  function handleSearch(){
    const term = searchRef.current.value?.trim().toLowerCase()
    navigate(`/results?q=${term}`)
  }

  return (
    <div className="bg-transparent-tertiary flex items-center justify-center p-3.5 gap-5 rounded-full w-fit">
      <div onClick={() => handleClick("what")}>
        {active === "what" ? (
          <SearchBar id="what" ref={searchRef} placeholder="what..." variant="white" className="flex-2 flex-row-reverse p-2.5 gap-2.5">
            <label htmlFor="what" className="text-tertiary hover:cursor-pointer">
              <CategoryOutlinedIcon color="inherit" />
            </label>
          </SearchBar>
        ) : (
          <label htmlFor="what" className="text-transparent-white hover:text-white hover:cursor-pointer">
            <CategoryOutlinedIcon color="inherit" />
          </label>
        )}
      </div>
      <div onClick={() => handleClick("where")}>
        {active === "where" ? (
          <SearchBar id="where" placeholder="where..." variant="white" className="flex-2 flex-row-reverse p-2.5 gap-2.5">
            <label htmlFor="where" className="text-tertiary hover:cursor-pointer">
              <PlaceOutlinedIcon color="inherit" />
            </label>
          </SearchBar>
        ) : (
          <label htmlFor="where" className="text-transparent-white hover:text-white hover:cursor-pointer">
            <PlaceOutlinedIcon color="inherit" />
          </label>
        )}
      </div>
      <div onClick={() => handleClick("when")}>
        {active === "when" ? (
          <SearchBar id="when" placeholder="when..." variant="white" className="flex-2 flex-row-reverse p-2.5 gap-2.5">
            <label htmlFor="when" className="text-tertiary hover:cursor-pointer">
              <CalendarTodayOutlinedIcon color="inherit" />
            </label>
          </SearchBar>
        ) : (
          <label htmlFor="when" className="text-transparent-white hover:text-white hover:cursor-pointer">
            <CalendarTodayOutlinedIcon color="inherit" />
          </label>
        )}
      </div>
      <Button onClick={handleSearch} label="search" variant="primary">
        <SearchOutlinedIcon />
      </Button>
    </div>
  );
}