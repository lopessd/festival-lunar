"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="relative w-full pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full"
      >
        <img
          src="/hero-desktop.png.png"
          alt="Festival da Lua"
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </section>
  )
}
