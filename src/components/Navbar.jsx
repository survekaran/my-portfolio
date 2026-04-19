import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-40 
                    backdrop-blur-md bg-black/30 border-b border-gray-800">

            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

                {/* Logo */}
                <h1 className="text-lg font-bold 
                       bg-gradient-to-r from-cyan-400 to-purple-500 
                       bg-clip-text text-transparent">
                    Karan
                </h1>

                {/* Links */}
                <div className="flex gap-6 text-sm">

                    <a href="#about" className="hover:text-cyan-400 transition duration-300">
                        About
                    </a>

                    <a href="#projects" className="hover:text-cyan-400 transition duration-300">
                        Projects
                    </a>

                    <a href="#contact" className="hover:text-cyan-400 transition duration-300">
                        Contact
                    </a>

                </div>

            </div>
        </nav>
    );
}