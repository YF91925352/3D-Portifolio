import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../Loader";

const GithubCanvas = () => {
  const github = useGLTF("./github/scene.gltf");

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={Math.PI / 4}
        />
        <mesh>
          <hemisphereLight intensity={0.1} groundColor="black" />
          <pointLight intensity={1} />
          <spotLight
            position={[-40, 200, 60]}
            angle={0.4}
            penumbra={1}
            intensity={1}
            shadow-mapSize={1024}
          />
          <primitive
            object={github.scene}
            scale={0.4}
            position={[0.4, 1, -2]}
            rotation={[0, -0.25, -0.1]}
          />
        </mesh>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default GithubCanvas;
