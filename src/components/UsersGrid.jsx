// src/components/UsersGrid.jsx

import { useUsers } from "../hooks/useUsers"
import { useHandleMatch } from "../hooks/useHandleMatch"
import Card, { CardSkeleton } from "./Card"
import ErrorBox from "./ErrorBox"
import { GRID_STYLES } from "../styles/styles"
import { cn } from "../lib/utils"

export default function UsersGrid({ cols = 3, rows = 2, pending = false, className }) {
  const limit = cols * rows
  const gridTemplate = {
    maxWidth: `${(cols * 12) + ((cols-1) * 2)}rem`,
    gridTemplateColumns: `repeat(auto-fit, 12rem)`
  }
  // store return values from useUsers()
  const { users, loading, error } = useUsers()
  const { confirmMatch, cancelMatch } = useHandleMatch()
  // if error, return error
  if (error) return (
    <ErrorBox><strong>Errore: </strong>{error}</ErrorBox>
  )
  // skeleton while loading: prevent rendering users.map before promise is resolved
  return (
    <div className={cn(GRID_STYLES, className)} style={gridTemplate}>
      {loading
        ? Array.from({ length: limit }).map((_, i) => <CardSkeleton key={i} />)
        : users?.slice(1, limit+1).map((user) =>
            <Card key={user.id} obj={user} img={user.avatar} title={user.firstName} description={user.bio} buttons={pending} variant="hoverScale"
            onAccept={() => confirmMatch({user2Id: user.id})}
            onReject={() => cancelMatch(user.id)}
        />
          )
      }
    </div>
  )
}
