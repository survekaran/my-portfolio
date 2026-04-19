import { motion } from "framer-motion";

const skills = [
    "React", "Node.js", "MongoDB", "Express",
    "JavaScript", "Python", "Tailwind CSS", "Three.js",
    "Git", "REST APIs", "SQL", "Machine Learning",
];

export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-6 py-24 relative">

            <div className="max-w-4xl w-full relative z-10">

                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-zinc-400 text-sm tracking-[0.3em] uppercase font-semibold mb-4">Who I Am</p>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900">My Journey in <span className="text-zinc-400 italic font-light">Tech</span></h2>
                </motion.div>

                {/* Bio card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/80 backdrop-blur-md p-10 md:p-12 rounded-3xl mb-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-black/5 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <p className="text-zinc-600 leading-relaxed text-lg md:text-xl font-light">
                        I am a passionate web developer and computer science student focused on building
                        real-world projects. I enjoy turning ideas into functional and visually appealing
                        applications using modern technologies like <strong className="font-semibold text-zinc-900">React, Node.js, and MongoDB</strong>.
                    </p>

                    <p className="text-zinc-600 mt-6 leading-relaxed text-lg md:text-xl font-light">
                        I believe in continuous learning, consistency, and improving my skills every day.
                        My goal is to create impactful digital experiences and grow as a developer.
                    </p>
                </motion.div>

                {/* Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h3 className="text-sm font-semibold text-zinc-400 mb-8 text-center tracking-widest uppercase">Tech Stack</h3>
                    <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
                        {skills.map((skill, i) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="px-5 py-2.5 rounded-full border border-black/5 text-sm md:text-base font-medium 
                                           bg-white text-zinc-600 hover:text-zinc-900 shadow-sm
                                           hover:border-zinc-300 hover:shadow-md
                                           transition-all duration-300 cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
