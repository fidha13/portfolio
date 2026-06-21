import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="w-full px-6 py-5 flex justify-between items-center">

        <h1 className="text-white font-bold text-3xl tracking-wider">
          FS
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-400">
          <li>
            <a href="#about" className="hover:text-white">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-white">
              Experience
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col text-center py-4 text-gray-300">
            <li>
              <a
                href="#about"
                className="block py-3 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="block py-3 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="block py-3 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#experience"
                className="block py-3 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="block py-3 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}