//src/pages/SearchResults.jsx

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCategories } from "../hooks/useCategories";
import { useUsers } from "../hooks/useUsers";
import Card from "../components/Card";

import { ERROR_BOX_STYLES, WARNING_BOX_STYLES } from "../styles/styles";

export default function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const term = query.get("q") || "";

  const { users, loading: userLoading, error: userError } = useUsers();
  const { categories, loading: catLoading, error: catError } = useCategories();

  if (userLoading || catLoading) {
    return <div className={WARNING_BOX_STYLES}>Caricamento...</div>;
  }

  if (userError || catError) {
    return <div className={ERROR_BOX_STYLES}>Errore nel caricamento</div>;
  }

  const matchedCategory = categories?.find((cat) => cat.name.trim().toLowerCase() === term.trim().toLowerCase());

  if (!matchedCategory) {
    return <div className={WARNING_BOX_STYLES}>Categoria inesistente</div>;
  }

  const filtered = users?.filter((user) => user.activities.includes(matchedCategory.id));

  return (
    <section className={SECTION_STYLES}>
      {/* Title: show category name after fetch found matchedCategory */}
      <h1 className="text-center">{catLoading ? "Caricamento..." : `Categoria: ${matchedCategory?.name}`}</h1>
      {/* Cards: show skeletons until users are fetched and filtered */}
      <div className={GRID_STYLES} style={{ gridTemplateColumns: `repeat(auto-fit, 12rem)` }}>
        {userLoading || catLoading ? Array.from({ length: 5 }).map((_, i) => <CardSkeleton key={i} />) : filtered?.map((user) => <Card key={user.id} obj={user} img={user.avatar} title={user.firstName} description={user.bio} variant="hoverScale" />)}
      </div>
    </section>
  )
}
