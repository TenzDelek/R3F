import { Canvas } from '@react-three/fiber'
import Experience from "./components/Experience"
import * as THREE from "three"

const App = () => {
  return (
    // <Canvas orthographic camera={{ zoom: 100, fov: 45, near: 0.1, far: 200, position: [3, 2, 6] }}> {/* Apply zoom only when the scene is orthographic */}
    <Canvas
      dpr={[1, 2]} //pixel ratio default is 1,2 already
      gl={{
        antialias: false
        , toneMapping: THREE.NoToneMapping,
        outputColorSpace: THREE.SRGBColorSpace
      }} // keep it as true (default) , we do it here false just for demo
      camera={{ fov: 45, near: 0.1, far: 200, position: [3, 2, 6] }}>
      <Experience />
    </Canvas>
  )
}

export default App