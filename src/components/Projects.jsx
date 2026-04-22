import { motion } from "framer-motion";

const projects = [
    {
        title: "Resume Analyzer",
        description: "AI-powered tool that analyzes resumes against job descriptions, providing skill gap analysis and improvement suggestions.",
        tech: ["Javascript", "Typescript", "HTML", "Python"],
        github: "https://github.com/survekaran/AI-Resume-Analyzer",
        live: "https://ai-resume-analyzer-lemon-eta.vercel.app/",
        color: "from-zinc-200 to-zinc-300",
        shadow: "rgba(0, 0, 0, 0.05)",
    },
    {
        title: "Flight Booking",
        description: "Full-stack flight booking platform with real-time seat availability, user authentication, and booking management.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        github: "https://github.com/survekaran",
        live: null,
        color: "from-zinc-200 to-zinc-300",
        shadow: "rgba(0, 0, 0, 0.05)",
    },
    {
        title: "Wavdrop",
        description: "A fast and seamless platform for sharing and streaming high-quality audio files instantly. Built for creators and producers.",
        tech: ["Python", "HTML", "ffmpeg", "yt-dlp", "Flask"],
        github: "https://github.com/survekaran/WAVDROP",
        live: "https://wavdrop-chi.vercel.app/",
        color: "from-zinc-200 to-zinc-300",
        shadow: "rgba(0, 0, 0, 0.05)",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen px-6 py-24 relative">

            {/* Section heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20 relative z-10"
            >
                <p className="text-zinc-500 text-sm tracking-[0.3em] uppercase font-semibold mb-4">What I Build</p>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900">Featured Projects</h2>
            </motion.div>

            {/* Project cards */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        whileHover={{ y: -5 }}
                        className="group relative flex flex-col h-full"
                    >

                        {/* Card Content */}
                        <div className="bg-white p-8 rounded-[2rem] h-full flex flex-col relative overflow-hidden border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 z-10">

                            {/* Accent line */}
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} opacity-40`} />

                            {/* Card header */}
                            <div className="mb-6 mt-2">
                                <div
                                    className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center text-2xl 
                                                bg-zinc-50 border border-zinc-100 shadow-sm`}
                                >
                                    <span className="">{i === 0 ? "🤖" : i === 1 ? "✈️" : "🏡"}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-zinc-900 tracking-tight">{project.title}</h3>
                                <p className="text-zinc-500 text-base leading-relaxed">{project.description}</p>
                            </div>

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-600 border border-black/5 font-medium"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-6 mt-auto pt-6 border-t border-black/5">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-zinc-500 hover:text-zinc-900 transition duration-300 flex items-center gap-2 group/link font-medium text-sm"
                                >
                                    <span className="text-lg grayscale group-hover/link:grayscale-0 transition-all">💻</span> GitHub
                                </a>
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-zinc-500 hover:text-zinc-900 transition duration-300 flex items-center gap-2 group/link font-medium text-sm"
                                    >
                                        <span className="text-lg grayscale group-hover/link:grayscale-0 transition-all">🚀</span> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
