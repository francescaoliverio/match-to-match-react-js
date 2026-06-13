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
    <>
      <h1>Categoria: {matchedCategory.name}</h1>
      <div className="m-auto grid gap-8 justify-center-safe" style={{ gridTemplateColumns: `repeat(5, 12rem)` }}>
        {filtered?.map((user) => (
          <Card key={user.id} obj={user} img={user.avatar} title={user.firstName} description={user.bio} variant="hoverScale" />
        ))}
      </div>
    </>
  );
}
