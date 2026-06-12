import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { useCategories } from "../hooks/useCategories";
import { useUsers } from "../hooks/useUsers";

import UsersGrid from "../components/UsersGrid";

export default function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const term = query.get("q") || "";

  const { users, loading: userLoading, error: userError } = useUsers();
  const { categories, loading: catLoading, error: catrError } = useCategories();

  if (userLoading || catLoading) {
    return <p>Caricamento...</p>;
  }

  if (userError || catrError) {
    return <p>Errore nel caricamento</p>;
  }

  const matchedCategory = categories.find(
    (cat) => cat.name.trim().toLowerCase() === term.trim().toLowerCase(),
  );

  const filtered = users.filter((user) =>
    user.activities.includes(matchedCategory.id),
  );

  return <div></div>;
}
