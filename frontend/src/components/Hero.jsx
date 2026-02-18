import React from "react";
import { motion } from "framer-motion";
import Spotlight from "./ui/Spotlight";
import { cn } from "../utils/cn";
import Scene3D from "./Scene3D";

export default function Hero() {
   return (
      <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
         <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
         />

         <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
            <Scene3D />
         </div>

         <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 pointer-events-none">
            <div className="pointer-events-auto">
               <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  Crafting Digital Experiences <br /> with <span className="text-fresh-blue-500">Laravel</span> & <span className="text-orange-accent-500">React</span>.
               </h1>
               <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                  I build high-performance web applications with a focus on modern design and seamless user interactions.
               </p>

               <div className="mt-8 flex justify-center gap-4">
                  <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="px-8 py-3 bg-fresh-blue-600 hover:bg-fresh-blue-500 text-white rounded-full font-bold shadow-lg shadow-fresh-blue-500/30 transition-all"
                  >
                     View Projects
                  </motion.button>
                  <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="px-8 py-3 border border-orange-accent-500 text-orange-accent-500 hover:bg-orange-accent-500/10 rounded-full font-bold transition-all"
                  >
                     Contact Me
                  </motion.button>
               </div>
            </div>
         </div>

         {/* 3D Decorative Elements (Abstract Orbs) */}
         <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-fresh-blue-500/20 rounded-full blur-3xl opacity-50"
         />
         <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-orange-accent-500/20 rounded-full blur-3xl opacity-50"
         />
      </div>
   );
}
