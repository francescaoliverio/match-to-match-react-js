// src/pages/NotFound.jsx

import ErrorBox from "../components/ErrorBox";

export default function NotFound() {

  return (
    <ErrorBox>
      <h2 className="-mt-2.5">Error: 404</h2>
      <p>Siamo spiacenti, ma questa pagina non esiste.</p>
    </ErrorBox>
  );
}
