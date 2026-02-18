import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../utils/cn";

export default function Navbar() {
   const { scrollY } = useScroll();
   const [hidden, setHidden] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   useMotionValueEvent(scrollY, "change", (latest) => {
      const previous = scrollY.getPrevious();
      if (latest > previous && latest > 150) {
         setHidden(true);
      } else {
         setHidden(false);
      }

      if (latest > 50) {
         setScrolled(true);
      } else {
         setScrolled(false);
      }
   });

   return (
      <motion.nav
         variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
         }}
         animate={hidden ? "hidden" : "visible"}
         transition={{ duration: 0.35, ease: "easeInOut" }}
         className={cn(
            "fixed top-0 inset-x-0 mx-auto z-50 transition-all duration-300",
            scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10" : "bg-transparent"
         )}
      >
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
               <div className="flex-shrink-0 flex items-center">
                  <span className="font-bold text-2xl text-white">Dev<span className="text-fresh-blue-500">Folio</span></span>
               </div>
               <div className="hidden md:flex space-x-8">
                  {['Home', 'Projects', 'Services', 'Contact'].map((item) => (
                     <a
                        key={item}
                        href="#"
                        className="text-gray-300 hover:text-white hover:text-fresh-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                     >
                        {item}
                     </a>
                  ))}
               </div>
               <div className="md:hidden">
                  <button className="text-gray-300 hover:text-white">
                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </motion.nav>
   );
}
