// src/pages/NotFound.jsx

import ErrorBox from '../components/ErrorBox'

export default function NotFound() {
  return (
    <ErrorBox>
      <h1 className='text-2xl -mt-2.5'>Error: 404</h1>
      <p>Siamo spiacenti, ma questa pagina non esiste.</p>
    </ErrorBox>
  )
}
