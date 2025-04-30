import { Facebook, Twitter, Instagram, GitHub, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-gray-400 text-sm">© {currentYear} All rights reserved.</p>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              Designed and built with <span className="text-accent">❤</span> by{" "}
              <a
                href="https://www.linkedin.com/in/kareem-mohamed2002/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                KiMo
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
