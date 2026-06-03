// src/components/Card.jsx

import { cn } from "../lib/utils";

const BASE_STYLES = "flex flex-col justify-stretch rounded-2xl w-full bg-white shadow-md shadow-dark-overlay overflow-hidden cursor-pointer disabled:cursor-default";

const VARIANT_STYLES = {
  none: "",
  border: "border border-grey-light",
  hoverScale: "hover:scale-105 transition-transform motion-reduce:transition-none motion-reduce:hover:transform-none",
};

// Card: display picture, name and bio of provided person
export default function Card({ obj, img, title, description, className, variant = "none", ...props }) {
  return (
    <div className={cn(BASE_STYLES, VARIANT_STYLES[variant], className)} {...props}>
      <img src={img} alt={title} />
      <div className="p-2.5">
        <strong className="text-lg">{title}</strong>
        <p className="line-clamp-3">{description}</p>
      </div>
    </div>
  );
}

// Card Skeleton: used while loading content
export function CardSkeleton({ className, variant = "none", ...props }) {
  return (
    <div className={cn(BASE_STYLES, VARIANT_STYLES[variant], className, "cursor-wait")} {...props}>
      <div className="w-full aspect-square bg-grey-lighter animate-pulse" />
      <div className="flex flex-col justify-stretch gap-2.5 p-2.5 h-[5lh] animate-pulse">
        <div className="bg-grey-lighter w-[50%] h-full rounded-full"></div>
        <div className="bg-grey-lighter w-full h-full rounded-full"></div>
        <div className="bg-grey-lighter w-[65%] h-full rounded-full"></div>
        <div className="bg-grey-lighter w-[85%] h-full rounded-full"></div>
      </div>
    </div>
  )
}