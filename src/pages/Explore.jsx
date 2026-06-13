// src/pages/Explore.jsx

import MatchSearch from "../components/MatchSearch";
import UsersGrid from "../components/UsersGrid";
import CategoriesGrid from "../components/CategoriesGrid";
import Button from "../components/Button";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import { SECTION_STYLES } from "../styles/styles";

export default function Explore() {
  return (
    <>
      {/* Hero */}
      <section className={SECTION_STYLES}>
        <h1 className="uppercase text-center">Match To Match</h1>
        <MatchSearch />
      </section>
      {/* Categories */}
      <section className={SECTION_STYLES}>
        <h3 className="text-center">Scegli la prossima sfida</h3>
        <p>Esplora le categorie</p>
        <div className="w-full flex flex-row justify-center items-center gap-5">
          <Button className="p-2.5">
            <ArrowBackIosOutlinedIcon />
          </Button>
          <div className="p-2.5 overflow-x-visible overflow-y-auto">
            <CategoriesGrid className="w-fit"/>
          </div>
          <Button className="p-2.5">
            <ArrowForwardIosOutlinedIcon />
          </Button>
        </div>
      </section>
      {/* Users */}
      <section className={SECTION_STYLES}>
        <h3 className="text-center">Ready to Match?</h3>
        <p>Proposte di match per te</p>
        <UsersGrid cols={4} rows={2} />
      </section>
      {/* Map */}
      <section className={SECTION_STYLES}>
        <h3 className="text-center">Esplora la mappa</h3>
        <figure className="w-full">
          <img src="/images/map/map.png" alt="Esplora la mappa" />
        </figure>
      </section>
    </>
  );
}
