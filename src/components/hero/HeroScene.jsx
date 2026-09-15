import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import { useRef } from "react";

function AnimatedCore() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += delta * 0.18;
    meshRef.current.rotation.y += delta * 0.3;

    const targetX = state.pointer.y * 0.15;
    const targetY = state.pointer.x * 0.2;

    meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.01;

    meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.01;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.7} floatIntensity={1.4}>
      <mesh ref={meshRef} scale={1.65}>
        <icosahedronGeometry args={[1, 4]} />

        <MeshDistortMaterial
          color="#8b5cf6"
          roughness={0.18}
          metalness={0.75}
          distort={0.25}
          speed={1.8}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
}

function InnerCore() {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y -= delta * 0.5;
    meshRef.current.rotation.z += delta * 0.2;
  });

  return (
    <mesh ref={meshRef} scale={0.72}>
      <icosahedronGeometry args={[1, 2]} />

      <meshStandardMaterial color="#111118" metalness={0.9} roughness={0.18} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />

      <directionalLight position={[4, 5, 4]} intensity={2} />

      <pointLight
        position={[-4, -2, 3]}
        intensity={8}
        distance={10}
        color="#8b5cf6"
      />

      <pointLight
        position={[4, 2, -3]}
        intensity={5}
        distance={8}
        color="#6366f1"
      />

      <AnimatedCore />

      <InnerCore />

      <Environment preset="city" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        enableDamping
        dampingFactor={0.08}
      />
    </>
  );
}

function HeroScene() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 45,
        }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export default HeroScene;
