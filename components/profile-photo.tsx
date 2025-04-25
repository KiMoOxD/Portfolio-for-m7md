"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-64 h-64 mx-auto mb-8 lg:mb-0"
    >
      <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl"></div>
      <div className="relative w-full h-full rounded-full border-2 border-accent overflow-hidden">
        <Image src="/m7md.jpg" alt="Profile Photo" fill className="object-cover" priority />
      </div>
      <motion.div
        className="absolute -inset-0.5 rounded-full border-2 border-accent"
        animate={{
          boxShadow: [
            "0 0 10px rgba(0, 183, 255, 0.3)",
            "0 0 20px rgba(0, 183, 255, 0.5)",
            "0 0 10px rgba(0, 183, 255, 0.3)",
          ],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      ></motion.div>
    </motion.div>
  )
}
