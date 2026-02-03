"use client";

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function SatelliteModel({ scale }: { scale: number }) {
  const satelliteRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/model/satellite.glb');

  useFrame((state) => {
    if (satelliteRef.current) {
      // Rotate the satellite along the Z axis
      satelliteRef.current.rotation.z += 0.002;
      // Add subtle floating motion
      satelliteRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <primitive 
      ref={satelliteRef} 
      object={scene} 
      scale={scale}
      position={[-2, 0, 0]}
      rotation={[Math.PI / 4, Math.PI / 4, 0]}
    />
  );
}

export default function Satellite() {
  const [scale, setScale] = useState(6.0);

  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth < 640) {
        setScale(2.5); // Mobile
      } else if (window.innerWidth < 1024) {
        setScale(4.0); // Tablet
      } else {
        setScale(6.0); // Desktop
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        style={{ width: '120%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <SatelliteModel scale={scale} />
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload('/model/satellite.glb');
