import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Sphere() {
    const meshRef = useRef();

    useFrame(({ mouse }) => {
        // Smooth Rotation (mouse only)
        if (meshRef.current) {
            // Using lerp for smoother rotation towards mouse position
            meshRef.current.rotation.x += (mouse.y * 1.5 - meshRef.current.rotation.x) * 0.05;
            meshRef.current.rotation.y += (mouse.x * 1.5 - meshRef.current.rotation.y) * 0.05;
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[1.5, 32, 32]} />
            <MeshDistortMaterial
                color="#e4e4e7" /* zinc-200 */
                emissive="#d4d4d8" /* zinc-300 */
                emissiveIntensity={0.2}
                wireframe
                distort={0.3}
                speed={2}
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

    const pointsRef = useRef();

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <Points ref={pointsRef} positions={particles} stride={3}>
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
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.8} />
                <pointLight position={[5, 5, 5]} intensity={2} />

                <Particles />
                <Sphere />
            </Canvas>
        </div>
    );
}