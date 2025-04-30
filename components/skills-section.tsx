"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, BarChart, LineChart, BrainCircuit, Wrench, GitBranch, FlaskConical, Server, PieChart, BarChart2 } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: [{ name: "Python", icon: FlaskConical }],
  },
  {
    title: "Data Analysis",
    icon: LineChart,
    skills: [
      { name: "NumPy", icon: PieChart },
      { name: "Pandas", icon: BarChart2 },
      { name: "Data Cleaning", icon: LineChart },
      { name: "Descriptive Statistics", icon: BarChart },
      { name: "Linear Algebra", icon: LineChart },
    ],
  },
  {
    title: "Data Visualization",
    icon: BarChart,
    skills: [
      { name: "Plotly", icon: BarChart },
      { name: "Seaborn (Familiar)", icon: BarChart2 },
      { name: "Matplotlib (Familiar)", icon: PieChart },
    ],
  },
  {
    title: "Database Management",
    icon: Database,
    skills: [
      { name: "SQL", icon: Server },
      { name: "MySQL", icon: Database },
      { name: "SQL Server", icon: Server },
    ],
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    skills: [{ name: "Scikit-learn", icon: BrainCircuit }],
  },
  {
    title: "Deployment & Web Scraping",
    icon: Wrench,
    skills: [
      { name: "Git/GitHub", icon: GitBranch },
      { name: "Streamlit", icon: Wrench },
      { name: "BeautifulSoup", icon: FlaskConical },
    ],
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4 text-white">
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
              transition={{ duration: 0.6, delay: 0.2 * categoryIndex }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-md border border-gray-700 rounded-xl p-6 h-full flex flex-col shadow-lg hover:shadow-[0_0_15px_3px_rgba(0,255,255,0.2)] transition-shadow duration-300">
                {/* Subtle Glow Border Effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent/30 transition-all duration-300 pointer-events-none"></div>

                {/* Category Header */}
                <div className="flex items-center mb-4 space-x-3">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <category.icon className="text-accent" size={28} />
                  </div>
                  <h3 className="text-lg font-bold font-space-grotesk text-gray-100">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center bg-gray-800/50 rounded-lg p-2 hover:bg-accent/10 transition-transform duration-200"
                    >
                      <skill.icon className="text-accent mr-2" size={16} />
                      <span className="text-sm text-gray-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
