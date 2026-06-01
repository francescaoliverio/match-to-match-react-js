// src/components/UsersGrid.jsx

import { useCategories } from "../hooks/useCategories"
import CardCategories from "./CardCategories"

export default function CategoriesGrid({limit}) {
  const gridTemplate = {
    gridTemplateColumns: `repeat(auto-fill, minmax(8rem, 12rem))`,
    gridTemplateRows: `repeat(auto, auto)`,
    gridAutoFlow: `column`
  }

  const { categories, loading, error } = useCategories()
  // prevent rendering users.map before promise is resolved
  if (loading) return <p>Caricamento...</p>
  if (error) return <p>Errore: {error}</p>
  // only when loading completed without errors: map
  const visible = limit ? categories.slice(1, limit+1) : categories
  return (
    <div className="grid gap-8 justify-center-safe" style={gridTemplate}>
      {visible.map((category) => (
        <CardCategories key={category.id} categ={category}>
        </CardCategories>
      ))}
    </div>
  )
}