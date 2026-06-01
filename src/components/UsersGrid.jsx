// src/components/UsersGrid.jsx

import { useUsers } from "../hooks/useUsers"
import Card, {CardSkeleton} from "./Card"

const gridTemplate = {
  gridTemplateColumns: `repeat(auto-fill, minmax(8rem, 12rem))`,
  gridTemplateRows: `repeat(auto, auto)`,
}

export default function UsersGrid({limit}) {
  // store return values from useUsers()
  const { users, loading, error } = useUsers()
  // if error, return error
  if (error) return (
    <div className="flex flex-col items-center gap-5 p-5 bg-primary text-white rounded-2xl shadow-md shadow-dark-overlay">
      <p>Error: {error}</p>
    </div>
    )

  // if prop limit is provided, render [limit] cards
  const skeletonCount = limit ?? 6
  // skeleton while loading: prevent rendering users.map before promise is resolved
  return (
    <div className="grid gap-8 justify-center-safe" style={gridTemplate}>
      {loading
        ? Array.from({ length: skeletonCount }).map((_, i) => <CardSkeleton key={i} />)
        : users.slice(1, limit ? limit + 1 : undefined).map((user) => 
          <Card key={user.id} person={user} variant="hoverScale" />
        )
      }
    </div>
  )
}