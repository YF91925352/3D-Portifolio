import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../Loader";

const StarCanvas = () => {
  const star = useGLTF("./star/scene.gltf");

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <mesh>
          <hemisphereLight intensity={0.1} groundColor="black" />
          <pointLight intensity={1} />
          <spotLight
            position={[-40, 100, 60]}
            angle={0.4}
            penumbra={1}
            intensity={1}
            shadow-mapSize={1024}
          />
          <primitive
            object={star.scene}
            scale={0.05}
            position={[0, 0, 0]}
            rotation={[0, -0.25, -0.1]}
          />
        </mesh>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default StarCanvas;
