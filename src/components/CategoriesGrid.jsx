// src/components/CategoriesGrid.jsx

import { useCategories } from "../hooks/useCategories"
import Card, { CardSkeleton } from "./Card"
import ErrorBox from "./ErrorBox"
import { GRID_STYLES } from "../styles/styles"
import { cn } from "../lib/utils"

export default function CategoriesGrid({ cols = 5, rows = 1, className }) {
  const limit = cols * rows
  const gridTemplate = {
    maxWidth: `${(cols * 12) + ((cols-1) * 2)}rem`,
    gridTemplateColumns: `repeat(auto-fit, 12rem)`
  }
  // store return values from useCategories()
  const { categories, loading, error } = useCategories()
  // if error, return error
  if (error)
    return (
      <ErrorBox><strong>Errore: </strong>{error}</ErrorBox>
    )
  // skeleton while loading: prevent rendering categories.map before promise is resolved
  return (
    <div className={cn(GRID_STYLES, className)} style={gridTemplate}>
      {loading
        ? Array.from({ length: limit }).map((_, i) =>
          <CardSkeleton key={i} />)
        : categories?.slice(0, limit).map((cat) =>
          <Card key={cat.id} obj={cat} img={cat.image} title={cat.name} description={cat.description} variant="hoverScale" />)
      }
    </div>
  )
}
