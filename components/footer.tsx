export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">© {currentYear} Mohamed Abo Bakr Portfolio. All rights reserved.</p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">
              Designed and built with <span className="text-accent">❤</span> by KiMo
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
