import React from "react";
import { cn } from "../utils/cn";

export default function NeumorphicCard({ children, className, inset = false, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl bg-background text-gray-800 transition-all duration-300",
        inset ? "shadow-neumorph-inset" : "shadow-neumorph hover:-translate-y-1 hover:shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
