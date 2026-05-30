// src/components/UsersGrid.jsx

import { useUsers } from "../hooks/useUsers"
import Card from "./Card"

export default function UsersGrid() {
  const { users, loading, error } = useUsers()
  // prevent rendering users.map before promise is resolved
  if (loading) return <p>Caricamento...</p>
  if (error) return <p>Errore: {error}</p>
  // only when loading completed without errors: map
  return (
    <div>
      {users.map((user) => (
        <Card key={user.id} person={user} >
        </Card>
      ))}
    </div>
  )
}