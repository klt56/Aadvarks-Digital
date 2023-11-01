import React from 'react';
import { Box, Plane, RoundedBox, Sphere, useTexture } from '@react-three/drei';

function PhoneScreen() {
    // Charger la texture pour l'écran
    const screenTexture = useTexture('/assets/images/imgPhone.jpg');
    const backTexture = useTexture('/assets/texture/texture2.jpg'); // À remplacer par votre chemin de texture

    return (
        <>
            {/* Avant du téléphone */}
            <RoundedBox args={[1, 2, 0.1]} radius={0.05} smoothness={4}>
                <meshStandardMaterial color="grey" metalness={0.5} roughness={0.2} />
            </RoundedBox>

            {/* Arrière du téléphone */}
            <RoundedBox args={[1, 2, 0.1]} radius={0.05} smoothness={4} position={[0, 0, -0.1]}>
                <meshStandardMaterial map={backTexture} metalness={0.8} roughness={0.2} />
            </RoundedBox>

            {/* Screen inside the phone */}
            <Plane args={[0.9, 1.8, 4, 4]} position={[0, 0, 0.055]}>
                <meshStandardMaterial map={screenTexture} />
            </Plane>

            {/* Notch for the front camera */}
            <Box args={[0.3, 0.05, 0.01]} position={[0, 0.9, 0.055]}>
                <meshStandardMaterial color="black" />
            </Box>



                      {/* Buttons on the side */}
            <Box args={[0.05, 0.3, 0.05]} position={[-0.50, 0, 0.01]}>
                <meshStandardMaterial color="white" metalness={0.5} roughness={0.2} />
            </Box>
            <Box args={[0.05, 0.15, 0.05]} position={[-0.50, -0.65, 0.01]}>
                <meshStandardMaterial color="white" metalness={0.5} roughness={0.2} />
            </Box>


            {/* Speaker grille */}
            <Box args={[0.7, 0.05, 0.01]} position={[0, 0.95, 0.055]}>
                <meshStandardMaterial color="darkgrey" />
            </Box>

           {/* Charging port at the bottom */}
           <Box args={[0.3, 0.05, 0.01]} position={[0, -0.95, 0.055]}>
                <meshStandardMaterial color="darkgrey" />
            </Box>

            {/* Camera Lens at the back */}
            <Sphere args={[0.1, 32, 32]} position={[0, 0.7, -0.125]}>
                <meshStandardMaterial color="darkgrey" />
            </Sphere>
        </>
    );
}

export default PhoneScreen;

