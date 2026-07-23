import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { damping: 20, stiffness: 300, mass: 0.5 });
    const smoothY = useSpring(mouseY, { damping: 20, stiffness: 300, mass: 0.5 });

    const [hover, setHover] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
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
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-50 
                 bg-zinc-900/50 mix-blend-multiply"
            style={{
                x: smoothX,
                y: smoothY,
                translateX: "-50%",
                translateY: "-50%"
            }}
            animate={{
                width: hover ? 40 : 24,
                height: hover ? 40 : 24,
            }}
            transition={{
                width: { type: "spring", stiffness: 300, damping: 20 },
                height: { type: "spring", stiffness: 300, damping: 20 }
            }}
        />
    );
}