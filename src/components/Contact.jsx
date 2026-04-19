import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-6">

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-xl w-full text-center 
                   backdrop-blur-md bg-white/5 
                   border border-gray-700 p-8 rounded-2xl"
            >

                <h2 className="text-3xl font-bold mb-6 
                       bg-gradient-to-r from-cyan-400 to-purple-500 
                       bg-clip-text text-transparent">
                    Get in Touch
                </h2>

                <p className="text-gray-400 mb-6">
                    Feel free to reach out for collaborations or opportunities.
                </p>

                {/* Links */}
                <div className="flex flex-col gap-4">

                    <a href="survekaran71@gmail.com"
                        className="hover:text-cyan-400 transition duration-300">
                        📧 Email
                    </a>

                    <a href="https://github.com/survekaran"
                        target="_blank"
                        className="hover:text-cyan-400 transition duration-300">
                        💻 GitHub
                    </a>

                    <a href="https://www.linkedin.com/in/karan-surve-7504782a8/"
                        target="_blank"
                        className="hover:text-cyan-400 transition duration-300">
                        🔗 LinkedIn
                    </a>

                </div>

            </motion.div>

        </section>
    );
}