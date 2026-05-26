import { NavLink } from "react-router-dom";

// 🧭 explore
// -- outlined
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
// -- filled
import ExploreIcon from "@mui/icons-material/Explore";

// 🤝 match
// -- outlined
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
// -- filled
import HandshakeIcon from "@mui/icons-material/Handshake";

// 💬 chat
// -- outlined
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
// -- filled
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";

// 👤 profile
// -- outlined
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// -- filled
import PersonIcon from "@mui/icons-material/Person";

export default function BottomNavBar({currentPage}){
    return(
        <nav>
            <NavLink to="/">{(currentPage === "explore" ? <ExploreIcon/> : <ExpoloreOutlinedIcon/>)}</NavLink>
            <NavLink to="/match">{(currentPage === "match" ? <HandshakeIcon/> : <HandshakeOutlinedIcon/>)}</NavLink>
            <NavLink to="/chat">{(currentPage === "chat" ? <ChatBubbleOutlinedIcon/> : <ChatBubbleOutlineOutlinedIcon/>)}</NavLink>
            <NavLink to="/profile">{(currentPage === "profile" ? <PersonIcon/> : <PersonOutlinedIcon/>)}</NavLink>
            <NavLink to="/profile/login">Login</NavLink>
        </nav>
    )
}