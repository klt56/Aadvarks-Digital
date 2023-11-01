import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';

function SphereWithTexture() {
  const meshRef = useRef();
  const texture = new TextureLoader().load('/assets/texture/planet-observer.jpg');

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002; // Vous pouvez ajuster cette valeur pour modifier la vitesse de rotation
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function App() {
  const [orbitActive, setOrbitActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setOrbitActive(true)}
      onMouseLeave={() => setOrbitActive(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw', // prend toute la largeur de la fenêtre
        height: '30vh', // prend toute la hauteur de la fenêtre
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div
        style={{
          width: '8em',
          height: '8em',
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }} style={{ background: 'white', width: '100%', height: '100%' }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <SphereWithTexture />
          {orbitActive && <OrbitControls enableZoom={false} enablePan={false} />}
        </Canvas>
      </div>
    </div>
  );
    }
