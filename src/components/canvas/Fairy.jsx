import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../Loader";

const FairyCanvas = () => {
  const fairy = useGLTF("./fairy/scene.gltf");

  return (
    <div
      className={
        "absolute inset-0 top-[10px] left-[180px] max-w-7xl mx-auto flex flex-col "
      }
    >
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            autoRotateSpeed={1.1}
            enableZoom={false}
            maxPolarAngle={Math.PI / 4}
            minPolarAngle={Math.PI / 4}
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
              object={fairy.scene}
              scale={0.3}
              position={[0, 2, 0]}
              rotation={[0, -0.5, -0.5]}
            />
          </mesh>
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default FairyCanvas;
