import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="min-h-[80vh] flex items-center justify-center px-6 relative py-20">

            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-xl w-full text-center relative z-10 
                           bg-white p-12 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                           border border-black/5"
            >
                <p className="text-zinc-400 text-sm tracking-[0.3em] uppercase font-semibold mb-3">Connect</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-zinc-900">
                    Get in Touch
                </h2>

                <p className="text-zinc-500 mb-10 text-lg font-light leading-relaxed">
                    I'm currently exploring new opportunities. Whether you have a question, want to collaborate, or just say hi, I'll try my best to get back to you!
                </p>

                {/* Links */}
                <div className="flex justify-center gap-6 flex-wrap">
                    <a href="mailto:survekaran71@gmail.com"
                        className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-zinc-50 border border-black/5
                                   hover:bg-zinc-100 hover:-translate-y-2 hover:shadow-md transition-all duration-300 w-28">
                        <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300">📧</span>
                        <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900">Email</span>
                    </a>

                    <a href="https://github.com/survekaran"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-zinc-50 border border-black/5
                                   hover:bg-zinc-100 hover:-translate-y-2 hover:shadow-md transition-all duration-300 w-28">
                        <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300">💻</span>
                        <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900">GitHub</span>
                    </a>

                    <a href="https://www.linkedin.com/in/karan-surve-7504782a8/"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-zinc-50 border border-black/5
                                   hover:bg-zinc-100 hover:-translate-y-2 hover:shadow-md transition-all duration-300 w-28">
                        <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300">🔗</span>
                        <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900">LinkedIn</span>
                    </a>
                </div>
            </motion.div>
        </section>
    );
}