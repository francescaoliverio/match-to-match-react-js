// src/components/UsersGrid.jsx

import { useUsers } from "../hooks/useUsers"
import Card from "./Card"

export default function UsersGrid({limit}) {
  const gridTemplate = {
    gridTemplateColumns: `repeat(auto-fill, minmax(8rem, 12rem))`,
    gridTemplateRows: `repeat(auto, auto)`,
  }

  const { users, loading, error } = useUsers()
  // prevent rendering users.map before promise is resolved
  if (loading) return <p>Caricamento...</p>
  if (error) return <p>Errore: {error}</p>
  // only when loading completed without errors: map
  const visible = limit ? users.slice(1, limit+1) : users
  return (
    <div className="grid gap-8 justify-center-safe" style={gridTemplate}>
      {visible.map((user) => (
        <Card key={user.id} person={user} variant="hoverScale">
        </Card>
      ))}
    </div>
  )
}