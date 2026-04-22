import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl z-50 
                       bg-white/70 backdrop-blur-xl rounded-full px-8 py-3.5 
                       shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5"
        >

            <div className="flex justify-between items-center w-full">

                {/* Logo */}
                <a href="#" className="text-xl font-bold tracking-tight text-zinc-900 hover:opacity-70 transition-opacity">
                    Karan<span className="text-zinc-400 text-2xl leading-none">.</span>
                </a>

                {/* Links */}
                <div className="flex gap-8 text-sm font-medium">

                    <a href="#about" className="text-zinc-600 hover:text-zinc-900 transition duration-300 relative group">
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <a href="#projects" className="text-zinc-600 hover:text-zinc-900 transition duration-300 relative group">
                        Projects
                        <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <a href="#contact" className="text-zinc-600 hover:text-zinc-900 transition duration-300 relative group">
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    {/* <a href="public/Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900 transition duration-300 relative group">
                        Resume
                        <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-zinc-900 transition-all duration-300 group-hover:w-full"></span>
                    </a> */}

                </div>

            </div>
        </motion.nav>
    );
}