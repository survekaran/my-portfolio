import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section className="p-10 grid md:grid-cols-3 gap-6">

            {/* Project 1 */}
            <motion.div
                whileHover={{ scale: 1.08 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="border border-gray-700 p-6 rounded-xl backdrop-blur-md bg-white/5 
                   hover:shadow-[0_0_20px_#00ffff] transition duration-300"
            >
                <h2 className="text-xl font-semibold">Resume Analyzer</h2>
                <p className="text-gray-400 mt-2">Python + ML</p>
            </motion.div>

            {/* Project 2 */}
            <motion.div
                whileHover={{ scale: 1.08 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="border border-gray-700 p-6 rounded-xl backdrop-blur-md bg-white/5 
                   hover:shadow-[0_0_20px_#8b5cf6] transition duration-300"
            >
                <h2 className="text-xl font-semibold">Flight Booking</h2>
                <p className="text-gray-400 mt-2">MERN Stack</p>
            </motion.div>

            {/* Project 3 (add this too) */}
            <motion.div
                whileHover={{ scale: 1.08 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="border border-gray-700 p-6 rounded-xl backdrop-blur-md bg-white/5 
                   hover:shadow-[0_0_20px_#00ff99] transition duration-300"
            >
                <h2 className="text-xl font-semibold">Villa Finder</h2>
                <p className="text-gray-400 mt-2">Hyperlocal Platform</p>
            </motion.div>

        </section>
    );
}