"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Code, Database, BarChart, LineChart, BrainCircuit, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: [{ name: "Python", level: 90 }],
  },
  {
    title: "Data Analysis",
    icon: LineChart,
    skills: [
      { name: "NumPy", level: 85 },
      { name: "Pandas", level: 90 },
      { name: "Descriptive Statistics", level: 85 },
    ],
  },
  {
    title: "Data Visualization",
    icon: BarChart,
    skills: [
      { name: "Plotly", level: 90 },
      { name: "Matplotlib", level: 75 },
      { name: "Seaborn", level: 70 },
    ],
  },
  {
    title: "Database Management",
    icon: Database,
    skills: [
      { name: "MySQL", level: 80 },
      { name: "SQL Server", level: 75 },
    ],
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    skills: [
      { name: "Scikit-learn", level: 85 },
      { name: "Regression", level: 80 },
      { name: "Classification", level: 80 },
    ],
  },
  {
    title: "Tools & Web Scraping",
    icon: Wrench,
    skills: [
      { name: "Jupyter Notebooks", level: 90 },
      { name: "Git/GitHub", level: 85 },
      { name: "Streamlit", level: 80 },
      { name: "BeautifulSoup", level: 85 },
    ],
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise in data science, machine learning, and programming.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-gray-800 p-6 h-full">
                <div className="flex items-center mb-6">
                  <category.icon className="text-accent mr-3" size={24} />
                  <h3 className="text-xl font-bold font-space-grotesk">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-300">{skill.name}</span>
                        <span className="text-xs text-accent">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                          className="bg-accent h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
