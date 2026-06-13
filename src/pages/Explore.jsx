import MatchSearch from "../components/MatchSearch";
import UsersGrid from "../components/UsersGrid";
import CategoriesGrid from "../components/CategoriesGrid";
import Button from "../components/Button";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const SECTION_STYLES = "p-5 w-full lg:w-250 flex flex-col items-center gap-2.5"

export default function Explore() {
  return (
    <>
      <section>
        <h1>MATCH TO MATCH</h1>
        <MatchSearch />
      </section>
      <section className={SECTION_STYLES}>
      <h3>A cosa vorresti giocare?</h3>
        <p>Esplora le categorie</p>
        <div className="flex flex-row justify-center items-center w-fit gap-5">
          <Button className='p-2.5'><ArrowBackIosOutlinedIcon /></Button>
          <CategoriesGrid />
          <Button className='p-2.5'><ArrowForwardIosOutlinedIcon /></Button>
        </div>
      </section>
      <section className={SECTION_STYLES}>
      <h3>Ready to Match?</h3>
        <p>Proposte di match per te</p>
        <UsersGrid cols={4} rows={2} />
      </section>
      <section className={SECTION_STYLES}>
      <h3>Explore the map</h3>
        <figure className="w-full">
          <img src='/images/map/map.png' alt="explore the map" />
        </figure>
      </section>
    </>
  );
}
