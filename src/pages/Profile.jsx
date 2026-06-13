// src/pages/Profile.jsx

import { useAuth } from "../context/AuthContext";

import { SECTION_STYLES } from "../styles/styles";

import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

export default function Profile() {
  const { user } = useAuth();

  return (
    <section className={SECTION_STYLES}>
      <div className="w-xs flex flex-col items-center gap-2.5 p-5 bg-white text-ink rounded-2xl shadow-md shadow-dark-overlay">
        {/* Profile Picture */}
        <div className="size-20 rounded-full overflow-hidden flex justify-center items-center bg-tertiary">
          <img src={user.avatar} alt="profile picture" />
        </div>
        {/* User Name */}
        <h3>{user.firstName}</h3>
        <div className="flex flex-row justify-evenly w-full">
          <p><PlaceOutlinedIcon /> {user.city}</p>
          <p><CalendarTodayOutlinedIcon /> {user.age} anni</p>
        </div>
        <p>{user.bio}</p>
      </div>
      <div className="w-xs flex flex-col items-stretch gap-2.5 p-5 bg-tertiary text-light rounded-2xl shadow-md shadow-dark-overlay">
        <h4 className="ps-5">Impostazioni</h4>
        <ul>
          <li>Seleziona i tuoi interessi</li>
          <li>Cambia l'area geografica</li>
        </ul>
        <h4 className="ps-5">Assistenza</h4>
        <ul>
          <li>Contattaci</li>
          <li>Segnala un utente</li>
          <li>Chiudi il tuo account</li>
        </ul>
      </div>
    </section>
  );
}
