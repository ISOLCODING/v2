import React from "react";
import { cn } from "@/utils/cn";

export default function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-neumorph-shadow-dark/20", className)}
      {...props}
    />
  );
}
