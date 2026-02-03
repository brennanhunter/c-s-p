"use client";

import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export default function Starfield() {
  return (
    <Canvas camera={{ position: [0, 0, 0] }} style={{ width: '100%', height: '100%' }}>
      <Stars 
        radius={50} 
        depth={50} 
        count={8000} 
        factor={2} 
        saturation={0.3} 
        fade={true}
        speed={1.5}
      />
    </Canvas>
  );
}
