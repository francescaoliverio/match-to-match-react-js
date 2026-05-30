// src/components/Card.jsx

import { cn } from "../lib/utils";

const BASE_STYLES = "flex flex-col justify-stretch rounded-2xl w-2xs bg-white overflow-hidden cursor-pointer disabled:cursor-default";

const VARIANT_STYLES = {
  border: "border border-grey-light"
};

export default function Card({ person, className, variant = "border", ...props }) {
  return (
    <div className={cn(BASE_STYLES, VARIANT_STYLES[variant], className)} {...props}>
      <img src={person.avatar} alt={person.firstName} />
      <div className="p-2.5">
        <strong>{person.firstName}</strong>
        <p className="line-clamp-3">{person.bio}</p>
      </div>
    </div>
  );
}