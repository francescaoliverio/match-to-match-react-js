import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function BottomNavBar({currentPage}){
    return(
        <>
        <nav>
            <a href="#explore"></a>
            <a href="#match"></a>
            <a href="#chat"></a>
            <a href="#profile"><PersonOutlineOutlined/></a>
        </nav>
        </>
    )
}