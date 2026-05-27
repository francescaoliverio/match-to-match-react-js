import { useEffect, useState } from "react";

export default function Match() {

    const [data, setData] = useState(null)
    const [users, setUsers] = useState(null)

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://mock-api-server-production-7f5d.up.railway.app/match-to-match/api')
      console.log('Status:', response.status)
      const data = await response.json()
      console.log('Data:', data)
      console.log('Users:', data.users)

      setUsers(data.users)
    } catch (error) {
      console.error('Errore nel fetch dei dati:', error)
    }
  }

  fetchData()
}, [])

  return (
    <>
      <h1>Match</h1>
       <h2>Prova fetch</h2>
       {users ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.firstName}</li>
          ))}
        </ul>
       ) :(
        'Caricamento...'
       )}
    </>
  );
}


