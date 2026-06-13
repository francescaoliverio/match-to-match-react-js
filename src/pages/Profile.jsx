// src/pages/Profile.jsx

import { useAuth } from "../context/AuthContext"
import { SECTION_STYLES } from "../styles/styles"
import { cn } from "../lib/utils"
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined"
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined"
import LocalFireDepartmentOutlined from "@mui/icons-material/LocalFireDepartmentOutlined"
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';

export default function Profile() {
  const { user } = useAuth()

  return (
    <section className={cn(SECTION_STYLES, "md:flex-row md:justify-center gap-5")}>
      {/* Profile Wrapper */}
      <div className="text-center relative max-w-sm flex flex-col items-center gap-2.5 p-5 bg-white rounded-2xl shadow-md shadow-dark-overlay">
        {/* Edit Button */}
        <div className="flex items-center justify-center absolute -top-1 -right-1 size-8 bg-secondary rounded-full hover:cursor-pointer">
          <ModeEditOutlineOutlinedIcon fontSize="small" />
        </div>
        {/* Profile Picture */}
        <div className="size-20 rounded-full overflow-hidden flex justify-center items-center bg-tertiary">
          <img src={user.avatar} alt="profile picture" />
        </div>
        {/* User Name */}
        <div className="flex justify-center items-center gap-2.5">
          <h3>{user.firstName}</h3>
          <VerifiedOutlinedIcon className="text-tertiary" />
        </div>
        <div className="flex justify-center items-center gap-2.5">
          <span>{user.city}</span>
          <span>&bull;</span>
          <span>{user.age} anni</span>
        </div>
        <div className="flex justify-center items-center gap-2.5">
          <LocalFireDepartmentOutlined className="text-primary" />
          <strong>{user.matchCount} match completati</strong>
          <span>&bull;</span>
          <GradeOutlinedIcon className="text-secondary"/>
          <strong>{user.rating}</strong>
        </div>
        <p>{user.bio}</p>
      </div>
      <footer className="flex flex-col gap-2.5">
        <div className="max-w-sm flex flex-col items-stretch gap-2.5 p-5 bg-tertiary text-light rounded-2xl shadow-md shadow-dark-overlay">
          <h4>Impostazioni</h4>
          <ul>
            <li>Verifica il tuo account</li>
            <li>Seleziona i tuoi interessi</li>
            <li>Cambia l'area geografica</li>
          </ul>
        </div>
        <div className="max-w-sm flex flex-col items-stretch gap-2.5 p-5 bg-secondary text-ink rounded-2xl shadow-md shadow-dark-overlay">
          <h4>Assistenza</h4>
          <ul>
            <li>Contattaci</li>
            <li>Segnala un utente</li>
            <li>Chiudi il tuo account</li>
          </ul>
        </div>
      </footer>
    </section>
  )
}
