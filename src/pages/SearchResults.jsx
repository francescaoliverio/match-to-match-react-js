//src/pages/SearchResults.jsx

import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { useCategories } from "../hooks/useCategories"
import { useUsers } from "../hooks/useUsers"
import Card, { CardSkeleton } from "../components/Card"
import ErrorBox from "../components/ErrorBox"
import { GRID_STYLES, SECTION_STYLES } from "../styles/styles"

export default function SearchResults() {
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const term = query.get("q") || ""

  const { categories, loading: catLoading, error: catError } = useCategories()
  const { users, loading: userLoading, error: userError } = useUsers()

  // If error, return ErrorBox
  if (catError || userError) return (
    <ErrorBox><strong>Errore: </strong>{catError || userError || "Errore nel caricamento"}</ErrorBox>
  )

  // Check if term matches category
  const matchedCategory = categories?.find((cat) => cat.name.trim().toLowerCase() === term.trim().toLowerCase())

  // If not an existing category, return ErrorBox
  if (!catLoading && !matchedCategory) return (
    <ErrorBox>
      Siamo spiacenti, ma la categoria <strong>{term}</strong> non esiste.
    </ErrorBox>
  )

  // Filter users that match category
  const filtered = users?.filter((user) => user.activities.includes(matchedCategory?.id))

  return (
    <section className={SECTION_STYLES}>
      {/* Title: show category name after fetch found matchedCategory */}
      <h1 className="text-center">{catLoading ? "Caricamento..." : `Categoria: ${matchedCategory?.name}`}</h1>
      {/* Cards: show skeletons until users are fetched and filtered */}
      <div className={GRID_STYLES} style={{ gridTemplateColumns: `repeat(auto-fit, 12rem)` }}>
        {userLoading || catLoading
          ? Array.from({ length: 4 }).map((_, i) => <CardSkeleton key={i} />)
          : filtered?.map((user) => <Card key={user.id} obj={user} img={user.avatar} title={user.firstName} description={user.bio} variant="hoverScale" />)}
      </div>
    </section>
  )
}
