import Particles from "react-tsparticles";

export default function Background() {
    return (
        <Particles
            options={{
                particles: {
                    number: { value: 80 },
                    size: { value: 2 },
                    move: { speed: 1 },
                },
            }}
        />
    );
}