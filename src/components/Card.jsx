// src/components/Card.jsx

import { cn } from "../lib/utils";

const BASE_STYLES = "flex flex-col justify-stretch rounded-2xl w-full bg-white shadow-md shadow-dark-overlay overflow-hidden cursor-pointer disabled:cursor-default";

const VARIANT_STYLES = {
  none: "",
  border: "border border-grey-light",
  hoverScale: "hover:scale-105 transition-transform motion-reduce:transition-none motion-reduce:hover:transform-none",
};

export default function Card({ person, className, variant = "none", ...props }) {
  return (
    <div className={cn(BASE_STYLES, VARIANT_STYLES[variant], className)} {...props}>
      <img src={person.avatar} alt={person.firstName} />
      <div className="p-2.5">
        <strong className="text-lg">{person.firstName}</strong>
        <p className="line-clamp-3">{person.bio}</p>
      </div>
    </div>
  );
}