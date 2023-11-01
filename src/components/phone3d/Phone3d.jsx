import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import PhoneScreen from './PhoneScreen';

function Phone3d() {
    return (
        <Canvas>
            <OrbitControls enableDamping dampingFactor={0.5} />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <PhoneScreen />
        </Canvas>
    );
}

export default Phone3d;
