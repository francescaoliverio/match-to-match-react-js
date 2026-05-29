import { useEffect, useState } from "react";

export default function Match() {
    const [users, setUsers] = useState(null)

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/users')
      console.log('Status:', response.status)
      const users = await response.json()
      console.log('Users:', users)
      setUsers(users)
    } catch (error) {
      console.error('Errore nel fetch dei dati:', error)
    }
  }

  fetchData()
}, [])

  return (
    <>
      <h1>Match</h1>
       {users ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h5>{user.firstName}</h5>
              <p>{user.bio}</p>
            </li>
          ))}
        </ul>
       ) :(
        'Caricamento...'
       )}
    </>
  );
}


