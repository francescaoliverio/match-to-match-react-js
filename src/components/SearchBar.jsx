import { useState } from "react";

export default function SearchBar({placeholder}) {
  const[input, setNewInput] = useState("");

  function handleChangeInput(t) {
    setNewInput(t.target.value);
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChangeInput} placeholder={placeholder} />
    </>
  );
}
