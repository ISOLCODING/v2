import React from "react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import NeumorphicCard from "@/Components/NeumorphicCard";

export const BentoGrid = ({
   className,
   children,
}) => {
   return (
      <div
         className={cn(
            "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto ",
            className
         )}
      >
         {children}
      </div>
   );
};

export const BentoGridItem = ({
   className,
   title,
   description,
   header,
   icon,
   onClick,
}) => {
   return (
      <motion.div
         whileHover={{ scale: 1.02 }}
         className={cn("row-span-1 rounded-xl group/bento transition duration-200", className)}
         onClick={onClick}
      >
         <NeumorphicCard className="h-full flex flex-col justify-between p-4 space-y-4 bg-gray-100 dark:bg-zinc-900 border-transparent">
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
               {icon}
               <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                  {title}
               </div>
               <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                  {description}
               </div>
            </div>
         </NeumorphicCard>
      </motion.div>
   );
};
