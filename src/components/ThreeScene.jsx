import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
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
                color="#00ffff"
                emissive="#00ffff"
                emissiveIntensity={1.5}
                wireframe
            />
        </mesh>
    );
}

function Particles() {
    const particles = new Float32Array(500 * 3);

    for (let i = 0; i < 500; i++) {
        particles[i * 3] = (Math.random() - 0.5) * 10;
        particles[i * 3 + 1] = (Math.random() - 0.5) * 10;
        particles[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    return (
        <Points positions={particles} stride={3}>
            <PointMaterial
                transparent
                color="#00ffff"
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    );
}

export default function ThreeScene() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10">
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[5, 5, 5]} />

                <Particles />   {/* 👈 ADD THIS */}
                <Sphere />
            </Canvas>
        </div>
    );
}