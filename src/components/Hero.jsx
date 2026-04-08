import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">

            const text = "Karan";

            <motion.h1 className="text-5xl md:text-7xl font-bold flex gap-1">
                {text.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 text-gray-400 text-lg md:text-xl"
            >
                Web Developer | Building Real-World Projects
            </motion.p>

            {/* Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-3 rounded-full border border-cyan-400 
                   text-cyan-400 hover:bg-cyan-400 hover:text-black 
                   transition duration-300 shadow-[0_0_20px_#00ffff]"
            >
                View Projects
            </motion.button>

        </section>
    );
}