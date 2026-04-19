import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Sphere() {
    const meshRef = useRef();

    useFrame(({ clock, mouse }) => {
        const time = clock.getElapsedTime();

        // Rotation (mouse + auto)
        meshRef.current.rotation.x = mouse.y * 2;
        meshRef.current.rotation.y = mouse.x * 2;

        // WAVE DISTORTION 🔥
        meshRef.current.geometry.attributes.position.array.forEach((_, i, arr) => {
            if (i % 3 === 0) {
                arr[i] += Math.sin(time + arr[i]) * 0.002;
                arr[i + 1] += Math.cos(time + arr[i + 1]) * 0.002;
            }
        });

        meshRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[1.5, 64, 64]} />
            <meshStandardMaterial
                color="#e4e4e7" /* zinc-200 */
                emissive="#d4d4d8" /* zinc-300 */
                emissiveIntensity={0.2}
                wireframe
            />
        </mesh>
    );
}

function Particles() {
    const particles = useMemo(() => {
        const temp = new Float32Array(500 * 3);
        for (let i = 0; i < 500; i++) {
            temp[i * 3] = (Math.random() - 0.5) * 10;
            temp[i * 3 + 1] = (Math.random() - 0.5) * 10;
            temp[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return temp;
    }, []);

    return (
        <Points positions={particles} stride={3}>
            <PointMaterial
                transparent
                color="#a1a1aa" /* zinc-400 */
                size={0.03}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.5}
            />
        </Points>
    );
}

export default function ThreeScene() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10">
            <Canvas>
                <ambientLight intensity={0.8} />
                <pointLight position={[5, 5, 5]} intensity={2} />

                <Particles />
                <Sphere />
            </Canvas>
        </div>
    );
}