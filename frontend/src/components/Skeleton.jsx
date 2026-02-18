import React from "react";
import { cn } from "../utils/cn";

export default function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-neutral-800/20", className)}
      {...props}
    />
  );
}
