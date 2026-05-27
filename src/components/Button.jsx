import "../styles/Button.css"
import { useState } from "react";

export default function Button({ label, classes, handleClick, children }) {
  return (
    <button onClick={handleClick} className={`btn ${classes}`}>
      {children}
      {label}
    </button>
  )
}