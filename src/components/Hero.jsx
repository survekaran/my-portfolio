import { motion } from "framer-motion";

export default function Hero() {
    const name = "Karan Surve";

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden pt-20">

            {/* Minimalist Profile Picture */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8 relative group"
            >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-black/10 shadow-xl bg-white relative z-10">
                    <img
                        src="profile.jpeg"
                        alt="Karan Surve"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        title="Replace this placeholder with your photo in /public/profile.jpg"
                    />
                </div>
                {/* Subtle soft shadow ring behind image */}
                <div className="absolute inset-0 bg-black/5 rounded-full blur-xl -z-10 translate-y-4 group-hover:translate-y-6 transition-transform duration-500"></div>
            </motion.div>

            {/* Greeting */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/5 bg-white shadow-sm"
            >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <p className="text-zinc-500 text-xs tracking-widest uppercase font-medium">
                    Available for work
                </p>
            </motion.div>

            {/* Animated name */}
            <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-zinc-900 flex gap-2 flex-wrap justify-center mb-6 tracking-tighter">
                {name.split(" ").map((word, wIdx) => (
                    <span key={wIdx} className="flex">
                        {word.split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (wIdx * 5 + i) * 0.05, duration: 0.8, ease: "backOut" }}
                            >
                                {char}
                            </motion.span>
                        ))}
                        {wIdx !== name.split(" ").length - 1 && <span className="w-4 md:w-6"></span>}
                    </span>
                ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-xl md:text-2xl text-zinc-500 mb-6 font-medium tracking-tight"
            >
                Full-Stack Developer & CS Student
            </motion.h2>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="text-zinc-400 max-w-xl mb-10 text-base md:text-lg leading-relaxed"
            >
                Building modern web experiences with <span className="text-zinc-800 font-medium">React</span>, <span className="text-zinc-800 font-medium">Node.js</span>, and an obsession for clean, impactful typography.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex gap-4 flex-wrap justify-center"
            >
                <a
                    href="#projects"
                    className="group px-8 py-3.5 rounded-full bg-zinc-900 text-white
                               hover:bg-zinc-800 hover:shadow-lg transition-all duration-300
                               font-medium text-sm md:text-base flex items-center gap-2"
                >
                    View Projects
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                    href="#contact"
                    className="px-8 py-3.5 rounded-full bg-white text-zinc-900 border border-black/10 
                               font-medium text-sm md:text-base hover:bg-zinc-50 transition-all duration-300
                               hover:shadow-sm"
                >
                    Get In Touch
                </a>
            </motion.div>

        </section>
    );
}