"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  ExternalLink,
  Github,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FileText,
  BarChart4,
  ShoppingCart,
  BookOpen,
  Briefcase,
  Gamepad2,
  KeyRound,
  Trash2,
  Library,
  Scissors,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Corona Virus ML and EDA",
    description: "Model, Analysis and Dashboard for Corona Virus Data",
    image: "/placeholder.svg?height=400&width=600",
    icon: FileText,
    tags: ["Machine Learning", "EDA", "Dashboard", "Data Analysis"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Hotel Bookings EDA",
    description: "Analysis and Dashboard for Hotel Bookings Data",
    image: "/placeholder.svg?height=400&width=600",
    icon: BarChart4,
    tags: ["EDA", "Dashboard", "Data Analysis", "Visualization"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Ecommerce EDA",
    description: "Analysis and Dashboard for Ecommerce Data",
    image: "/placeholder.svg?height=400&width=600",
    icon: ShoppingCart,
    tags: ["EDA", "Dashboard", "Data Analysis", "Visualization"],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "DIWAN Web Scraping",
    description: "Scraping Some Books Details",
    image: "/placeholder.svg?height=400&width=600",
    icon: BookOpen,
    tags: ["Web Scraping", "BeautifulSoup", "Data Collection"],
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "BooksToScrape Web Scraping",
    description: "Scraping Book Title, Rate and Price",
    image: "/placeholder.svg?height=400&width=600",
    icon: BookOpen,
    tags: ["Web Scraping", "BeautifulSoup", "Data Collection"],
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "WUZZUF Web Scraping",
    description: "Scraping Job Title and Job Requirements and Other Details",
    image: "/placeholder.svg?height=400&width=600",
    icon: Briefcase,
    tags: ["Web Scraping", "BeautifulSoup", "Data Collection", "Job Data"],
    github: "#",
    demo: "#",
  },
  {
    id: 7,
    title: "YallaKora Web Scraping",
    description: "Scraping The Teams, The Result and other Details",
    image: "/placeholder.svg?height=400&width=600",
    icon: FileText,
    tags: ["Web Scraping", "BeautifulSoup", "Data Collection", "Sports Data"],
    github: "#",
    demo: "#",
  },
  {
    id: 8,
    title: "Hungman Game",
    description: "Guess The Word With Limited Attempts Game",
    image: "/placeholder.svg?height=400&width=600",
    icon: Gamepad2,
    tags: ["Python", "Game Development", "CLI"],
    github: "#",
    demo: "#",
  },
  {
    id: 9,
    title: "Password Generator",
    description: "Controllable N-Digit (Default=16) Strong Password Generator",
    image: "/placeholder.svg?height=400&width=600",
    icon: KeyRound,
    tags: ["Python", "Security", "Utility"],
    github: "#",
    demo: "#",
  },
  {
    id: 10,
    title: "Thanos",
    description: "Program that Deletes Half of The Files Randomly Choosen",
    image: "/placeholder.svg?height=400&width=600",
    icon: Trash2,
    tags: ["Python", "File Management", "Utility"],
    github: "#",
    demo: "#",
  },
  {
    id: 11,
    title: "Library System",
    description: "Managment System for Libraries with OOP",
    image: "/placeholder.svg?height=400&width=600",
    icon: Library,
    tags: ["Python", "OOP", "Management System"],
    github: "#",
    demo: "#",
  },
  {
    id: 12,
    title: "Rock Paper Scissors Game",
    description: "You and Computer, The First One Reaches 5 Wins",
    image: "/placeholder.svg?height=400&width=600",
    icon: Scissors,
    tags: ["Python", "Game Development", "CLI"],
    github: "#",
    demo: "#",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeProject, setActiveProject] = useState<number | null>(null)

  const projectsPerPage = 4
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject)

  const goToPage = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
    }
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [])

  return (
    <section id="projects" className="py-20 bg-black relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
            <span className="text-accent">Data Science</span> Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exploring data science through innovative projects, from analysis and visualization to machine learning and
            web scraping.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <Card className="project-card overflow-hidden bg-card/50 backdrop-blur-sm border-gray-800 h-full">
                  <div className="relative aspect-video overflow-hidden bg-gray-800 flex items-center justify-center">
                    <project.icon size={60} className="text-accent opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 font-space-grotesk">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-secondary/50 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 mt-auto">
                      <a
                        href={project.github}
                        className="text-gray-400 hover:text-accent transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demo}
                        className="text-gray-400 hover:text-accent transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={`#project-${project.id}`}
                        className="ml-auto text-accent flex items-center gap-1 text-sm hover:underline"
                      >
                        View Details <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center items-center mt-12 space-x-2"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full border-gray-700 bg-gray-800/50 hover:bg-gray-700/50 hover:text-accent disabled:opacity-50"
              aria-label="Previous page"
            >
              <ChevronLeft size={20} />
            </Button>

            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={page === currentPage ? "default" : "outline"}
                  size="icon"
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-full ${
                    page === currentPage
                      ? "bg-accent text-black hover:bg-accent/90"
                      : "border-gray-700 bg-gray-800/50 hover:bg-gray-700/50 hover:text-accent"
                  }`}
                  aria-label={`Go to page ${page}`}
                  aria-current={page === currentPage ? "page" : undefined}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full border-gray-700 bg-gray-800/50 hover:bg-gray-700/50 hover:text-accent disabled:opacity-50"
              aria-label="Next page"
            >
              <ChevronRight size={20} />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
