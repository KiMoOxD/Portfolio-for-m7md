"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import NeuralNetworkCanvas from "./neural-network-canvas"
import ParticleBackground from "./particle-background"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <ParticleBackground />

      <div className="absolute inset-0 z-0">
        <NeuralNetworkCanvas />
      </div>

      <div className="absolute inset-0 hero-gradient z-0"></div>

      <div ref={containerRef} className="container mx-auto px-4 md:px-6 relative z-10 mt-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-space-grotesk text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-white">Mohamed Abobakr</span>
              <br />
              <span className="text-accent">Junior Data Scientist</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Helping businesses grow through advanced analytics and machine learning, optimizing decision-making and
              driving efficiency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-black font-medium rounded-md hover:bg-accent/90 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-700 text-white font-medium rounded-md hover:border-accent hover:text-accent transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
