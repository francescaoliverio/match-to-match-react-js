// src/components/CategoriesGrid.jsx

import { useCategories } from "../hooks/useCategories"
import Card, { CardSkeleton } from "./Card"
import ErrorBox from "./ErrorBox"

export default function CategoriesGrid({ cols = 5, rows = 1 }) {
  const limit = cols * rows
  const gridStyles = {
    maxWidth: `${(cols * 12) + ((cols-1) * 2)}rem`,
    gridTemplateColumns: `repeat(auto-fill, 12rem)`
  }
  // store return values from useCategories()
  const { categories, loading, error } = useCategories()
  // if error, return error
  if (error)
    return (
      <ErrorBox><p><strong>Errore: </strong>{error}</p></ErrorBox>
    )
  // skeleton while loading: prevent rendering categories.map before promise is resolved
  return (
    <div className="m-auto grid gap-8 justify-center-safe" style={gridStyles}>
      {loading
        ? Array.from({ length: limit }).map((_, i) =>
          <CardSkeleton key={i} />)
        : categories?.slice(0, limit).map((cat) =>
          <Card key={cat.id} obj={cat} img={cat.image} title={cat.name} description={cat.description} variant="hoverScale" />)
      }
    </div>
  )
}
