"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Brain, BookOpen, GraduationCap, Briefcase, Mail, Github, Linkedin } from "lucide-react"
import ProfilePhoto from "./profile-photo"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Junior Data Scientist passionate about uncovering patterns and extracting actionable insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center items-center"
          >
            <ProfilePhoto />

            <div className="mt-6 flex flex-col items-center space-y-3 w-full">
              <h3 className="text-xl font-bold font-space-grotesk mb-2">Mohamed Abobakr</h3>
              <p className="text-accent mb-4">Junior Data Scientist</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-gray-800 p-6 h-full">
              <div className="flex items-center mb-6">
                <Brain className="text-accent mr-3" size={24} />
                <h3 className="text-xl font-bold font-space-grotesk">About Me</h3>
              </div>

              <p className="text-gray-300 mb-4">
                I am a detail-oriented data science student with hands-on experience in data analysis and machine
                learning, building end-to-end AI models and interactive dashboards. I help businesses grow through
                advanced analytics and machine learning, optimizing decision-making and driving efficiency.
              </p>

              <p className="text-gray-300 mb-4">
                Passionate about uncovering patterns, extracting actionable insights, and developing predictive
                solutions to solve real-world problems.
              </p>

              <div className="mt-6">
                <h4 className="text-lg font-medium mb-3">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {["Analytical Thinking", "Problem Solving", "Adaptability", "Teamwork", "Communication"].map(
                    (skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-gray-800 p-6 h-full">
              <div className="flex items-center mb-6">
                <BookOpen className="text-accent mr-3" size={24} />
                <h3 className="text-xl font-bold font-space-grotesk">Education & Certificates</h3>
              </div>

              <div className="space-y-6">
                {/* Education Item */}
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <div className="w-0.5 h-full bg-gray-700"></div>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <GraduationCap size={16} className="text-accent mr-2" />
                      <h4 className="text-lg font-medium">Bachelor of Computer Science</h4>
                    </div>
                    <p className="text-sm text-gray-400 mb-1">Beni-Suef University • 2021 - 2025</p>
                    <p className="text-sm text-gray-300">
                      Studying computer science with focus on data science and machine learning.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <Briefcase size={16} className="text-accent mr-2" />
                      <h4 className="text-lg font-medium">Certified Data Science Professional</h4>
                    </div>
                    <p className="text-sm text-gray-400 mb-1">EpsilonAI • 2023 - 2024</p>
                    <p className="text-sm text-gray-300">
                      Professional certification in data science covering machine learning, data analysis, and
                      visualization.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
