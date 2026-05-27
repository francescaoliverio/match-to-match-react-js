import { useState } from "react";

export default function SearchBar({placeholder, children}) {
  const[input, setInput] = useState("");

  function handleChangeInput(i) {
    setInput(i.target.value);
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleChangeInput} placeholder={placeholder} />
      {children}
    </div>
  );
}
