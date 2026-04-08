import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6">

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl text-center backdrop-blur-md bg-white/5 
                   border border-gray-700 p-8 rounded-2xl"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    My Journey in Tech
                </h2>

                <p className="text-gray-400 leading-relaxed">
                    I am a passionate web developer and computer science student focused on building
                    real-world projects. I enjoy turning ideas into functional and visually appealing
                    applications using modern technologies like React, Node.js, and MongoDB.
                </p>

                <p className="text-gray-400 mt-4 leading-relaxed">
                    I believe in continuous learning, consistency, and improving my skills every day.
                    My goal is to create impactful digital experiences and grow as a developer.
                </p>
            </motion.section>
        </section>
    );
}