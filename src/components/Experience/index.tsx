import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import Custom from "../Custom/Index"

const Experience = () => {
  const cubeRef = useRef<any>(null);
  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta // for such thing like animation dont use state, use ref directly
    //we use delta to make animation sync. because every person have different fps
  })
  return (
    <>
      <OrbitControls enableDamping makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={1.5} />
      <mesh ref={cubeRef} scale={2} rotation-y={Math.PI / 4} position={[2, 0, 0]}>
        {/* <sphereGeometry args={[1, 32, 32]} /> */}
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position={[0, -1, 0]} scale={10}> {/* roation to - to see the face */}
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <Custom verticesCount={10} />
    </>
  )
}

export default Experience