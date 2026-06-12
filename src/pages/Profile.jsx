import { useAuth } from "../context/AuthContext";

// 📍 location
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
// 📆 calendar
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="p-5 gap-2.5 flex flex-col items-center justify-start">
      <div className="w-xs flex flex-col items-center gap-2.5 p-5 bg-white text-ink rounded-2xl shadow-md shadow-dark-overlay">
        {/* Profile Picture */}
        <div className="size-20 rounded-full overflow-hidden flex justify-center items-center bg-tertiary">
          <img src={user.avatar} alt="profile picture" />
        </div>
        {/* User Name */}
        <h3>{user.firstName}</h3>
        <div className="flex flex-row justify-evenly w-full">
          <p>
            <PlaceOutlinedIcon />
            {user.city}
          </p>
          <p>
            <CalendarTodayOutlinedIcon /> {user.age} anni
          </p>
        </div>
        <p>{user.bio}</p>
      </div>
    </div>
  );
}
