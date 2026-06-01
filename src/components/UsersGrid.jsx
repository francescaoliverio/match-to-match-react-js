// src/components/UsersGrid.jsx

import { useUsers } from "../hooks/useUsers"
import Card, {CardSkeleton} from "./Card"

export default function UsersGrid({cols = 3, rows = 2}) {
  const limit = cols * rows
  const gridTemplateColumns = {gridTemplateColumns: `repeat(${cols}, minmax(8rem, 12rem))`,}
  // store return values from useUsers()
  const { users, loading, error } = useUsers()
  // if error, return error
  if (error) return (
    <div className="flex flex-col items-center gap-5 p-5 bg-primary text-white rounded-2xl shadow-md shadow-dark-overlay">
      <p><strong>Error: </strong>{error}</p>
    </div>
    )

  // skeleton while loading: prevent rendering users.map before promise is resolved
  return (
    <div className="grid gap-8 justify-center-safe" style={gridTemplateColumns}>
      {loading
        ? Array.from({ length: limit }).map((_, i) => <CardSkeleton key={i} />)
        : users.slice(1, limit+1).map((user) =>
            <Card key={user.id} person={user} variant="hoverScale" />
          )
      }
    </div>
  )
}