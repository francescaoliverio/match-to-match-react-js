// src/pages/NotFound.jsx

import { ERROR_BOX_STYLES } from "../styles/styles";

export default function NotFound() {

  return (
    <div className={ERROR_BOX_STYLES}>
      <h2>Error: 404</h2>
      <h1>Oh no!</h1>
      <p>Siamo spiacenti, ma questa pagina non esiste.</p>
    </div>
  );
}
