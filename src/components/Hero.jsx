import { motion } from "framer-motion";

export default function Hero() {

    const text = "Karan";  // ✅ FIX HERE

    return (
        <section className="h-screen flex flex-col justify-center items-center text-center">

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

        </section>
    );
}