import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hover, setHover] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const addHover = () => setHover(true);
        const removeHover = () => setHover(false);

        const elements = document.querySelectorAll("button, a, .hover-target");

        elements.forEach((el) => {
            el.addEventListener("mouseenter", addHover);
            el.addEventListener("mouseleave", removeHover);
        });

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            elements.forEach((el) => {
                el.removeEventListener("mouseenter", addHover);
                el.removeEventListener("mouseleave", removeHover);
            });
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-50 
                 bg-zinc-900/50 mix-blend-multiply"
            animate={{
                x: position.x - (hover ? 20 : 12),
                y: position.y - (hover ? 20 : 12),
                width: hover ? 40 : 24,
                height: hover ? 40 : 24,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
            }}
        />
    );
}