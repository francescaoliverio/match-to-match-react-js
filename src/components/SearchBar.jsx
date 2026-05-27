import { useState } from "react";

import { cn } from "../lib/utils";

const BASE_STYLES = "flex items-center justify-center px-5 py-2.5 rounded-full w-fit disabled:cursor-default";

const VARIANT_STYLES = {
  transparent: "text-ink bg-transparent-white",
};

export default function SearchBar({placeholder, variant="transparent", className, children, ...props}) {
  const[input, setInput] = useState("");

  function handleChangeInput(i) {
    setInput(i.target.value);
  }

  return (
    <div className={cn(BASE_STYLES, VARIANT_STYLES[variant], className)} {...props}>
      <input type="text" value={input} onChange={handleChangeInput} placeholder={placeholder} className="outline-none" />
      {children}
    </div>
  );
}