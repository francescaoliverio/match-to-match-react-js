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
        <>
        <nav>
            <a href="#explore">{(currentPage === "explore" ? <ExploreIcon/> : <ExpoloreOutlinedIcon/>)}</a>
            <a href="#match">{(currentPage === "match" ? <HandshakeIcon/> : <HandshakeOutlinedIcon/>)}</a>
            <a href="#chat">{(currentPage === "chat" ? <ChatBubbleOutlinedIcon/> : <ChatBubbleOutlineOutlinedIcon/>)}</a>
            <a href="#profile">{(currentPage === "profile" ? <PersonIcon/> : <PersonOutlinedIcon/>)}</a>
        </nav>
        </>
    )
}