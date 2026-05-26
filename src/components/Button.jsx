import { useState } from "react";
function Button({ label, classes, handleClick, children }) {
  return (
    <button onClick={handleClick} className={`btn ${classes}`}>
      {children}
      {label}
    </button>
  )
}

export default Button;