// src/components/Model.jsx
import React from 'react';
import { useGLTF } from '@react-three/drei';

// Component to load and render the GLTF model
const Model = (props) => {
  const { scene } = useGLTF('/models/classroom.glb'); // Path to your .glb file
  return <primitive object={scene} {...props} />;
};

export default Model;
