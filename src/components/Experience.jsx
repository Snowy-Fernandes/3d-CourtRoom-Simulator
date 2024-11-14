import { Canvas } from "@react-three/fiber";
import { Box, Gltf, PerspectiveCamera, Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Emilian } from "../../public/models/Emilian";

export default function Experience(){
    return (
    <Canvas>
        <OrbitControls
        minDistance={3}  // Minimum zoom level (distance from the model)
        maxDistance={5} // Maximum zoom level (distance from the model)
        enableDamping // Optional: Adds smooth movement
        dampingFactor={0.25} // Optional: Adjust damping effect
        rotateSpeed={0.5} // Adjust rotation speed for better user experience
        enablePan={false} // Disable panning to keep the view fixed // Adjust rotation speed for better user experience
      />
      <Environment preset="night" />
        <ambientLight intensity={0.9} color={"white"}/>
        <Gltf 
            src= "/models/room2.glb"
            scale={[7,7,7]}
            position={[-5, -14, 6]} 
            rotation={[0, Math.PI +2, 0]}
        />
        <Emilian 
            src= "/models/emilian-avatar.glb"
            scale={[8,8,8]}
            position={[-6,-13,-29]} 
            rotation={[0, 0.5, 0]}
        />
        {/* <Gltf
        src="/models/flag4.glb"
        scale={[4,4,4]}
        position={[-6,13,-29]}
        /> */}
    </Canvas>
    ); 
}